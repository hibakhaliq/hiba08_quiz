#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "Q1: What is the correct way to check if the two values are not equal in Typescript",
        choices: ["a==b", "a===b", "a=b", "a!==b"]
    }, {
        name: "question_2",
        type: "list",
        message: "Q1: Which of the following chracters are allowed in Typescript?",
        choices: ["@", "$", "#", "&"]
    }, {
        name: "question_3",
        type: "list",
        message: "Q1: What commas are used for conctenation in Typescript",
        choices: ["+", ",", "*", "-"]
    }, {
        name: "question_4",
        type: "list",
        message: "Q1: Which symbol is used to terminate a statement in Typescript",
        choices: [".", ";", "/", ","]
    }, {
        name: "question_5",
        type: "list",
        message: "Q1: What method of Inquirer.js is used to start prompt interface and recieve input in Typescript",
        choices: ["start()", "prompt()", "run()", "init()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log("1.CORRECT");
        ++score;
        break;
    default:
        console.log("1.INCORRECT");
}
switch (quiz.question_2) {
    case "$":
        console.log("2.CORRECT");
        ++score;
        break;
    default:
        console.log("2.INCORRECT");
}
switch (quiz.question_3) {
    case ",":
        console.log("3.CORRECT");
        ++score;
        break;
    default:
        console.log("3.INCORRECT");
}
switch (quiz.question_4) {
    case ";":
        console.log("4.CORRECT");
        ++score;
        break;
    default:
        console.log("4.INCORRECT");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5.CORRECT");
        ++score;
        break;
    default:
        console.log("5.INCORRECT");
}
console.log(`YOUR SCORE IS: ${score}`);
