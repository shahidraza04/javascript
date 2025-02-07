let giftbags =100;
let distribution =15;
let round =0;
let giftcount =0;
let i=1;
while(giftbags>=distribution){
        giftcount++;
        round++;
        giftbags-=distribution;

        if(giftbags<distribution){
            break;
        }
    }

console.log("Remaining:", giftbags);
console.log("distribution:", giftcount);
