const fs = require('fs');
const path = require('path');

const assetsPath = './assets/images';
const categories = ['Alfabett', 'Artikli', 'Emozzjonijiet', 'Ġenerali', 'Ġisem', 'Ġugarelli', 'Ħwejjeġ', 'Ikel', 'Kuluri', 'Numri', 'Pronomi', 'Uġigħ', 'Verbi', 'Xorb'];

const getImagerequires = (folder) => {
  const imagesPath = path.join(assetsPath, folder);
  const images = fs.readdirSync(imagesPath);

  return images
    .filter((img) => img.endsWith('.png'))
    .map((img) => `  '${img.slice(0, -4)}': require('${imagesPath}/${img}'),\n`)
    .join('');
};

const generateassetMap = () => {
  let assetMapContent = 'const assetMap = {\n';

  categories.forEach((category) => {
    assetMapContent += `  // ${category}\n`;
    assetMapContent += getImagerequires(category);
  });

  assetMapContent += '};\n\n';
  assetMapContent += 'export default assetMap;\n';

  fs.writeFileSync('./assetMap.js', assetMapContent);
};

generateassetMap();
