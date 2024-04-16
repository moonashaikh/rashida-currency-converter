#! /usr/bin/env node
import inquirer from "inquirer";
let usdRates = 277.90; // usd to pkr value is 277.90
let gbpRates = 351.01; // gbp is pound 
let euroRates = 301.12;
let conformExit;
do {
    conformExit = await inquirer.prompt([
        {
            type: "confirm",
            name: "exit",
            message: "Do you want pkr amount"
        }
    ]);
    if (!conformExit.exit) {
        break;
    }
    let currencyAmount = await inquirer.prompt([
        {
            name: "currency",
            type: "list",
            choices: ['us Doller', 'Pound', 'Euro'],
            message: "Please select any currency"
        },
        {
            name: "amount",
            type: "number",
            message: "please enter PKR amount to convert"
        }
    ]);
    if (currencyAmount.currency == "us Doller") {
        console.log(`here is convert us doller :$${currencyAmount.amount / usdRates}`);
    }
    else if (currencyAmount.currency == "Pound") {
        console.log(`here is convert British Pound :£${currencyAmount.amount / gbpRates}`);
    }
    else {
        console.log(`here is convert Euro :€${currencyAmount.amount / gbpRates}`);
    }
} while (conformExit.exit);
