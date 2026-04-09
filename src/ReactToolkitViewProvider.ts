import * as vscode from "vscode";
import { fetchCategories, setCategories, type Category } from "./resources";

export class ReactToolkitViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "react-toolkit";
  private static readonly STATE_KEY = "react-toolkit.expandedCategories";
  private static readonly STATE_KEY_FAVORITES = "react-toolkit.favorites";
  private static readonly STATE_KEY_SEEN_VERSION = "react-toolkit.seenNewVersion";
  private static readonly CURRENT_VERSION = "1.6.0";

  private _view?: vscode.WebviewView;
  private _panel?: vscode.WebviewPanel;
  private _statusBarItem?: vscode.StatusBarItem;
  private _categories: Category[] = [];
  private _loadError = false;

  constructor(private readonly _context: vscode.ExtensionContext) {}

  public async loadCategories(): Promise<void> {
    try {
      this._categories = await fetchCategories();
      this._loadError = false;
      setCategories(this._categories);
    } catch (e) {
      this._loadError = true;
      console.error("[ReactToolkit] Failed to load from Supabase:", e);
    }
  }

  public initStatusBar(): void {
    const seenVersion = this._context.globalState.get<string>(
      ReactToolkitViewProvider.STATE_KEY_SEEN_VERSION, ""
    );
    if (seenVersion === ReactToolkitViewProvider.CURRENT_VERSION) { return; }

    const newCatCount = this._categories.filter((cat) =>
      cat.resources.some((r) => r.isNew)
    ).length;
    if (newCatCount === 0) { return; }

    this._statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left, 0
    );
    this._statusBarItem.text = `$(sparkles) ${newCatCount} new in React Toolkit`;
    this._statusBarItem.tooltip = `${newCatCount} categories updated in v${ReactToolkitViewProvider.CURRENT_VERSION} — Click to open`;
    this._statusBarItem.command = "workbench.view.extension.react-toolkit-sidebar";
    this._statusBarItem.show();
    this._context.subscriptions.push(this._statusBarItem);
  }

  private _clearStatusBar(): void {
    this._statusBarItem?.hide();
    this._statusBarItem?.dispose();
    this._statusBarItem = undefined;
  }

  private get _extensionUri() {
    return this._context.extensionUri;
  }

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    // Show loading state immediately
    webviewView.webview.html = this._getLoadingHtml();

    // Fetch from Supabase then render
    fetchCategories()
      .then((cats) => {
        this._categories = cats;
        this._loadError = false;
        setCategories(cats);
        webviewView.webview.html = this.getWebviewContent(webviewView.webview);
      })
      .catch(() => {
        this._loadError = true;
        webviewView.webview.html = this._getErrorHtml();
      });

    // Show badge if there are new resources the user hasn't seen yet
    const seenVersion = this._context.globalState.get<string>(
      ReactToolkitViewProvider.STATE_KEY_SEEN_VERSION, ""
    );
    if (seenVersion !== ReactToolkitViewProvider.CURRENT_VERSION) {
      const newCatCount = this._categories.filter((cat) =>
        cat.resources.some((r) => r.isNew)
      ).length;
      if (newCatCount > 0) {
        try {
          (webviewView as any).badge = {
            value: newCatCount,
            tooltip: `${newCatCount} categories updated in v${ReactToolkitViewProvider.CURRENT_VERSION}`,
          };
        } catch {}
      }
    }

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
        case "getFavorites": {
          const favorites = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES,
            []
          );
          webviewView.webview.postMessage({ command: "setFavorites", favorites });
          break;
        }
        case "dismissNew": {
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY_SEEN_VERSION,
            ReactToolkitViewProvider.CURRENT_VERSION
          );
          try {
            if (this._view) (this._view as any).badge = undefined;
          } catch {}
          this._clearStatusBar();
          break;
        }
        case "toggleFavorite": {
          const favorites = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES,
            []
          );
          const url = message.url as string;
          const idx = favorites.indexOf(url);
          if (idx >= 0) {
            favorites.splice(idx, 1);
          } else {
            favorites.push(url);
          }
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES,
            favorites
          );
          webviewView.webview.postMessage({ command: "setFavorites", favorites });
          this._panel?.webview.postMessage({ command: "setFavorites", favorites });
          break;
        }
        case "openPanel": {
          this.openAsPanel();
          break;
        }
      }
    });
  }

  public openAsPanel(): void {
    if (this._panel) {
      this._panel.reveal();
      return;
    }

    this._panel = vscode.window.createWebviewPanel(
      "react-toolkit-panel",
      "ReactToolkit",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [this._extensionUri],
        retainContextWhenHidden: true,
      }
    );

    this._panel.iconPath = vscode.Uri.joinPath(this._extensionUri, "media", "icon.png");
    this._panel.webview.html = this.getPanelWebviewContent(this._panel.webview);

    // Collapse the sidebar when popping out
    vscode.commands.executeCommand("workbench.action.closeSidebar");

    this._panel.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "getState": {
          const expandedCategories = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY, []
          );
          this._panel?.webview.postMessage({ command: "setState", expandedCategories });
          break;
        }
        case "saveState": {
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY, message.expandedCategories
          );
          break;
        }
        case "openExternalLink": {
          vscode.env.openExternal(vscode.Uri.parse(message.url));
          break;
        }
        case "getFavorites": {
          const favorites = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES, []
          );
          this._panel?.webview.postMessage({ command: "setFavorites", favorites });
          break;
        }
        case "toggleFavorite": {
          const favorites = this._context.globalState.get<string[]>(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES, []
          );
          const url = message.url as string;
          const idx = favorites.indexOf(url);
          if (idx >= 0) { favorites.splice(idx, 1); } else { favorites.push(url); }
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY_FAVORITES, favorites
          );
          this._panel?.webview.postMessage({ command: "setFavorites", favorites });
          this._view?.webview.postMessage({ command: "setFavorites", favorites });
          break;
        }
        case "dismissNew": {
          await this._context.globalState.update(
            ReactToolkitViewProvider.STATE_KEY_SEEN_VERSION,
            ReactToolkitViewProvider.CURRENT_VERSION
          );
          try { if (this._view) (this._view as any).badge = undefined; } catch {}
          this._clearStatusBar();
          break;
        }
        case "collapsePanel": {
          this._panel?.dispose();
          vscode.commands.executeCommand("workbench.view.extension.react-toolkit-sidebar");
          break;
        }
      }
    });

    this._panel.onDidDispose(() => {
      this._panel = undefined;
    });
  }

  public getPanelWebviewContent(webview: vscode.Webview): string {
    const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "reset.css"));
    const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css"));
    const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "main.css"));
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "main.js"));
    const lucideUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "icons.js"));
    const toolkitIconUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "icon.png"));
    const nonce = getNonce();

    const totalResources = this._categories.reduce((sum, cat) => sum + cat.resources.length, 0);
    const totalCategories = this._categories.length;

    const logoHtml = (resource: (typeof this._categories)[0]["resources"][0]) => {
      if (!resource.logo) return `<i data-lucide="package" class="resource-logo-fallback" style="display:flex"></i>`;
      const src = resource.logo.startsWith("http")
        ? resource.logo
        : webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, resource.logo));
      return `<img class="resource-logo" src="${src}" alt="${resource.name}" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <i data-lucide="package" class="resource-logo-fallback" style="display:none"></i>`;
    };

    const navItems = this._categories.map(cat => {
      const icon = this.getCategoryIcon(cat, webview);
      return `<button class="pnav-item" data-filter="${cat.name}" title="${cat.name}">
        <span class="pnav-icon">${icon}</span>
        <span class="pnav-label">${cat.name}</span>
        <span class="pnav-count">${cat.resources.length}</span>
      </button>`;
    }).join("");

    const cards = this._categories.map(cat =>
      cat.resources.map(r => `
<div class="pcard" data-category="${cat.name.toLowerCase()}" data-name="${r.name.toLowerCase()}" data-desc="${r.description.toLowerCase()}" data-url="${r.url}">
  <div class="pcard-header">
    <div class="pcard-logo">${logoHtml(r)}</div>
    <div class="pcard-name">${r.name}${r.isNew ? '<span class="badge-new">New</span>' : ''}</div>
  </div>
  <div class="pcard-desc">${r.description}</div>
  <div class="pcard-footer">
    <span class="pcard-cat">${cat.name}</span>
    <div class="pcard-actions">
      <button class="resource-favorite" data-url="${r.url}" aria-label="Add ${r.name} to favorites"><i data-lucide="heart"></i></button>
      <a href="${r.url}" target="_blank" title="Open ${r.name}" aria-label="Open ${r.name}"><i data-lucide="arrow-up-right"></i></a>
    </div>
  </div>
</div>`).join("")
    ).join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="${styleResetUri}" rel="stylesheet">
  <link href="${styleVSCodeUri}" rel="stylesheet">
  <link href="${styleMainUri}" rel="stylesheet">
  <title>ReactToolkit</title>
