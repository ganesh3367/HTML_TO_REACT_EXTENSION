import * as vscode from 'vscode';
import { convertHtmlToJsx } from './converter';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "html-to-react" is now active!');

  const disposable = vscode.commands.registerCommand('html-to-react.convert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found. Open an HTML file and select the markup.');
      return;
    }

    const selection = editor.selection;
    const htmlCode = editor.document.getText(selection).trim();

    if (!htmlCode) {
      vscode.window.showErrorMessage('Please select some HTML code to convert!');
      return;
    }

    const componentName = (await vscode.window.showInputBox({
      prompt: 'Enter Component Name',
      placeHolder: 'MyComponent'
    })) || 'MyComponent';

    const jsx = convertHtmlToJsx(htmlCode, componentName);

    const doc = await vscode.workspace.openTextDocument({
      content: jsx,
      language: 'javascriptreact'
    });

    await vscode.window.showTextDocument(doc, { preview: false });

    vscode.window.showInformationMessage('✅ HTML converted to React JSX!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}