const { readFile, writeFile } = require('./fileManager');

const content = readFile('Hello_World.txt');
console.log('Read from file: ', content); 

writeFile('Bye_World.txt', 'Writing to the file');
console.log('File written successfully.');
