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
      vscode.Uri.joinPath(this._extensionUri, "media", "toolkit-icon.svg")
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
            <p class="info-text">Explore a curated list of essential React resources. Build robust, scalable applications with these powerful tools. Click on a category to expand or collapse it. 🚀</p>
          </div>
        </header>
        <div class="search-container">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="search" placeholder="Search resources...">
        </div>
        <div id="categories">
          ${categories
            .map(
              (category) => `
  <div class="category expanded">
    <h2>
      <span class="category-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${
          category.icon
        }"><use href="#icon-${category.icon}"></use></svg>
      </span>
      ${category.name}
      <span class="category-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="resource-logo-fallback" style="display:${
          resource.logo ? "none" : "flex"
        }"><use href="#icon-box"></use></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
          <symbol id="icon-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </symbol>
          <symbol id="icon-layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line>
          </symbol>
          <symbol id="icon-database" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </symbol>
          <symbol id="icon-git-branch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
          </symbol>
        </svg>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('search').focus();
          });
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
