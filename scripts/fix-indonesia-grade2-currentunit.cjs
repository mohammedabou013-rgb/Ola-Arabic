const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../artifacts/api-server/src/data/indonesia-grade2.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remove currentUnit assignment lines inserted earlier
content = content.replace(/^\s*currentUnit = \d+;\s*\n/gm, '');
// Remove let currentUnit declaration
content = content.replace(/let currentUnit = 1;\s*\n/, '');

// Split at function u( definition — data section is before it
const splitRegex = /^(function u\()/m;
const [dataSection, ...helperParts] = content.split(splitRegex);
const helperSection = helperParts.join('function u('); // in case of multiple matches

// In data section, find all l( calls and add unitOrder as first parameter
let unitOrder = 1;
const fixedData = dataSection.replace(/\bl\(\s*(\d+)\s*,/g, (match, lessonOrder) => {
  return `l(${unitOrder++}, ${lessonOrder},`;
});

// In helper section, replace l function signature and currentUnit usages
let fixedHelpers = helperSection.replace(
  /function l\(order:number/,
  'function l(unitOrder:number, order:number'
);
// Replace all currentUnit references in helpers with unitOrder
fixedHelpers = fixedHelpers.replace(/\bcurrentUnit\b/g, 'unitOrder');

content = fixedData + fixedHelpers;
fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed indonesia-grade2.ts currentUnit issue');
