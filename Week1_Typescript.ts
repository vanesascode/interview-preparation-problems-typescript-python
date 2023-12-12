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
