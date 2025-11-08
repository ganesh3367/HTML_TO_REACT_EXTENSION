function convertHtmlToJsx(html, componentName) {
  // Convert HTML attributes to JSX-friendly format
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/onclick=/gi, 'onClick=')
    .replace(/style=\"(.*?)\"/g, (match, styles) => {
      const styleObject = styles
        .split(';')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
          const [key, value] = s.split(':');
          const formattedKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          return `${formattedKey}: '${value.trim()}'`;
        })
        .join(', ');
      return `style={{ ${styleObject} }}`;
    });

  // Add full React component structure
  return `import React from 'react';

export default function ${componentName}() {
  return (
    ${jsx}
  );
}
`;
}

module.exports = { convertHtmlToJsx };
