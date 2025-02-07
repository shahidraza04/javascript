//for of
let fruits = ["apple", "cherry", "guava"]
for (f of fruits){
    console.log(f);
}


//for in
let object={
    names: "shahid",
    id: 10,
};
for (key in object){
    console.log(key,object[key]);
}


//foreach
let str1="shahid";
str1.split("").forEach((c) => {
    console.log(c, "=>", "of shahid");
})
