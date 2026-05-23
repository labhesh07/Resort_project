const fs = require("fs");
const path = require("path");

// CHANGE THESE PATHS if needed
const jsxSource = require("./JSX_SOURCE.json");
const cleanCss = require("./CLEAN_CSS.json");

// Create folders recursively
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

// Restore JSX/JS files
for (const [filePath, content] of Object.entries(jsxSource)) {

  let fixedPath = filePath
    .replace("app/frontend/src/", "src/")
    .replace("App.js", "App.jsx")
    .replace("index.js", "main.jsx");

  ensureDir(fixedPath);

  fs.writeFileSync(fixedPath, content);

  console.log("Created:", fixedPath);
}

// Restore CSS
fs.writeFileSync("src/index.css", cleanCss["index.css"]);
fs.writeFileSync("src/App.css", cleanCss["App.css"]);

console.log("CSS restored.");
console.log("Done.");