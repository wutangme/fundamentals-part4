var repeatString = function(userInput, multiplyBy) {
    let stringOutput = ""
    if (multiplyBy < 0) 
      return "ERROR"
    for (let i = 0; i < multiplyBy; i++) {
      stringOutput += userInput;
    }
    return stringOutput;
  }
