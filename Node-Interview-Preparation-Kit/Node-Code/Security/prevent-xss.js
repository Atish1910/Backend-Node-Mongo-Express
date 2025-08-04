
// npm install sanitize-html

const sanitizeHtml = require('sanitize-html');

// Input
const userInput = '<script>alert("XSS attack!");</script>Happy';

// Sanitize user input
const sanitizedInput = sanitizeHtml(userInput);

console.log('Sanitized Input:', sanitizedInput);
// Output: Happy

