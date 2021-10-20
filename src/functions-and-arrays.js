// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  // Check if Input is valid, if not let's save resources
  if (arr.length === 0) {
    console.log('Invalid input. Please set an valid Array as argument');
    return null;
  }

  let longestWord = '';

  // loop thought Users Input
  for (let i = 0; i < arr.length; i++) {
    // Compare the length of Input and current longestWord's length
    if (arr[i].length > longestWord.length) {
      // If it's longer, save
      longestWord = arr[i];
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  // Check if Input is valid, if not let's save resources
  if (arr.length === 0) {
    console.log('Invalid input. Please set an valid Array as argument');
    return 0;
  }

  // create a new Variable to store the sum
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    // increase the new Variable with each Item of the Input
    sumArr += arr[i];
  }

  return sumArr;
}

// Iteration #3.1 Bonus:
function sum(arr) {
  // Check if Input is valid, if not let's save resources
  if (typeof arr !== 'object') {
    return 0;
  }

  // create a new Variable to store the sum
  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    // increase the new Variable with each Item of the Input
    if (typeof arr[i] === 'string') {
      sumArr += arr[i].length;
    } else if (typeof arr[i] === 'boolean') {
      sumArr += arr[i];
    } else if (typeof arr[i] === 'number') {
      sumArr += arr[i];
    } else {
      throw "Unsupported data type sir or ma'am";
    }
  }

  return sumArr;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  // Check if Input is valid, if not let's save resources
  if (arr.length === 0) {
    return null;
  }

  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }

  return average / arr.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  // Check if Input is valid, if not let's save resources
  if (arr.length === 0) {
    return null;
  }

  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    average += arr[i].length;
  }

  return average / arr.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  // Check if Input is valid, if not let's save resources
  if (arr.length === 0) {
    return null;
  }

  // create a new Variable to store the sum
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    // increase the new Variable with each Item of the Input
    if (typeof arr[i] === 'string') {
      average += arr[i].length;
    } else if (typeof arr[i] === 'boolean') {
      average += arr[i];
    } else if (typeof arr[i] === 'number') {
      average += arr[i];
    } else {
      throw "Unsupported data type sir or ma'am";
    }
  }

  return Math.round((average / arr.length) * 100) / 100;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  let uniqueWords = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the arr[i] is an Item of uniqueWords
    // arr.indexOf() returns -1, if it's not an Item
    if (uniqueWords.indexOf(arr[i]) === -1) {
      // So if it's not an Item push it to
      uniqueWords.push(arr[i]);
    }
  }

  return uniqueWords;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, str) {
  if (arr.length === 0) {
    return null;
  }

  return arr.includes(str);
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, str) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i] === str;
  }

  return count;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(arr) {
  let fourInARow = 0;
  let lastLoop = 0;

  for (let i = 0; i < arr.length - 4; i++) {
    for (let j = 0; j < arr[i].length - 4; j++) {
      let xAxis = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
      let yAxis = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
      let dOne = arr[i][j + 3] * arr[i + 1][j + 2] * arr[i + 2][j + 1] * arr[i + 3][j];
      let dTwo = arr[i + 3][j + 3] * arr[i + 2][j + 2] * arr[i + 1][j + 1] * arr[i][j];

      // xAxis = arr[16][16] * arr[16][17] * arr[16][18] * arr[16][19];
      // yAxis = arr[16][16] * arr[17][16] * arr[18][16] * arr[19][16];
      // dOne = arr[16][19] * arr[17][18] * arr[18][17] * arr[19][16];
      // dTwo = arr[19][19] * arr[18][18] * arr[17][17] * arr[16][16];

      if (xAxis > fourInARow) {
        fourInARow = xAxis;
      } else if (yAxis > fourInARow) {
        fourInARow = yAxis;
      } else if (dOne > fourInARow) {
        fourInARow = dOne;
      } else if (dTwo > fourInARow) {
        fourInARow = dTwo;
      }
    }
    lastLoop = i;
  }

  for (let i = arr.length - 1; i > lastLoop; i--) {
    for (let j = arr.length[i] - 1; j > lastLoop; j--) {
      let xAxis = arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3];
      let yAxis = arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j];

      // xAxis = arr[19][19] * arr[19][18] * arr[19][17] * arr[19][16];
      // yAxis = arr[19][19] * arr[18][19] * arr[17][19] * arr[16][19];

      if (xAxis > fourInARow) {
        fourInARow = xAxis;
      } else if (yAxis > fourInARow) {
        fourInARow = yAxis;
      }
    }
  }

  return fourInARow;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
