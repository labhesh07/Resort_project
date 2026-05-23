const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  // Replace double backslashes with single backslashes
  const beforeCount = (css.match(/\\\\/g) || []).length;
  css = css.split('\\\\').join('\\');
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log(`Successfully fixed CSS. Replaced ${beforeCount} double backslashes with single backslashes.`);
} else {
  console.error('index.css not found at', cssPath);
}
