let max=prompt("Enter the max number:");
let random = Math.floor(Math.random()*max)+1;
let guess= prompt("Guess the number:");
while(true){
    if(guess=="quit"){
        console.log("quitting game.");
        break;
    }

    if(guess==random){
        console.log(`Congrats!! you guessed it right, the random number is ${random}`);
        break;
    }else if(guess>random){
        guess=prompt("Hint: Your guess is too large, Please try again");
    }else{
        guess=prompt("Hint: Your guess is too small, Please try again");
    }
}