HTML to React – VS Code Extension

🧠 Overview

HTML to React is a Visual Studio Code extension that helps developers instantly convert any selected HTML/CSS code into React JSX format. It’s designed to make moving from static HTML to React components fast and hassle-free.



⚙️ Features

🧩 Converts standard HTML into clean JSX.

🪄 Automatically replaces attributes like class → className, for → htmlFor.

💅 Converts inline CSS to JSX-compliant style objects.

⚡ Supports event handlers like onclick → onClick.

🚀 Trigger conversion instantly using Ctrl + Alt + R (Windows/Linux) or Cmd + Option + R (Mac).

🪶 How It Works

Open any HTML or code file inside VS Code.

Select your HTML snippet.

Press Ctrl + Alt + R (Windows/Linux) or Cmd + Option + R (Mac).

A new tab opens showing your converted React JSX code.

Example:

<div class="card" style="background-color: lightblue; padding: 10px;">
  <h2>Hello World</h2>
  <button onclick="alert('Hi!')">Click</button>
</div>

Becomes:

export default function MyComponent() {
  return (
    <div className="card" style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h2>Hello World</h2>
      <button onClick={() => alert('Hi!')}>Click</button>
    </div>
  );
}

💻 Installation

From VS Code Marketplace

Open VS Code.

Go to the Extensions tab.

Search for HTML to React by Ganesh Wayal.

Click Install.

Manual Installation (VSIX)

If you downloaded the .vsix file:

code --install-extension html-to-react-converter-ganesh3367-0.0.1.vsix

📸 Adding Screenshots / Previews

To show your extension visually on GitHub and Marketplace:

Create a folder assets in your project root.

Add an image, e.g., preview.png.

Commit and push it to GitHub.

Use this Markdown in your README:

![HTML to React Preview](https://raw.githubusercontent.com/ganesh3367/HTML_TO_REACT_EXTENSION/main/assets/preview.png)

✅ This image will show on your Marketplace and GitHub pages.

🧑‍💻 Development & Contribution

Clone this repo:

git clone https://github.com/ganesh3367/HTML_TO_REACT_EXTENSION.git

Install dependencies:

npm install

Run in development mode:

npm run compile

Press F5 in VS Code to start debugging your extension.

Contributions are welcome! Feel free to open pull requests.

📦 Repository

GitHub Repository → HTML_TO_REACT_EXTENSION

📜 License

This project is licensed under the MIT License.

👤 Author

Ganesh WayalPublisher: ganeshwayalCreator of HTML to React Converter ✨GitHub: @ganesh3367

⭐ Support

If you find this extension useful, please give it a ⭐ on GitHub and leave a positive review on the VS Code Marketplace.
