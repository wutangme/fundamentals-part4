var reverseString = function(userInput) {
    var splitInput = userInput.split("");
    var reverseInput = splitInput.reverse();
    var joinInput = reverseInput.join("");
    return joinInput;
  }
  