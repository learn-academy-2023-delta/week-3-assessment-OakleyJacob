// ASSESSMENT 3: Coding Practical Questions with Jest

const { log } = require("console")

// describe(""), () => {
//   it("", () => {
//     expect("").toEqual("")
//   })
// }


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.



describe("fibonacci", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence",
   () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


const fibonacci = (numberOfElements) => {
  
    let answerArray = [1,1]

    for (let i = 2; i<numberOfElements; i++){
      // answerArray.push(answerArray[i-1]+answerArray[i-2]);
      answerArray = [...answerArray, (answerArray[i-1]+answerArray[i-2])]
   
    }
    return answerArray
}




const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibonacci(fibLength1));
// b) Create the function that makes the test pass.

// Pseudo code:  
//Make a function called fibonacci
//The function will take in a number as a parameter
//Use a for loop to loop through the appropriate number of times(based on the number of elements in the desired output)
//Each iteration, place the sum of the previous two elements into the array.
//Refactored to use spread operator cause its cool


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values


describe("valueSorter", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest.",
   () => {
    expect(valueSorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(valueSorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const valueSorter = (targetObject) => Object.values(targetObject).sort((a, b) => a - b)





// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function called valueSorter that takes in an object
// Leverage Object.value() to easily combine all the values into a single array
// Use the .sort method to sort them numerically

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

describe("arrayAccumulator", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.",
   () => {
    expect(arrayAccumulator(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arrayAccumulator(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arrayAccumulator(accountTransactions3)).toEqual([])
  })
})


const arrayAccumulator = (array) => {
  let rollingSum = 0
  return array.map(value => {
      rollingSum = rollingSum + value
      return rollingSum
  })
}


// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:

// Declare a function called arrayAccumulator
// Utilize map to go over the array
// Hold the sum in a variable called rollingSum
// After adding the new element to the rollingSum place rollingSum back into the array
