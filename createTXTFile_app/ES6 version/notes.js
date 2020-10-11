const UtilsData = require('./utils');
const fs = require('fs');

const userData = new UtilsData('Yin', '26', 'Yinlovestocode@gmail.com');

fs.writeFileSync('notes.txt', 'This is the file created by node.js!');
fs.appendFileSync('notes.txt', '\nThis is the additional text!');
fs.appendFileSync('notes.txt', '\n' + `${userData.getDataStats()}`);