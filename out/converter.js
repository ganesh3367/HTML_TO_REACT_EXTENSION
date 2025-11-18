// src/converter.js

const selfClosingTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

// 🧹 Remove <!DOCTYPE>, <html>, <head>, <body>, <style>, <script>
function cleanHtml(input) {
  let html = input;

  html = html.replace(/<!doctype[\s\S]*?>/gi, '');
  html = html.replace(/<html[^>]*>/gi, '').replace(/<\/html>/gi, '');
  html = html.replace(/<head[\s\S]*?<\/head>/gi, '');
  html = html.replace(/<body[^>]*>/gi, '').replace(/<\/body>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');

  return html.trim();
}

// 🎨 Convert inline style to JSX object
function convertInlineStyle(styleString) {
  const stylePairs = styleString
    .split(';')
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => {
      const [key, value] = s.split(':');
      if (!key || !value) return '';
      const jsKey = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${jsKey}: '${value.trim()}'`;
    })
    .filter(Boolean)
    .join(', ');
  return `{{ ${stylePairs} }}`;
}

// 🧩 Convert attributes (class → className, for → htmlFor, etc.)
function convertAttributes(html) {
  let out = html;

  // Convert event handlers → arrow functions
  out = out.replace(/\bon([a-z]+)=["']([^"']+)["']/gi, (match, event, code) => {
    const eventName = 'on' + event.charAt(0).toUpperCase() + event.slice(1).toLowerCase();
    const cleanCode = code.trim().replace(/;$/, '');
    return `${eventName}={() => ${cleanCode}}`;
  });

  // class → className
  out = out.replace(/\bclass=/gi, 'className=');

  // for → htmlFor
  out = out.replace(/\bfor=/gi, 'htmlFor=');

  // style="..." → style={{...}}
  out = out.replace(/\bstyle=(["'])(.*?)\1/gi, (match, quote, style) => {
    return `style=${convertInlineStyle(style)}`;
  });

  // Boolean attributes → {true}
  out = out.replace(/\b(checked|disabled|required|readonly|autofocus|selected)\b(?![=])/gi, '$1={true}');

  return out;
}

// 🧱 Fix self-closing tags like <img></img> → <img />
function fixSelfClosingTags(html) {
  return html.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, (match, tag, attrs) => {
    if (selfClosingTags.has(tag.toLowerCase())) {
      return `<${tag}${attrs} />`;
    }
    return match;
  });
}

// 🪶 Wrap everything in a valid React component
function wrapInComponent(body, componentName = 'MyComponent') {
  const safeName = componentName.replace(/[^A-Za-z0-9_]/g, '') || 'MyComponent';
  return `import React from 'react';

export default function ${safeName}(props) {
  return (
    <>
${body.split('\n').map(line => '      ' + line).join('\n')}
    </>
  );
}
`;
}

// 🚀 Main function
function convertHtmlToJsx(inputHtml, componentName) {
  let html = cleanHtml(inputHtml);
  html = convertAttributes(html);
  html = fixSelfClosingTags(html);
  html = html.replace(/\n{3,}/g, '\n\n').trim();

  return wrapInComponent(html, componentName);
}

module.exports = { convertHtmlToJsx };
