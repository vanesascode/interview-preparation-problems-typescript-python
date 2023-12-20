// To run in the console: `nodemon Javascript_Methods` 


// Filter() ////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4]

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];

const filteredFruits = fruits.filter(fruit => fruit.length > 5);

// console.log(filteredFruits); // Output: ['banana', 'orange']





// parseInt() ////////////////////////////////////////////////////////////////////////////////////

const str = '123';

const num = parseInt(str);

// console.log(num); // Output: 123


// slice() //////////////////////////////////////////////////////////////////////////////////////

// const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];

const slicedFruits = fruits.slice(1, 4);

// console.log(slicedFruits); // Output: ['banana', 'grape', 'orange']

const middleFruits = fruits.slice(1, -1);

// console.log(middleFruits); // Output: ['banana', 'grape', 'orange']

const lastTwoFruits = fruits.slice(-2);

// console.log(lastTwoFruits); // Output: ['orange', 'mango']


// padStart() - always with strings //////////////////////////////////////////////////////////

const string = 'Code';

const paddedStr = string.padStart(8, 'X');

// console.log(paddedStr); // Output: 'XXXXCode'

const number = 123;

const alwaysFourDigits = number.toString().padStart(4, '0');

// console.log(alwaysFourDigits); // Output: '0123'


// reduce() ///////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 10); //10 is the initial value

// console.log(sum); // Output: 25


// forEach() - doesn't return sth like map() ///////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  // console.log(number * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10

const doubledNumbers2 = numbers.map(number => number * 2);

// console.log(doubledNumbers2);
// Output: [2, 4, 6, 8, 10]


// split() //////string to array//////////////////////////////////////////////////////////////////////////

let sentence = 'Hello, world! Welcome to Codeium.';

let words = sentence.split(' ');

// console.log(words);
// ["Hello,", "world!", "Welcome", "to", "Codeium."]


words = sentence.split('');

// console.log(words);
// [
//   'H', 'e', 'l', 'l', 'o', ',',
//   ' ', 'w', 'o', 'r', 'l', 'd',
//   '!', ' ', 'W', 'e', 'l', 'c',
//   'o', 'm', 'e', ' ', 't', 'o',
//   ' ', 'C', 'o', 'd', 'e', 'i',
//   'u', 'm', '.'
// ]

sentence = 'Hello,world!WelcometoCodeium.'

words = sentence.split('W');
// console.log(words); // [ 'Hello,world', 'elcometoCodeium.' ]

// Join () ///array to string ////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];

const numbersString = numbers.join();

// console.log(numbersString);
// Output: "1,2,3,4,5"

const numbersString2 = numbers.join(', ');

// console.log(numbersString2);
// Output: "const numbersString = numbers.join();

// console.log(numbersString);
// Output: "1, 2, 3, 4, 5""

///////////////////////////////////////
///////////Camel Case ////////////////
/////////////Exercise/////////////////
///////////////////////////////////////


const test1 = "S;M;plasticCupCoffee()"


function main1(test1) {

  if (test1.slice(0, 1) === "S") {
    if (test1.slice(2, 3) === "M") {
      const testNoMethod = test1.slice(0, -2)

      // console.log(testNoMethod) //S;M;plasticCupCoffee

      const testNoMethodSliced = testNoMethod.split(";")

      // console.log(testNoMethodSliced) // [ 'S', 'M', 'plasticCupCoffee' ]

      const lastString = testNoMethodSliced[testNoMethodSliced.length - 1];

      // console.log(lastString) //plasticCupCoffee

      const splitStrings = lastString.split(/(?=[A-Z])/);

      // console.log(splitStrings) // [ 'plastic', 'Cup', 'Coffee' ]

      const StringsToLowerCaseArray = splitStrings.map(x => x.toLowerCase())

      // console.log(StringsToLowerCaseArray) // [ 'plastic', 'cup', 'coffee' ]

      const StringsToLowerCase = StringsToLowerCaseArray.join(" ")

      // console.log(StringsToLowerCase) // plastic cup coffee

    }

  } else if (test1.slice(0, 1) === "C") {
    const testSliced = test1.split(";")

    const lastString = testSliced[testSliced.length - 1];

    const lastStringToArray = lastString.split(' ')

    const capitalizedWords = lastStringToArray.map((word, index) => {
      if (index > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    const normalString = capitalizedWords.join(" ")

    console.log(normalString)
  }
}

main1(test1)

//////////////////////////////////////////////////////////////////////////////

const test2 = "C;V;my mobile phone"


function main2(test2) {

  if (test2.slice(0, 1) === "S") {
    if (test2.slice(2, 3) === "M") {
      const testNoMethod = test2.slice(0, -2)

      const testNoMethodSliced = testNoMethod.split(";")

      const lastString = testNoMethodSliced[testNoMethodSliced.length - 1];

      const splitStrings = lastString.split(/(?=[A-Z])/);

      const StringsToLowerCaseArray = splitStrings.map(x => x.toLowerCase())

      const StringsToLowerCase = StringsToLowerCaseArray.join(" ")

      console.log(StringsToLowerCase)

    }

  } else if (test2.slice(0, 1) === "C") {
    const testSliced = test2.split(";")

    // console.log(testSliced) // [ 'C', 'V', 'my mobile phone' ]

    const lastString = testSliced[testSliced.length - 1];

    // console.log(lastString) //my mobile phone

    const lastStringToArray = lastString.split(' ')

    // console.log(lastStringToArray) //now [ 'my', 'mobile', 'phone' ]

    const capitalizedWords = lastStringToArray.map((word, index) => {
      if (index > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    console.log("result", capitalizedWords); // [ 'my', 'Mobile', 'Phone' ]

    const normalString = capitalizedWords.join("")

    // console.log(normalString) // myMobilePhone
  }
}

main2(test2)
