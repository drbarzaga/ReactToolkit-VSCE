import * as vscode from "vscode";
import { categories } from "./resources";

export class ReactToolkitViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "react-toolkit";

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this.getWebviewContent(webviewView.webview);
  }

  private getCategoryIcon(
    category: (typeof categories)[0],
    webview: vscode.Webview
  ): string {
    switch (category.icon.type) {
      case "lucide":
        return `<i data-lucide="${category.icon.value}"></i>`;
      case "url":
        return `<img src="${category.icon.value}" alt="${category.name} icon" class="category-icon-img">`;
      case "local":
        return `<img src="${webview.asWebviewUri(
          vscode.Uri.joinPath(this._extensionUri, category.icon.value)
        )}" alt="${category.name} icon" class="category-icon-img">`;
      default:
        return `<i data-lucide="help-circle"></i>`;
    }
  }

  public getWebviewContent(webview: vscode.Webview) {
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
    );
    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "main.css")
    );
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "main.js")
    );
    const toolkitIconUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "icon.png")
    );

    const nonce = getNonce();

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${styleResetUri}" rel="stylesheet">
        <link href="${styleVSCodeUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
        <title>React Toolkit</title>
      </head>
      <body>
        <header>
          <img class="toolkit-icon" src="${toolkitIconUri}" alt="React Toolkit Icon">
          <div class="header-text">
            <h1>React Toolkit</h1>
            <p class="info-text">Explore a curated list of essential React resources. Build robust, scalable applications with these powerful tools.</p>
          </div>
        </header>
        <div class="search-container">
          <i data-lucide="search" class="search-icon"></i>
          <input type="text" id="search" placeholder="Search resources...">
        </div>
        <div id="categories">
          ${categories
            .map(
              (category) => `
  <div class="category expanded">
    <h2>
      <span class="category-icon">
        ${this.getCategoryIcon(category, webview)}
      </span>
      ${category.name}
      <span class="category-toggle">
        <i data-lucide="chevron-down"></i>
      </span>
    </h2>
    <div class="resources">
      ${category.resources
        .map(
          (resource) => `
  <div class="resource" data-name="${resource.name.toLowerCase()}" data-category="${category.name.toLowerCase()}">
    <div class="resource-content">
      <div class="resource-logo-container">
        ${
          resource.logo
            ? `<img class="resource-logo" src="${
                resource.logo.startsWith("http")
                  ? resource.logo
                  : webview.asWebviewUri(
                      vscode.Uri.joinPath(this._extensionUri, resource.logo)
                    )
              }" 
            alt="${resource.name} logo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          >`
            : ""
        }
        <i data-lucide="box" class="resource-logo-fallback" style="display:${
          resource.logo ? "none" : "flex"
        }"></i>
      </div>
      <div class="resource-info">
        <h3>${resource.name}</h3>
        <p>${resource.description}</p>
      </div>
    </div>
    <a href="${resource.url}" target="_blank">Visit</a>
  </div>
`
        )
        .join("")}
    </div>
  </div>
`
            )
            .join("")}
        </div>
        <script src="https://unpkg.com/lucide@latest"></script>
        <script>
          lucide.createIcons();
        </script>
        <script nonce="${nonce}" src="${scriptUri}"></script>
      </body>
      </html>`;
  }
}

function getNonce() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
