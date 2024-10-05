const path = require('path');

// Get extention name eith PATH modules;
const extName = path.extname('index.html');

// Get base name eith PATH modules;
const baseName = path.basename('index.html');

// file join PATH modules;
const join = path.join('index.html'+'/fsModule.js');

console.log(join);
console.log(__dirname);
console.log(__filename);

