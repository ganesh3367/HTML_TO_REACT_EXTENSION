const vscode = require('vscode');
const { convertHtmlToJsx } = require('./converter');

function activate(context) {
  console.log('✅ HTML to React (JS version) is now active!');

  let disposable = vscode.commands.registerCommand('html-to-react.convert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Please open a file first!');
      return;
    }

    const selection = editor.selection;
    const htmlCode = editor.document.getText(selection);

    if (!htmlCode.trim()) {
      vscode.window.showWarningMessage('Select some HTML code first!');
      return;
    }

    const componentName = await vscode.window.showInputBox({
      prompt: 'Enter component name (optional)',
      placeHolder: 'MyComponent'
    }) || 'MyComponent';

    const jsx = convertHtmlToJsx(htmlCode, componentName);

    const newDoc = await vscode.workspace.openTextDocument({ content: jsx, language: 'javascriptreact' });
    await vscode.window.showTextDocument(newDoc);

    vscode.window.showInformationMessage('✅ HTML converted to React JSX!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
