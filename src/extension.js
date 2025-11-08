const vscode = require('vscode');
const { convertHtmlToJsx } = require('./converter');

function activate(context) {
  console.log('✅ HTML to React Extension (JS version) is active!');

  let disposable = vscode.commands.registerCommand('html-to-react.convert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Please open a file first!');
      return;
    }

    const selection = editor.selection;
    const htmlCode = editor.document.getText(selection).trim();

    if (!htmlCode) {
      vscode.window.showWarningMessage('Please select some HTML code first!');
      return;
    }

    // Ask user for component name
    const componentName = await vscode.window.showInputBox({
      prompt: 'Enter your React component name',
      placeHolder: 'MyComponent',
      ignoreFocusOut: true
    }) || 'MyComponent';

    // Convert HTML → JSX
    const jsx = convertHtmlToJsx(htmlCode, componentName);

    // Create new file for the React component
    const doc = await vscode.workspace.openTextDocument({
      content: jsx,
      language: 'javascriptreact'
    });
    await vscode.window.showTextDocument(doc, { preview: false });

    vscode.window.showInformationMessage(`✅ React component "${componentName}" created successfully!`);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
