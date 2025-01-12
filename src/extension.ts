import * as vscode from "vscode";
import { ReactToolkitViewProvider } from "./ReactToolkitViewProvider";

export function activate(context: vscode.ExtensionContext) {
  const provider = new ReactToolkitViewProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      ReactToolkitViewProvider.viewType,
      provider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("react-toolkit.showResources", () => {
      vscode.commands.executeCommand(
        "workbench.view.extension.react-toolkit-sidebar"
      );
    })
  );
}

export function deactivate() {}
