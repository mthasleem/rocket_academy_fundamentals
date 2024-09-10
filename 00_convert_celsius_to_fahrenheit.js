var temperatureConversion = function(celsius){
    
    const x = (9/5);
    const y = 32;
    var temperatureCalc =  (celsius * x) + y;
    return temperatureCalc;
}

console.log(temperatureConversion(36.7));

