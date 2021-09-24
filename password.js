const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to the Password Validator!")
console.log("The Password must be at least 10 characters, contain a number, and contain an upper case and a lower case letter.")
reader.question("Please enter the password you would like to validate:", function(answer) {
    let splitAnswer = answer.split("")
    let upperCheck = false
    let lowerCheck = false
    let numCheck = false
    for (i=0; i<splitAnswer.length; i++) {
        let upperI = splitAnswer[i].toUpperCase()
        if (upperI === splitAnswer[i] && isNaN(splitAnswer[i])) {
            upperCheck = true
        }
    }
    for (i=0; i<splitAnswer.length; i++) {
        let lowerI = splitAnswer[i].toLowerCase()
        if (lowerI === splitAnswer[i] && isNaN(splitAnswer[i])) {
            lowerCheck = true
        }
    }
    for (i=0; i<splitAnswer.length; i++) {
        if ( isNaN(splitAnswer[i]) === false) {
           numCheck = true
        }
    }
   if (splitAnswer.length >= 10 && upperCheck === true && lowerCheck === true & numCheck === true) {
    console.log("This password meets the requirements.")
    console.log("╭╮╱╱╭╮\n" +
    "┃╰╮╭╯┃\n" +
    "╰╮╰╯╭┻━┳╮╱╭╮\n" +
    "╱╰╮╭┫╭╮┃┃╱┃┃\n" +
    "╱╱┃┃┃╭╮┃╰━╯┃\n" +
    "╱╱╰╯╰╯╰┻━╮╭╯\n" +
    "╱╱╱╱╱╱╱╭━╯┃\n" +
    "╱╱╱╱╱╱╱╰━━╯\n")
   }
    else {
        console.log("This password does not meet the requirements")
        console.log("╭━━╮\n" +
        "┃╭╮┃\n" +
        "┃╰╯╰┳━━┳━━╮\n" +
        "┃╭━╮┃╭╮┃╭╮┃\n" +
        "┃╰━╯┃╰╯┃╰╯┃\n" +
        "╰━━━┻━━┻━━╯")
    }
  });