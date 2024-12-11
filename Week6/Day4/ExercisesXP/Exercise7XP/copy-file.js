const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing to destination.txt:', err);
    } else {
      console.log('Content copied to destination.txt successfully!');
    }
  });
});
