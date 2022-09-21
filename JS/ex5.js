let wordStop = "" ;
let wordArray = [];

while (wordStop.toLowerCase() !== "stop"){
    wordStop = prompt("Please enter words, enter stop to terminate program:");

    wordArray.push(wordStop);
    if (wordArray[0].toLowerCase() == "stop"){
        alert("You terminated the program!");
        break
    }
}

wordArray.pop();
console.log(`You entered the following words: ${wordArray}`);



