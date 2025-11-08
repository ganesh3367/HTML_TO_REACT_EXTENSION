# ⚛️ HTML to React Component Converter (VS Code Extension)

**HTML to React** is a Visual Studio Code extension by **Ganesh Wayal** that instantly converts any selected **HTML code** into a **React JSX component** — clean, formatted, and ready to use.  
No setup. No typing commands. Just **select, right-click, and convert.**

---

## ✨ Features

✅ **Right-click Conversion** — Simply select your HTML → right-click → choose **Convert to React Component**.  
✅ **Auto Component Creation** — Prompts for component name and builds a full functional component.  
✅ **Smart Attribute Fixes**
- `class` → `className`
- `for` → `htmlFor`
- `onclick`, `onchange`, `onfocus`, etc. → converted to React event handlers  
✅ **Inline CSS Support** — Converts `style="color:red; padding:10px"` → `style={{ color: 'red', padding: '10px' }}`  
✅ **Imports React Automatically**  
✅ **Works With Any HTML** — from small snippets to large sections (`div`, `header`, `section`, `footer`, etc.)  
✅ **Opens Converted JSX in a New Tab**  
✅ **Shows Success Message** when component is created  

---

## 🧠 How It Works

### Step 1 — Select HTML code  
Highlight any HTML you want to convert.

### Step 2 — Right-click  
Choose **“Convert to React Component”** from the context menu.

### Step 3 — Enter Component Name  
A prompt appears asking for the React component name (e.g. `HeroSection`).

### Step 4 — Get JSX Code  
Your full React component opens in a new VS Code tab:
```jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundColor: 'lightblue', padding: '40px' }}>
      <h1>Welcome to My Portfolio</h1>
      <button onClick={() => alert('Hi!')}>Click Me</button>
    </section>
  );
}
💻 Installation
From VS Code Marketplace

Open VS Code.

Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X).

Search for HTML to React Converter by Ganesh Wayal.

Click Install.

Manual Installation (VSIX)

If you have a .vsix file:

code --install-extension html-to-react-js-ganesh3367-0.0.2.vsix

🧩 Supported HTML Elements

✅ div, section, header, footer, nav, main
✅ img, input, textarea, a, button, form
✅ Inline <style> and event attributes (onclick, onfocus, etc.)
✅ Automatically formats styles, attributes, and JSX tags.

⚙️ Future Upgrades (v3.0 Roadmap)

🔹 Auto-save JSX — Save converted code inside a /components folder.
🔹 Full Page Converter — Convert entire HTML files into React app structure.
🔹 Head → Helmet Support — Move <meta> and <link> tags into <Helmet>.
🔹 Auto Prettify JSX Output — Use Prettier for clean formatting.

👤 Author

Ganesh Wayal
💼 Publisher: ganeshwayal
💻 Creator of: HTML to React Converter (JavaScript version)
🔗 GitHub Profile

🛠️ Extension Repository

🪪 License

Licensed under the MIT License — free to use, modify, and distribute.

⭐ Support This Project

If you find this extension useful:

🌟 Star the repo on GitHub

💬 Leave a review on VS Code Marketplace

❤️ Share it with other developers!

