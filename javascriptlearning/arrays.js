//array
let array = [1,2,3,4,5];
console.log("array:", array);

//push(): add element in last
array.push(6);
console.log("array after push():",array);

//pop(): remove last element
array.pop();
console.log("array after pop():", array);

//shift : remove first element
array.shift();
console.log("after shift:", array);

//unshift : add element from start 
array.unshift(0,1);
console.log("array after unshift:", array);

//for_eachloop for print array
array.forEach(function(num){
 console.log("num is:", num)
});

array.forEach((num)=>{
    console.log("num is:"+ num);
}); 

let arr = new Array("shahid","amar", "nilesh","ajay","sahil");
arr.pop(null);
console.log("array is: ",arr);
arr.push();
console.log(arr);

arr.forEach((names)=>{
    console.log("names is:👵🏽",names);
});

console.log(arr.indexOf("shahid"));
arr.unshift("jhon","roman");
console.log(arr);

//map: create array
let bigfruits = fruitsbasket.map((fruit) => fruit.toUppercase());
console.log("bigfruits=",bigfruits);
console.log("type of bigfruits:", typeof bigfruits);
