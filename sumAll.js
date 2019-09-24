const sumAll = function(startNum, endNum) {

    if (startNum < 0 || endNum < 0) 
      return "Please choose positive values";
    if (typeof startNum !== "number" || typeof endNum !== "number") 
      return "Please choose a number";
  
    if (startNum > endNum) {
      const holdStartNum = startNum;
      startNum = endNum;
      endNum = holdStartNum;
    }
  
    let summedNumbers = 0;
  
    for (let i = startNum; i < endNum + 1; i++) {
      summedNumbers += i;
    }
    
    return summedNumbers;
  