import * as vscode from "vscode";
import { categories } from "./resources";

export class ReactToolkitViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "react-toolkit";
  private static readonly STATE_KEY = "react-toolkit.expandedCategories";

  constructor(private readonly _context: vscode.ExtensionContext) {}

  private get _extensionUri() {
    return this._context.extensionUri;
  }

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

    webviewView.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "getState": {
          const expandedCategories = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY,
            []
          );
          webviewView.webview.postMessage({
            command: "setState",
            expandedCategories,
          });
          break;
        }
        case "saveState": {
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY,
            message.expandedCategories
          );
          break;
        }
        case "openExternalLink": {
          vscode.env.openExternal(vscode.Uri.parse(message.url));
          break;
        }
      }
    });
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
    const lucideUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "icons.js")
    );
    const toolkitIconUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "icon.png")
    );

    const nonce = getNonce();
    const totalResources = categories.reduce(
      (sum, cat) => sum + cat.resources.length,
      0
    );
    const totalCategories = categories.length;

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
        <img class="toolkit-icon" src="${toolkitIconUri}" alt="ReactToolkit Icon">
        <h1>ReactToolkit</h1>
        <p class="info-text">Explore a curated list of essential React resources. Build robust, scalable applications with these powerful tools.</p>
        <div class="stats">
          <span class="stat"><i data-lucide="layers"></i>${totalResources} resources</span>
          <span class="stat-sep"></span>
          <span class="stat"><i data-lucide="folder"></i>${totalCategories} categories</span>
        </div>
      </header>
      <div class="search-container">
        <div class="search-wrapper">
          <i data-lucide="search" class="search-icon"></i>
          <input type="text" id="search" placeholder="Search resources..." aria-label="Search resources" aria-controls="categories" aria-autocomplete="list">
          <span id="search-results" class="search-results" aria-live="polite" aria-atomic="true"></span>
        </div>
      </div>
      <div id="categories">
        ${categories
          .map(
            (category) => `
<div class="category" data-category-name="${category.name}">
  <h2 role="button" aria-expanded="false" aria-controls="resources-${category.name.toLowerCase().replace(/\s+/g, "-")}" tabindex="0">
    <span class="category-icon" aria-hidden="true">
      ${this.getCategoryIcon(category, webview)}
    </span>
    ${category.name}
    <span class="category-count" aria-label="${category.resources.length} resources">${category.resources.length}</span>
    <span class="category-toggle" aria-hidden="true">
      <i data-lucide="chevron-down"></i>
    </span>
  </h2>
  <div class="resources" id="resources-${category.name.toLowerCase().replace(/\s+/g, "-")}" role="list">
    ${category.resources
      .map(
        (resource) => `
<div class="resource" role="listitem" data-name="${resource.name.toLowerCase()}" data-category="${category.name.toLowerCase()}">
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
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >`
          : ""
      }
      <i data-lucide="package" class="resource-logo-fallback" style="display:${
        resource.logo ? "none" : "flex"
      }"></i>
    </div>
    <div class="resource-info">
      <h3>${resource.name}</h3>
      <p class="resource-text">${resource.description}</p>
    </div>
  </div>
  <a href="${resource.url}" target="_blank" title="Open ${resource.name}" aria-label="Open ${resource.name}"><i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
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
      <div id="empty-state" class="empty-state" style="display: none;">
        <i data-lucide="search-x" class="empty-state-icon"></i>
        <h2>No results found</h2>
        <p>Try adjusting your search or explore our categories.</p>
        <button id="clear-search" class="clear-search-button" aria-label="Clear search and show all categories">Clear search</button>
      </div>
      <footer class="footer">
        <div class="footer-content">
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE/issues/new" target="_blank" class="footer-button" title="Suggest a new resource">
            <i data-lucide="package-plus"></i>
            <span>New Resource</span>
          </a>
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE" target="_blank" class="footer-button" title="Star this project on GitHub">
            <i data-lucide="star"></i>
            <span>Star on GitHub</span>
          </a>
          <a href="https://ko-fi.com/dayanperez" target="_blank" class="footer-button" title="Support me on Ko-fi, every donation is appreciated">
            <i data-lucide="coffee"></i>
            <span>Support me</span>
          </a>
        </div>
      </footer>
      <script src="${lucideUri}"></script>
      <script>lucide.createIcons();</script>
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
