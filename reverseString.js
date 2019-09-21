var reverseString = function(userInput) {
    var splitInput = userInput.split("");
    var reverseInput = splitInput.reverse();
    var joinInput = reverseInput.join("");
    return joinInput;
  }
  

  // function reverseString(str) { return str.split("").reverse().join(""); }