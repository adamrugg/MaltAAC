const fs = require('fs');
const path = require('path');

const categories = ['Ġenerali', 'Ġisem', 'Ġugarelli', 'Ħwejjeġ', 'Uġigħ'];

const basePath = './assets/images/';

const doubleEncodedRegExp = /%25([0-9A-Fa-f]{2})/g;

categories.forEach((category) => {
  const folderPath = path.join(basePath, category);

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${folderPath}`, err);
      return;
    }

    files.forEach((file) => {
      const oldFilePath = path.join(folderPath, file);

      const newName = file.replace(doubleEncodedRegExp, (match, p1) => {
        return '%' + p1;
      });

      const newFilePath = path.join(folderPath, newName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error renaming file: ${oldFilePath} to ${newFilePath}`, err);
          return;
        }
        console.log(`Renamed: ${oldFilePath} -> ${newFilePath}`);
      });
    });
  });
});
