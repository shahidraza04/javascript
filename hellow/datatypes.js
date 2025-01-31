// //Variables


var number=20;
console.log("number=", number);
console.log("data type is=",typeof number);

var number="helloworld";
console.log("number=", number);
console.log("data type is=",typeof number);

//use let method
let n1=10;
console.log("n1=", n1);
console.log("type of n1=", typeof n1)

n1=20; //reassignment
console.log("n1=", n1);
console.log("type of n1=", typeof n1)

//datatypes.

//1) number
let num=10;
console.log("num=",num);
console.log("types of data num=", typeof num);

//2)string
let name1="shahid raza";
console.log("name1=",name1);
console.log("types of data=",typeof name1);

//3)boolen
let complete="false";
console.log("complete=",complete);
console.log("types of data=", typeof complete);

//4)undefined
let name2;
console.log("name2=",name2);
console.log("types of data=",typeof name2);

//5)null
let name3=null;
console.log("name3",name3);
console.log("types of data=", typeof name3);

//non-primitive datatypes:

//arrays
let snacks=["aloo chips","kurkure","sev","moongdal"];
console.log("snacks=",snacks);
console.log("first snack is=",snacks[0]);
console.log("secound snack is=",snacks[2]);

//objects
let cryptocoin={
    coin_name: "Bitcoin",
    coin_founder: "satoshi",
    coin_marketcap: "2trillion",
    coin_supply: "21million",
    coin_usecase: "decentralizing the legacy financial system",
}
console.log("cryptocoin=",cryptocoin);
console.log("coin_name =",cryptocoin.coin_name);
console.log("coin_name =",cryptocoin.coin_marketcap);


let cryptocoin2={
    coin_name: "Etherium",
    coin_founder: "Vitalik buterian",
    coin_marketcap: "391.31 B",
    coin_supply: "120 million",
    coin_usecase: "creation of decentralized lending and borrowing platforms",
}
console.log("cryptocoin2=",cryptocoin2);

let cryptocoin3={
    coin_name: "XRP",
    coin_founder: "Chris Larsen and Jed McCaleb",
    coin_marketcap: "178 B",
    coin_supply: " 80 billion",
    coin_usecase: "cross-border payments and remittances",
}
console.log("cryptocoin3=",cryptocoin3);




