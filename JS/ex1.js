const calc = prompt("Please enter two numbers followed by an operator(1,2,+-*/):");

const calcArray = calc.split(",").map(item => item.trim());


const numConv = [];

length = 2;

for(let i = 0; i < length; i++)

    numConv.push(Number(calcArray[i]));

const calcFunction = function(param1, param2, param3) {

    if(param3 == '+'){
        calculation = param1 + param2;
        return calculation
    }

    else if (param3 == '-') {
        calculation = param1 - param2;
        return calculation
    }

    else if (param3 == '*') {
        calculation = param1 * param2;
        return calculation
    }

    else if (param3 == '/') {
        calculation = param1 / param2;
        return calculation

    }

    else {
        alert(`Please enter a valid operator!`)
    }
};

const result = calcFunction(numConv[0],numConv[1],calcArray[2]);

console.log(result);