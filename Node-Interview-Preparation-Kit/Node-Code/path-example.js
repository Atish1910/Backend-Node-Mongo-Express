
// path-example.js

const path = require('path');

// Joining Path Segments
const fullPath = path.join('/docs', 'file.txt');
console.log(fullPath);
// Output: /docs/file.txt


// Parsing Path
const parsedPath = path.parse('/docs/file.txt');
console.log(parsedPath);
/*
Output: {root: '/',dir: '/docs', base: 'file.txt', 
ext: '.txt', name: 'file'
}
*/

// Example 4: Formatting Path
const formattedPath = path.format({
  root: '/',
  dir: '/users/john/documents',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
});
console.log('Formatted Path:', formattedPath);
// Output: Formatted Path: /users/john/documents/file.txt

