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

console.log(vowelCount(input));