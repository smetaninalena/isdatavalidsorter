# isdatavalidsorter

## Overview

`isdatavalidsorter` is a JavaScript library for sorting various types of data, including numbers, strings, and dates. It utilizes the `isDataValid` library for data validation.

## Installation

You can install `isdatavalidsorter` via npm:

```
npm install isdatavalidsorter
```

## Usage

```javascript
const dataSorter = require('isdatavalidsorter');
const isDataValid = require('isDataValid');

const numbers = [5, 3, 9, 1, 4];
console.log(dataSorter.sortNumbers(numbers)); // [1, 3, 4, 5, 9]

const strings = ['banana', 'apple', 'orange', 'grape'];
console.log(dataSorter.sortStrings(strings)); // ['apple', 'banana', 'grape', 'orange']

const dates = ['2024-03-04', '2023-01-15', '2025-08-20'];
console.log(dataSorter.sortDates(dates)); // ['2023-01-15', '2024-03-04', '2025-08-20']
```

## API

### `sortNumbers(arr)`

- `arr`: An array of numbers to be sorted.

Returns the sorted array of numbers.

### `sortStrings(arr)`

- `arr`: An array of strings to be sorted.

Returns the sorted array of strings.

### `sortDates(arr)`

- `arr`: An array of date strings in ISO 8601 format (e.g., 'YYYY-MM-DD') to be sorted.

Returns the sorted array of date strings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
