// dataSorter.js

// Require the isDataValid library
const isDataValid = require('isDataValid');

const DataSorter = {
  // Sort an array of data
  sort: (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }

    // Categorize data types
    const types = {
      numbers: [],
      strings: [],
      dates: []
    };

    // Iterate through array and categorize elements
    for (const item of arr) {
      if (isDataValid.isNumber(item)) {
        types.numbers.push(item);
      } else if (isDataValid.isString(item)) {
        types.strings.push(item);
      } else if (isDataValid.isDate(item)) {
        types.dates.push(new Date(item));
      }
    }

    // Sort data of each type
    types.numbers.sort((a, b) => a - b);
    types.strings.sort();
    types.dates.sort((a, b) => a - b);

    // Combine sorted data
    const sortedData = [...types.numbers, ...types.strings, ...types.dates.map(date => date.toISOString())];

    return sortedData;
  }
};

module.exports = DataSorter;
