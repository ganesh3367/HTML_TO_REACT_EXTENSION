 # 🌟 HTML to React – VS Code Extension

Welcome to **HTML to React**, a Visual Studio Code extension that helps developers instantly convert **HTML/CSS** snippets into clean **React JSX** components.

---

## 🧭 Overview
**HTML to React** streamlines the process of converting static HTML templates into React components by automatically fixing syntax issues, JSX attributes, and inline styles.

![HTML to React Preview](https://raw.githubusercontent.com/ganesh3367/HTML_TO_REACT_EXTENSION/main/assets/preview.png)

---

## ⚙️ Features
✅ Converts plain HTML into JSX automatically.  
✅ Fixes attributes like `class` → `className` and `for` → `htmlFor`.  
✅ Converts inline styles to JSX-compliant JavaScript objects.  
✅ Handles event attributes (e.g., `onclick` → `onClick`).  
✅ One-click conversion shortcut: **Ctrl + Alt + R** (Windows/Linux) or **Cmd + Option + R** (Mac).

---

## 🚀 How to Use the Extension
Follow these simple steps to use the **HTML to React Converter** in VS Code:

1. **Open VS Code.**  
2. **Open or paste any HTML code** inside your editor.  
3. **Select** the HTML you want to convert.  
4. Press **Cmd + Shift + P** (Mac) or **Ctrl + Shift + P** (Windows/Linux) to open the VS Code command palette.  
5. Type and select:

6. Instantly, your selected HTML will be replaced with its **React JSX** equivalent!

You can also directly use the shortcut:  
**Cmd + Option + R (Mac)** or **Ctrl + Alt + R (Windows/Linux)**.

---

## 🧾 Example

**Input HTML:**
```html
<div class="card" style="background-color: lightblue; padding: 10px;">
<h2>Hello World</h2>
<button onclick="alert('Hi Ganesh!')">Click Me</button>
</div>
6. Instantly, your selected HTML will be replaced with its **React JSX** equivalent!

You can also directly use the shortcut:  
**Cmd + Option + R (Mac)** or **Ctrl + Alt + R (Windows/Linux)**.

---

## 🧾 Example

**Input HTML:**
```html
<div class="card" style="background-color: lightblue; padding: 10px;">
<h2>Hello World</h2>
<button onclick="alert('Hi Ganesh!')">Click Me</button>
</div>

***OUT_PUT***
export default function MyComponent() {
  return (
    <div className="card" style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h2>Hello World</h2>
      <button onClick={() => alert('Hi Ganesh!')}>Click Me</button>
    </div>
  );
}

