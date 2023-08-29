const fs = require('node:fs/promises');


async function writeData(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
}

// exports.readData = readData;
exports.writeData = writeData;