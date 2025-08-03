
const fs = require("fs");

async function readFileWriteToFile(filePath, newFilePath) {
  // Responsibility 1: Read data from one file
  const data = await fs.promises.readFile(filePath, "utf8");

  // Responsibility 2: Write data to another file
  await fs.promises.writeFile(newFilePath, data);
}

readFileWriteToFile("data.txt", "newData.txt");

