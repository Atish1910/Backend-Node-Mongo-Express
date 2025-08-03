
const path = require('path');

// Joining path segments together
const fullPath = path.join(__dirname, 'folder', 'file.txt');

// Resolving the absolute path
const absolutePath = path.resolve('folder', 'file.txt');

// Getting the directory name of a path
const directoryName = path.dirname('/folder/file.txt');

// Getting the file extension of a path
const fileExtension = path.extname('/folder/file.txt');

// Parsing a path into an object with its components
const pathObject = path.parse('/folder/file.txt');

// Formatting a path object back into a path string
const pathString = path.format({ dir: '/folder', base: 'file.txt' });

// Displaying results
console.log('Full Path:', fullPath);
console.log('Absolute Path:', absolutePath);
console.log('Normalized Path:', normalizedPath);
console.log('Directory Name:', directoryName);
console.log('File Name:', fileName);
console.log('File Extension:', fileExtension);
console.log('Is Absolute Path:', isAbsolute);
console.log('Relative Path:', relativePath);
console.log('Parsed Path Object:', pathObject);
console.log('Formatted Path String:', pathString);
