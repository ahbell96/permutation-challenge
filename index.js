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
  theInput: "",
  storeInput: function(input) {
    this.theInput = input;
    return this.theInput;
  },
  getInput: function() {
    console.log("the input" + this.theInput);
    return this.theInput;
  },
  inputVersion: function() {
    let isNum = /^\d+$/.test(this.theInput);
    let isNumAndChar = /^[a-zA-Z0-9_.-]*$/.test(this.theInput);
    let isNumAndWhiteSpaceAndChar = /^[a-zA-Z0-9_ ]*$/.test(this.theInput);
    let isOnlyLet = /^[a-zA-Z]+$/.test(this.theInput);

    if (isNum == true) {
      return console.log("Only Numbers: " + this.outputTheArray(this.theInput));
    } else if (isNumAndChar == true) {
      let newValue = this.theInput.replace(/\D/g, "");
      return console.log(
        "Numbers and Characters: " + this.outputTheArray(newValue)
      );
    } else if (isNumAndWhiteSpaceAndChar == true) {
      let newValue = this.theInput.replace(/\D/g, "");
      return console.log(
        "Numbers, White Space and Characters: " + this.outputTheArray(newValue)
      );
    }
  },
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
    inputSettings.theInput = input;
    inputSettings.inputVersion();

    //let sendInput = inputSettings.inputVersion(input);
  },
  testIfNumAndStr: function(input) {
    inputSettings.theInput = input;
    inputSettings.inputVersion();
    // if (isNumAndChar == true) {
    //   console.log("does it contain numbers and letters? : " + isNumAndChar);
    // }
  },
  testifNumAndWsAndChar: function(input) {
    inputSettings.theInput = input;
    inputSettings.inputVersion();
  },
  testIfOnlyStr: function(input) {
    inputSettings.theInput = input;
    //inputSettings.inputVersion();
  }
};

// ----------------------------------------------
test.testIfNum(numb);
test.testIfNumAndStr(numbAndStr);
test.testifNumAndWsAndChar(numbAndWsAndStr);
test.testIfOnlyStr(onlyStr);
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

  return null;
}
//console.log(solution("326")); // expected ouput 632,623,362,326,263,236
//console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
//console.log(solution("ABD"));
