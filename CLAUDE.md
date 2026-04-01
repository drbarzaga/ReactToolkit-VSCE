# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (project uses pnpm via .npmrc)
npm install

# Compile TypeScript once (outputs to /out)
npm run compile

# Watch mode for development
npm run watch

# Lint
npm run lint

# Run tests (compiles + lints first, then runs Mocha via VS Code test framework)
npm run test

# Pre-publish build (used before packaging to marketplace)
npm run vscode:prepublish
```

To debug the extension, open the project in VS Code and press F5 (uses `.vscode/launch.json` → "Run Extension").

## Architecture

ReactToolkit is a VS Code extension that renders a sidebar webview with a curated library of React resources. It has three layers:

**1. Extension host (`src/`)**
- `extension.ts` — entry point; registers the webview view provider and the `react-toolkit.showResources` command
- `ReactToolkitViewProvider.ts` — implements `vscode.WebviewViewProvider`; generates all HTML server-side via template strings; handles icon resolution across three types (Lucide vector icons loaded from CDN, external image URLs, local files under `media/logos/`)
- `resources.ts` — the entire resource catalog (~1,900 lines); defines `Resource` and `Category` interfaces; the sole source of truth for what appears in the UI

**2. Webview client (`media/`)**
- `main.js` — handles category expand/collapse, real-time search filtering (by name and category using `data-*` attributes), and Lucide icon init
- `main.css` — theming via VS Code CSS variables (`--vscode-*`); sticky search bar; responsive grid

**3. Assets (`media/logos/`)**
- Per-category subdirectories hold logo images referenced by `resources.ts` entries

## Key patterns

**Adding a resource**: Add an entry to the appropriate category array in `src/resources.ts`. Each resource is `{ name, description, url, logo? }`. Logo paths are relative to the extension root (e.g., `media/logos/ui-frameworks-libraries/shadcn.png`) or full external URLs.

**Adding a category**: Add a new object to the exported `categories` array in `resources.ts` with `{ name, resources, icon }`. The `icon` field supports `{ type: 'lucide', value: 'IconName' }`, `{ type: 'url', value: '...' }`, or `{ type: 'file', value: 'media/logos/...' }`. Then add a corresponding logo image under `media/logos/`.

**Webview security**: The provider uses a CSP nonce (`getNonce()`) and restricts `localResourceRoots` to the extension's `media/` directory. All local asset URIs must be converted via `webview.asWebviewUri()`.

**No framework**: The webview UI is plain HTML/CSS/JS — no React, no bundler for the client side. The HTML is built entirely as a template string in `getWebviewContent()`.

## Extension metadata

- Publisher: `drbarzaga` — must match for marketplace publishing
- Activation: lazy, on `onCommand:react-toolkit.showResources`
- Min VS Code version: `^1.60.0`
- Build output: `/out` (gitignored, excluded from VSIX via `.vscodeignore`)
