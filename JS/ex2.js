const tempPrompt = Number(prompt('Input Fahrenheit temperature:'));

const myFunction = (param1) => {
    celsius = (param1 - 32) * 5/9;
    return celsius

}

const celsConv = myFunction(tempPrompt);

const cleaned = celsConv.toFixed(2);

console.log(`${tempPrompt} degrees Fahrenheit = ${cleaned} degrees Celsius`);
console.log(`Temperature of ${tempPrompt} Fahrenheit is equivalent to ${cleaned} degrees Celsius`);
console.log(`Water boiling temperature is ${tempPrompt} or ${cleaned} degrees Celsius`);