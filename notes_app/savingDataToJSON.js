import fs from 'fs';

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
console.log('this is string object\n', bookJSON);
fs.writeFileSync('JSONData.json', bookJSON);

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: Ego is the Enemy
console.log('this is JSON object\n', bookObject);

const dataBuffer = fs.readFileSync('JSONData.json');
console.log(dataBuffer.toString());
const data = JSON.parse(dataBuffer);
data.year = 2020;
data.company = '2020 Book Store';
console.log(data);
