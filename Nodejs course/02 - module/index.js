const fs = require('fs');
// the way to import your file
const checkUtils = require('./utils.js');
checkUtils();
fs.writeFileSync('notes.txt', 'I live in Philadelphia');