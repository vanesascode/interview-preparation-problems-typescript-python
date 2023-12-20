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

    // console.log("result", capitalizedWords); // [ 'my', 'Mobile', 'Phone' ]

    const normalString = capitalizedWords.join("")

    // console.log(normalString) // myMobilePhone
  }
}

main2(test2)


///////////////////////////////////////
///////////print all numbers ////////////////
///////////until /n/ and put them in a string
//(without using string method)////////////
///////////////////////////////////////

n = 10
array = []
for (let i = 1; i <= n; i++) {
  array.push(i)
}

result = array.join("")

// console.log(result)

//12345678910
