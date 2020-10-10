const utilsData = require('./utils');
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is the file created by node.js!');
fs.appendFileSync('notes.txt', '\nThis is the additional text!');
fs.appendFileSync('notes.txt', '\n' + `${utilsData.getName()}` + ' ' + `${utilsData.dob}`);