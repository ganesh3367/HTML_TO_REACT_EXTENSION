"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHtmlToJsx = convertHtmlToJsx;
const selfClosingTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
]);
function convertHtmlToJsx(html, componentName = 'MyComponent') {
    let jsx = html
        // Basic attribute replacements
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/onclick=/gi, 'onClick=')
        // Convert inline style to JSX object
        .replace(/style="([^"]*)"/g, (_, style) => {
        const jsStyles = style
            .split(';')
            .filter(Boolean)
            .map((s) => {
            const [key, value] = s.split(':');
            if (!key || !value)
                return '';
            const jsKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            return `${jsKey}: '${value.trim()}'`;
        })
            .filter(Boolean)
            .join(', ');
        return `style={{ ${jsStyles} }}`;
    });
    return `import React from 'react';\n\nconst ${componentName} = () => (\n${jsx}\n);\n\nexport default ${componentName};\n`;
}
//# sourceMappingURL=converter.js.map