</head>
<body class="panel-mode">
  <div class="panel-shell">
    <header class="panel-header">
      <img class="toolkit-icon" src="${toolkitIconUri}" alt="ReactToolkit">
      <h1>ReactToolkit</h1>
      <div class="panel-header-divider"></div>
      <span class="panel-header-version">v${ReactToolkitViewProvider.CURRENT_VERSION}</span>
      <div class="panel-header-right">
        <div class="stats">
          <span class="stat"><i data-lucide="layers"></i>${totalResources} resources</span>
          <span class="stat-sep"></span>
          <span class="stat"><i data-lucide="folder"></i>${totalCategories} categories</span>
        </div>
        <div class="header-actions">
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE/issues/new" target="_blank" class="header-action-btn" title="Suggest a resource">
            <i data-lucide="package-plus"></i><span>Suggest a Resource</span>
          </a>
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE" target="_blank" class="header-action-btn" title="Star on GitHub">
            <i data-lucide="star"></i><span>Star on GitHub</span>
          </a>
          <a href="https://ko-fi.com/dayanperez" target="_blank" class="header-action-btn" title="Support on Ko-fi">
            <i data-lucide="coffee"></i><span>Support me</span>
          </a>
          <button id="collapse-panel-btn" class="expand-btn" title="Collapse to sidebar" aria-label="Collapse to sidebar">
            <i data-lucide="minimize-2"></i>
          </button>
        </div>
      </div>
    </header>

    <div class="panel-search-bar">
      <div class="search-wrapper">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" id="search" placeholder="Search ${totalResources} resources..." aria-label="Search resources">
        <span id="search-results" class="search-results" aria-live="polite"></span>
      </div>
      <button id="favorites-filter" class="favorites-filter-btn" title="Show favorites" aria-pressed="false">
        <i data-lucide="heart"></i>
      </button>
    </div>

    <div class="panel-body">
      <nav class="panel-nav">
        <button class="pnav-item active" data-filter="all">
          <span class="pnav-icon"><i data-lucide="layers"></i></span>
          <span class="pnav-label">All resources</span>
          <span class="pnav-count">${totalResources}</span>
        </button>
        ${navItems}
      </nav>

      <main class="panel-content">
        <div id="panel-grid" class="panel-grid">${cards}</div>
        <div id="empty-state" class="empty-state" style="display:none;">
          <i data-lucide="search-x" class="empty-state-icon"></i>
          <h2 id="empty-state-title">No results found</h2>
          <p id="empty-state-msg">Try a different search term or category.</p>
          <button id="clear-search" class="clear-search-button">Clear search</button>
        </div>
      </main>
    </div>
  </div>
  <script src="${lucideUri}"></script>
  <script>lucide.createIcons();</script>
  <script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }

  private getCategoryIcon(
    category: (typeof this._categories)[0],
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

  public getWebviewContent(webview: vscode.Webview, isPanel = false) {
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
    const totalResources = this._categories.reduce(
      (sum, cat) => sum + cat.resources.length,
      0
    );
    const totalCategories = this._categories.length;

    const seenVersion = this._context.globalState.get<string>(
      ReactToolkitViewProvider.STATE_KEY_SEEN_VERSION, ""
    );
    const showBanner = seenVersion !== ReactToolkitViewProvider.CURRENT_VERSION;
    const newCategories = showBanner
      ? this._categories.filter((cat) => cat.resources.some((r) => r.isNew))
      : [];
    const newCount = newCategories.reduce(
      (sum, cat) => sum + cat.resources.filter((r) => r.isNew).length, 0
    );
    const newCategoryNames = newCategories.map((c) => c.name);
    const bannerCategoryLabel = newCategoryNames.length <= 3
      ? newCategoryNames.join(", ")
      : `${newCategoryNames.slice(0, 3).join(", ")} +${newCategoryNames.length - 3} more`;

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
    <body class="${isPanel ? "panel-mode" : ""}">
      <header>
        <img class="toolkit-icon" src="${toolkitIconUri}" alt="ReactToolkit Icon">
        <h1>ReactToolkit</h1>
        <p class="info-text">Explore a curated list of essential React resources. Build robust, scalable applications with these powerful tools.</p>
        <div class="stats">
          <span class="stat"><i data-lucide="layers"></i>${totalResources} resources</span>
          <span class="stat-sep"></span>
          <span class="stat"><i data-lucide="folder"></i>${totalCategories} categories</span>
        </div>
        <div class="header-actions">
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE/issues/new" target="_blank" class="header-action-btn" title="Suggest a new resource">
            <i data-lucide="package-plus"></i>
            <span>Suggest</span>
          </a>
          <a href="https://github.com/drbarzaga/ReactToolkit-VSCE" target="_blank" class="header-action-btn" title="Star on GitHub">
            <i data-lucide="star"></i>
            <span>Star</span>
          </a>
          <a href="https://ko-fi.com/dayanperez" target="_blank" class="header-action-btn" title="Support me on Ko-fi">
            <i data-lucide="coffee"></i>
            <span>Support</span>
          </a>
        </div>
      </header>
      ${showBanner && newCount > 0 ? `
      <div class="new-banner" id="new-banner">
        <div class="new-banner-top">
          <span class="new-banner-title"><i data-lucide="sparkles"></i> What's new in v${ReactToolkitViewProvider.CURRENT_VERSION}</span>
          <button id="dismiss-new" class="dismiss-btn" title="Dismiss" aria-label="Dismiss">
            <i data-lucide="x"></i>
          </button>
        </div>
        <p class="new-banner-body">${newCount} resources across <strong>${newCategories.length} categories</strong>: ${bannerCategoryLabel}</p>
        <button id="show-new" class="show-new-btn">Show new resources</button>
      </div>` : ""}
      <div class="search-container">
        <div class="search-row">
          <div class="search-wrapper">
            <i data-lucide="search" class="search-icon"></i>
            <input type="text" id="search" placeholder="Search resources..." aria-label="Search resources" aria-controls="categories" aria-autocomplete="list">
            <span id="search-results" class="search-results" aria-live="polite" aria-atomic="true"></span>
          </div>
          <button id="favorites-filter" class="favorites-filter-btn" title="Show favorites" aria-pressed="false">
            <i data-lucide="heart"></i>
          </button>
          ${!isPanel ? `<button id="open-panel-btn" class="expand-btn" title="Open as full panel" aria-label="Open as full panel">
            <i data-lucide="maximize-2"></i>
          </button>` : ""}
        </div>
      </div>
      <div id="categories">
        ${this._categories
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
<div class="resource" role="listitem" data-name="${resource.name.toLowerCase()}" data-category="${category.name.toLowerCase()}" data-url="${resource.url}">
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
      <h3>${resource.name}${resource.isNew ? '<span class="badge-new">New</span>' : ""}</h3>
      <p class="resource-text">${resource.description}</p>
    </div>
  </div>
  <button class="resource-favorite" data-url="${resource.url}" aria-label="Add ${resource.name} to favorites" title="Add to favorites">
    <i data-lucide="heart"></i>
  </button>
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
        <h2 id="empty-state-title">No results found</h2>
        <p id="empty-state-msg">Try adjusting your search or explore our this._categories.</p>
        <button id="clear-search" class="clear-search-button" aria-label="Clear search and show all categories">Clear search</button>
      </div>
      <script src="${lucideUri}"></script>
      <script>lucide.createIcons();</script>
      <script nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
  }

  private _getLoadingHtml(): string {
    return `<!DOCTYPE html><html><head><meta charset="UTF-8">
      <style>
        body { margin:0; display:flex; align-items:center; justify-content:center;
               height:100vh; background:var(--vscode-editor-background);
               font-family:var(--vscode-font-family); color:var(--vscode-foreground); }
        .loading { display:flex; flex-direction:column; align-items:center; gap:10px; opacity:0.5; }
        .spinner { width:20px; height:20px; border:2px solid currentColor;
                   border-top-color:transparent; border-radius:50%;
                   animation:spin 0.7s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }
        p { font-size:12px; margin:0; }
      </style></head><body>
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading resources…</p>
      </div>
    </body></html>`;
  }

  private _getErrorHtml(): string {
    return `<!DOCTYPE html><html><head><meta charset="UTF-8">
      <style>
        body { margin:0; display:flex; align-items:center; justify-content:center;
               height:100vh; background:var(--vscode-editor-background);
               font-family:var(--vscode-font-family); color:var(--vscode-foreground); }
        .error { display:flex; flex-direction:column; align-items:center; gap:8px;
                 text-align:center; padding:24px; opacity:0.6; }
        p { font-size:12px; margin:0; }
        .title { font-size:13px; font-weight:600; }
      </style></head><body>
      <div class="error">
        <p class="title">Could not load resources</p>
        <p>Check your internet connection<br>and reload the extension.</p>
      </div>
    </body></html>`;
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
