import validator from 'validator'; //ES6
import chalk from 'chalk';
// const validator = require('validator');

console.log(chalk.bgRed.bold(validator.isURL('https://mead.io'))); // Print: true
console.log(chalk.blue(validator.isEmail('isaac4learn@gmail.com')) , chalk.underline.bgBlue('Hello'));

console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));