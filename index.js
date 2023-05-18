import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
function repeatPrompt() {
    inquirer
        .prompt({
        type: "confirm",
        name: "repeat",
        message: "Do you want to repeat?",
        default: false,
    })
        .then((answers) => {
        if (answers.repeat) {
            mainPrompt(); // Repeat the main prompt
        }
        else {
            console.log(chalk.green("Goodbye!"));
            process.exit(0); // Exit the program
        }
    })
        .catch((error) => {
        console.error(chalk.red("An error occurred:"), error);
    });
}
function mainPrompt() {
    inquirer
        .prompt({
        type: "input",
        name: "input",
        message: chalk.blue("Enter something:"),
    })
        .then((answers) => {
        console.log(chalk.yellow(`You entered: ${answers.input}`));
        repeatPrompt(); // Ask if user wants to repeat
    })
        .catch((error) => {
        console.error(chalk.red("An error occurred:"), error);
    });
}
// Start the program
const welcomeMessage = chalkAnimation.rainbow("Welcome to the CLI program!");
welcomeMessage.start();
welcomeMessage.stop();
console.log(welcomeMessage.frame());
console.log(chalk.green("----------"));
mainPrompt();
