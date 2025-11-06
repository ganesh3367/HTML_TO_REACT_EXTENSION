"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const converter_1 = require("./converter");
function activate(context) {
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
        const jsx = (0, converter_1.convertHtmlToJsx)(htmlCode, componentName);
        const doc = await vscode.workspace.openTextDocument({
            content: jsx,
            language: 'javascriptreact'
        });
        await vscode.window.showTextDocument(doc, { preview: false });
        vscode.window.showInformationMessage('✅ HTML converted to React JSX!');
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map