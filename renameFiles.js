const fs = require('fs-extra');
const path = require('path');

const malteseCharacters = 'ĊċĠġĦħİżŻ';
const malteseRegExp = new RegExp(`[${malteseCharacters}]`, 'g');

const encodeMalteseCharacters = (str) => {
  return str.replace(malteseRegExp, (match) => encodeURIComponent(match));
};

const renameFilesInFolder = async (folderPath) => {
  const files = await fs.readdir(folderPath);

  for (const file of files) {
    const oldFilePath = path.join(folderPath, file);
    const newFilePath = path.join(folderPath, encodeMalteseCharacters(file));

    if (oldFilePath !== newFilePath) {
      await fs.move(oldFilePath, newFilePath);
      console.log(`Renamed: ${oldFilePath} -> ${newFilePath}`);
    }
  }
};

const updateImagePaths = async (sourceFolder) => {
  const categories = await fs.readdir(sourceFolder);

  for (const category of categories) {
    if (malteseRegExp.test(category)) {
      const categoryPath = path.join(sourceFolder, category);
      await renameFilesInFolder(categoryPath);
    }
  }
};

updateImagePaths('assets/images');
