const selfClosingTags: Set<string> = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

export function convertHtmlToJsx(html: string, componentName: string = 'MyComponent'): string {
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
        .map((s: string) => {
          const [key, value] = s.split(':');
          if (!key || !value) return '';
          const jsKey = key.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
          return `${jsKey}: '${value.trim()}'`;
        })
        .filter(Boolean)
        .join(', ');
      return `style={{ ${jsStyles} }}`;
    });

  return `import React from 'react';\n\nconst ${componentName} = () => (\n${jsx}\n);\n\nexport default ${componentName};\n`;
}