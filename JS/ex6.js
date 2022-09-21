const input = prompt("Please enter a word:")

const vowelCount = (param1) => {
    let valNum = 0
    let vowels = ['a','e','i','o','u','y']
    for(let char of param1){
        if(vowels.includes(char))
        valNum++
    }
    return valNum;
}

const palindrome = (param1) => {
    let palinString = "";
    for(let i = param1.length - 1; i >= 0; i--) {
        palinString += param1[i]
    }
    if(palinString !== param1){
        const messg1 = "The string is not a palindrome"; 
        return messg1;
    }
    else if (palinString == param1) {
        const messg2 ="The string is a palindrome!";
        return messg2;
    }
}

console.log(vowelCount(input));
console.log(palindrome(input));