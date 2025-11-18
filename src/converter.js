const selfClosingTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

function convertHtmlToJsx(html, componentName) {
  // Basic replacements for JSX syntax
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/onclick=/gi, 'onClick=')
    .replace(/onchange=/gi, 'onChange=')
    .replace(/ondblclick=/gi, 'onDoubleClick=')
    .replace(/onmouseover=/gi, 'onMouseOver=')
    .replace(/onmouseout=/gi, 'onMouseOut=')
    .replace(/onfocus=/gi, 'onFocus=')
    .replace(/onblur=/gi, 'onBlur=')
    .replace(/checked=/gi, '{true}')
    .replace(/selected=/gi, '{true}')
    .replace(/disabled=/gi, '{true}')
    .replace(/autofocus=/gi, '{true}')
    .replace(/readonly=/gi, '{true}')
    .replace(/novalidate=/gi, '{true}')
    .replace(/style=\"(.*?)\"/g, (match, styles) => {
      // Convert style="..." → style={{ ... }}
      const styleObject = styles
        .split(';')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
          const [key, value] = s.split(':');
          if (!key || !value) return '';
          const formattedKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          return `${formattedKey}: '${value.trim()}'`;
        })
        .filter(Boolean)
        .join(', ');
      return `style={{ ${styleObject} }}`;
    });

  // Handle self-closing tags properly
  jsx = jsx.replace(
    /<(\w+)([^>]*)>\s*<\/\1>/g,
    (match, tag, attrs) => {
      if (selfClosingTags.has(tag)) return `<${tag}${attrs} />`;
      return match;
    }
  );

  // Wrap it all in a full component
  return `import React from 'react';

export default function ${componentName}(props) {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
}

module.exports = { convertHtmlToJsx };
