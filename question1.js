// let doors = 100;
// let monkey = 50;
// let closedcount = 100;
// let opencount = 0;

// for(let i=1; i <= 100;i++) {
//     if(i % monkey == 0){
//         opencount++;
//         closedcount--;
//     }
// }
// console.log("open door =", opencount);
// console.log("closed door =", closedcount);

const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let closeddoor = 100;
let opendoor = 0;
let closedcount = 100;  

rl.question("Enter a monkey value: ", (monkey) => {
    monkey = parseInt(monkey); 
    if (isNaN(monkey) || monkey <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    for (let i = 1; i <= 100; i++) {
        if (i % monkey === 0) {
            opendoor++;
            closeddoor--;
        }
    }

    console.log("Open doors =", opendoor);
    console.log("Closed doors =", closeddoor);
    rl.close();
});


