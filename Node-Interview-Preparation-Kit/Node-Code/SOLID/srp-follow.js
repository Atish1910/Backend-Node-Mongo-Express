
const fs = require('fs');

async function readFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

async function writeFile(data, newFilePath) {
    await fs.promises.writeFile(newFilePath, data);
    console.log('Data written to file successfully');
}

async function readFileWriteToFile(filePath, newFilePath) {
    const data = await readFile(filePath);
    await writeFile(data, newFilePath);
}

readFileWriteToFile('data.txt', 'newData.txt');

