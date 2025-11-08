🌟 HTML to React – VS Code Extension

🧠 Overview

HTML to React is a Visual Studio Code extension that helps developers instantly convert selected HTML/CSS code into clean and usable React JSX format. It simplifies the migration process from static HTML pages to React components.



⚙️ Features

✅ Converts plain HTML to JSX automatically.✅ Transforms attributes like class → className, for → htmlFor.✅ Converts inline CSS styles into JSX-compliant JavaScript objects.✅ Updates event handlers (e.g., onclick → onClick).✅ Works with a single command shortcut Ctrl + Alt + R (Windows/Linux) or Cmd + Option + R (Mac).

🪶 How It Works

Open your HTML or code file inside VS Code.

Select the HTML snippet you want to convert.

Press Ctrl + Alt + R (Windows/Linux) or Cmd + Option + R (Mac).

A new tab will open containing the converted React JSX code.

Example Input:

<div class="card" style="background-color: lightblue; padding: 10px;">
  <h2>Hello World</h2>
  <button onclick="alert('Hi!')">Click</button>
</div>

Output JSX:

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

Go to the Extensions view (Ctrl+Shift+X / Cmd+Shift+X).

Search for HTML to React by Ganesh Wayal.

Click Install.

Manual Installation (VSIX File)

If you downloaded the .vsix file manually:

code --install-extension html-to-react-converter-ganesh3367-0.0.1.vsix

📸 Adding Screenshots or Previews

To display screenshots in your GitHub or Marketplace page:

Create a folder named assets in your project root.

Add your preview image there (e.g., preview.png).

Commit and push to GitHub.

Use this Markdown in your README:

![HTML to React Preview](https://raw.githubusercontent.com/ganesh3367/HTML_TO_REACT_EXTENSION/main/assets/preview.png)

✅ This image will now appear beautifully on both your GitHub and Marketplace listings.

🧑‍💻 Development & Contribution

Want to contribute or customize it?

git clone https://github.com/ganesh3367/HTML_TO_REACT_EXTENSION.git
cd HTML_TO_REACT_EXTENSION
npm install
npm run compile

Press F5 in VS Code to run the extension in debug mode.

Contributions, feature requests, and bug reports are welcome via pull requests.

📦 Repository

🔗 View on GitHub → HTML_TO_REACT_EXTENSION

📜 License

This project is licensed under the MIT License — free to use, modify, and distribute.

👤 Author

Ganesh Wayal🎯 Publisher: ganeshwayal💻 Creator of: HTML to React Converter Extension🔗 GitHub: @ganesh3367

⭐ Support This Project

If you like this extension, please give it a ⭐ on GitHub and leave a review on the VS Code Marketplace.
