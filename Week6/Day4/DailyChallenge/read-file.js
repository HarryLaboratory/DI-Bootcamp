import fs from 'fs'; 
import path from 'path';  

const filePath = './files/file-data.txt';

function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(data);
  });
}

export default readFile; 
