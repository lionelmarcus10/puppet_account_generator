import inquirer from 'inquirer';
import {Profile} from './Profile.js';
import createBrowser  from "./Creation.js";
import chalk from 'chalk';


// Poser questions à l'utilisateur
console.log("WELCOME")
let choice = inquirer.prompt({type: "list", name:"choice", message: "What do you want to do ?", choices: ["Create a profile", "Create a specific account", "Create account on multiple spécific platform", "Create an account on all platform", "Exit"]})

// if create a profile
// if create a specific account
// if create account on multiple spécific platform
// if create an account on all platform
// if exit

createBrowser();
