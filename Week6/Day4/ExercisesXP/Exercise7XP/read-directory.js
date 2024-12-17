const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  console.log('Files in the current directory:');
  files.forEach(file => {
    console.log(file);
  });
});