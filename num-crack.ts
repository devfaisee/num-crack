#! /usr/bin/env node

import inquirer from "inquirer";

while (true) {
  const randomNumber = Math.floor(Math.random() * 20 + 1);

  const answer = await inquirer.prompt([
    {
      name: "usernumber",
      type: "number",
      message: "No Human Can Crack the Number between 1-20",
    },
  ]);

  if (answer.usernumber === randomNumber) {
    console.log("AARGHHH! You have successfully cracked the num!");

    const continuePrompt = await inquirer.prompt([
      {
        name: "continue",
        type: "confirm",
        message: "Do you want to continue?",
      },
    ]);

    if (!continuePrompt.continue) {
      break;
    }
  } else {
    console.log("HAHA DUMB MORTAL!");
  }
}