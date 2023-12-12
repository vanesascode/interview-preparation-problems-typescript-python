// 1 - Plus Minus

function plusMinus(arr: number[]): void {
  let positiveCount: number = 0;
  let negativeCount: number = 0;
  let zeroCount: number = 0;

  for (const number of arr) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else if (number === 0) {
      zeroCount++;
    }
  }

  const positiveRatio = positiveCount / arr.length;
  const negativeRatio = negativeCount / arr.length;
  const zeroRatio = zeroCount / arr.length;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);

// [LOG]: "0.500000"
// [LOG]: "0.333333"
// [LOG]: "0.166667"

///////////////////////////////////////////////////////////////////////////////////

// 2 - Mini-Max Sum

function compareNumbers(a: number, b: number) {
  return a - b;
}

function miniMaxSum(arr: number[]): void {
  const orderedArr: number[] = arr.sort(compareNumbers);
  let minNumber: number = 0;
  let maxNumber: number = 0;

  for (let i = 0; i < 4; i++) {
    minNumber += orderedArr[i];
  }

  for (let i = 1; i < 5; i++) {
    maxNumber += orderedArr[i];
  }

  const result = `${minNumber} ${maxNumber}`;

  console.log(result);
}

const inputArray: number[] = [5, 3, 9, 1, 7];
miniMaxSum(inputArray);

//[LOG]: "16 24"

// The compareNumbers function is a custom comparison function that takes two numbers, a and b, as input parameters and returns the difference between a and b.

// In JavaScript or TypeScript, a comparison function is commonly used as a parameter for sorting arrays. When passed as an argument to the sort method, the comparison function determines the order in which the elements of the array should be sorted.

// In the case of compareNumbers, the returned value of a - b allows the sort method to sort the numbers in ascending order. If a is less than b, the subtraction a - b will result in a negative number, indicating that a should come before b in the sorted array. If a is greater than b, the subtraction will result in a positive number, indicating that a should come after b. If a is equal to b, the subtraction will result in zero.

// For example, when sorting an array [5, 2, 8, 1, 3] using this compareNumbers function, the result will be [1, 2, 3, 5, 8], as the elements are sorted in ascending order.
