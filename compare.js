const fs = require('fs');
const th = JSON.parse(fs.readFileSync('messages/th.json', 'utf8'));
const my = JSON.parse(fs.readFileSync('messages/my.json', 'utf8'));

function compareMissing(expected, actual, path = '') {
  for (const key in expected) {
    if (!(key in actual)) {
      console.log(`Missing key in my.json: ${path}${key}`);
    } else if (typeof expected[key] === 'object') {
      compareMissing(expected[key], actual[key], `${path}${key}.`);
    }
  }
}
compareMissing(th, my);
