# HTML_TO_REACT_EXTENSION

## Project Overview

This Visual Studio Code extension aims to simplify the process of converting HTML/CSS code into React JSX format. It allows developers to seamlessly migrate from static HTML pages to React components by automating the conversion of HTML code into clean and usable JSX.

## Key Features & Benefits

- **Automatic HTML to JSX Conversion:** Instantly converts selected HTML/CSS code into JSX.
- **Attribute Transformation:** Automatically transforms HTML attributes to their React equivalents (e.g., `class` to `className`, `for` to `htmlFor`).
- **Inline CSS to JSX Styles:** Converts inline CSS styles into JSX-compliant JavaScript objects.
- **Event Handler Updates:** Updates event handlers to React's event handling syntax.

## Prerequisites & Dependencies

- Visual Studio Code
- Node.js
- npm (Node Package Manager)

## Installation & Setup Instructions

1.  **Install Visual Studio Code:** If you haven't already, download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).

2.  **Install Node.js and npm:** Make sure you have Node.js and npm installed on your system. You can download Node.js from the [official website](https://nodejs.org/). npm is typically included with Node.js.

3.  **Clone the Repository:** Clone this GitHub repository to your local machine:

    ```bash
    git clone https://github.com/ganesh3367/HTML_TO_REACT_EXTENSION.git
    cd HTML_TO_REACT_EXTENSION
    ```

4. **Install Dependencies:** Navigate to the extension directory and install the necessary dependencies using npm:

    ```bash
    npm install
    ```

5.  **Build the Extension:** Build the TypeScript files into JavaScript using:

    ```bash
    npm run compile
    ```

6.  **Package the Extension:** Package the extension into a `.vsix` file using the VS Code Extension Manager (or `vsce package` if installed globally):

    ```bash
    npm run package
    ```

7.  **Install the Extension in VS Code:**

    *   Open Visual Studio Code.
    *   Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
    *   Click the "..." menu in the top right corner and select "Install from VSIX...".
    *   Navigate to the location of the generated `.vsix` file (`html-to-react-converter-ganesh3367-x.x.x.vsix`) and select it.

## Usage Examples

1.  **Select HTML Code:** In a VS Code editor, select the HTML code you want to convert to JSX.

2.  **Trigger Conversion:** Use the extension's command (usually accessible via a context menu or command palette) to convert the selected HTML to JSX. The exact command to trigger the conversion will be detailed in the extensions contribution points.

3.  **Copy JSX Code:** The converted JSX code will be available for you to copy and paste into your React component.

## Configuration Options

This extension may provide several configuration options to customize the conversion process, such as:

*   **Attribute Mapping:** Customize how HTML attributes are mapped to JSX attributes.
*   **Style Handling:** Configure how inline CSS styles are converted to JSX style objects.
*   **Event Handler Conversion:** Customize how event handlers are transformed to React event handlers.

(Consult the extensions package.json contributions for how to access these settings.)

## Contributing Guidelines

We welcome contributions to improve this extension! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and test them thoroughly.
4.  Submit a pull request with a clear description of your changes.

## License Information

This project does not currently have an explicit license defined.

## Acknowledgments

*   Visual Studio Code Team and Microsoft for the `@types/vscode` package.
*   All contributors who help improve the extension.
