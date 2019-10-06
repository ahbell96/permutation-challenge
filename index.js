let numb = "326",
  numbAndWsAndStr = "a 3B2 C6D",
  numbAndStr = "a3B2C6D",
  onlyStr = "ABD";

// Permutation - https://stackoverflow.com/questions/39927452/recursively-print-all-permutations-of-a-string-javascript

let algorithms = {
  permutation: function(string) {
    if (string.length < 2) return string; // This is our break condition

    let permutations = []; // This array will hold our permutations

    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i)
        // if char was used already
        continue; // skip it this time

      let remainingString =
        string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

      for (let subPermutation of this.permutation(remainingString))
        permutations.push(char + subPermutation);
    }
    return permutations;
  }
};

let inputSettings = {
  storeInput: function(input) {
    let theInput = input;

    return theInput;
  },
  inputVersion: function(input) {},
  outputTheArray: function(input) {
    let valueArray = [];
    valueArray = algorithms.permutation(input);
    valueArray.sort();
    valueArray.reverse();

    return valueArray;
  }
};

test = {
  testIfNum: function(input) {
    let isNum = /^\d+$/.test(input);
    // inputSettings.storeInput(isNum);

    if (isNum == true) {
      console.log("is it a number? : " + isNum);
      console.log(inputSettings.outputTheArray(input));
    }
  },
  testIfNumAndStr: function(input) {
    let isNumAndChar = /^[a-zA-Z0-9_.-]*$/.test(input);

    if (isNumAndChar == true) {
      console.log("does it contain numbers and letters? : " + isNumAndChar);
    }
  },
  testifNumAndWsAndChar: function(input) {
    let value = /^[a-zA-Z0-9_ ]*$/.test(input);
    if (value == true) {
      console.log(
        "does it contain numbers, letters and white space? : " + value
      );

      //let stripValues = input.replace(/\D/g, "");
    }
  },
  testIfOnlyStr: function(input) {
    let isLet = /^[a-zA-Z]+$/.test(input);
    if (isLet == true) {
      console.log("does it only contain letters? : " + isLet);
      console.log("no decimals detected, please input a decimal.");
    }
  }
};

// ----------------------------------------------
test.testIfNum(numb);
//test.testIfNumAndStr(numbAndStr);
//test.testifNumAndWsAndChar(numbAndWsAndStr);
//test.testIfOnlyStr(onlyStr);
// ----------------------------------------------

function solution(input) {
  // Take in value,
  // Need to consider:
  //  * white space - non-integers (ABC)
  //  * also needs to consider integers mixed with non-integers
  //  * needs to consider non-integers without integers, which would produce an error (if statement perhaps)

  // take in the input.
  let theInput = input;
  let isNum = /^\d+$/.test(input);
  let isNumAndChars = 0;
  let isLet = /^[a-zA-Z]+$/.test(input);

  // an array - to hold the values that are to be inputted from the parameter
  let values = [];

  // if statement to validate the values that are passed through, whether with ints, no ints, etc.
  // if so, for either, push into array.

  if (isNum) {
    // if it only contains decimals.
    //console.log(isNum);
  } else if (isLet) {
    // if it contains letters
  } else {
  }
  // else if (input == "number values and AND-Siblings") {

  //}
  // else { -- if only AND-Siblings
  //
  //}

  return null;
}
//console.log(solution("326")); // expected ouput 632,623,362,326,263,236
//console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
//console.log(solution("ABD"));
