#! /usr/bin/env node

import inquirer from "inquirer"
// computer will generate a random number
//user input for guessing number
//compare user input with computer generated number and show result
const randomNumber=Math.floor(Math.random() * 6 + 1);
 const answer = await inquirer.prompt([{name:"userguessnumber", type:"number", message:"please guess a number between 1 to 6"}])
 console.log(answer)
 if(answer.userguessnumber === randomNumber){
     console.log("Congratulations! You guessed the right number.")
 }else{
     console.log("You guessed wrong number.")
 }