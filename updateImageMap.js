const fs = require('fs');
const readline = require('readline');

const sourcePath = 'assetMap.js';
const outputPath = 'updatedassetMap.js';

const malteseRegExp = /[\u0100-\u017F]/g;

const readInterface = readline.createInterface({
  input: fs.createReadStream(sourcePath),
  output: fs.createWriteStream(outputPath),
  terminal: false,
});

readInterface.on('line', (line) => {
  const updatedLine = line.replace(malteseRegExp, (match) => encodeURIComponent(match));
  readInterface.output.write(updatedLine + '\n');
});

readInterface.on('close', () => {
  console.log(`Updated assetMap written to: ${outputPath}`);
});
