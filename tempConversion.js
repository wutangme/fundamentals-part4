function tempConversion () {
}


var farenheitToCelsius = function (farenheit) {
  tempInCelsius = ( (farenheit - 32) * 5 ) / 9;
  return tempInCelsius;



}

var celsiusToFarenheit = function (celsius) {
  tempInFarenheit =  ( (celsius * 9 ) / 5 ) + 32;
  return tempInFarenheit;


}