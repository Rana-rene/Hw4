const numGen = Math.floor(Math.random() * 100) + 1;

console.log(numGen);

let input = Number(prompt(`Please enter a number from 1-100(hint:${numGen}):`))

let guessCount = 0

while(input !== numGen) {
    if(input > numGen){
        guessCount++ ; 
        alert('Too high, guess lower');
        console.log(guessCount);
        input = Number(prompt(`Please enter a number from 1-100(hint:${numGen}):`))
    }
    else if(input < numGen) {
        guessCount++ ; 
        alert('Too low, guess lower');
        console.log(guessCount);
        input = Number(prompt(`Please enter a number from 1-100(hint:${numGen}):`))
    } 

    if(input == numGen){
        guessCount++ ; 
        alert(`You got it! The number was ${numGen}. It took you ${guessCount} tries.`)
    }
}