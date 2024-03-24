#! usr/bin/env node

import inquirer from "inquirer";
//1 computer will generate a random number
//2 user input for guessing number
//3 compare user input with computer generatd number and show result

const randomNumber =Math.floor(Math.random() *6 +1);


const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number",
    },
]);

if(answer.userGuessNumber===randomNumber){
    console.log('Congratulation! you guess right number');
} else{
    console.log('You guess wrong number');
}