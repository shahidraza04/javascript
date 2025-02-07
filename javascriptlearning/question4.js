let ages = [18, 17, 20, 25, 15];
let category= ages.map((age)=> {
    if(age<18){
        return "you are minor";
    }else if (age>=18) {
        return "you are adult";
    }
});
console.log("category", category);

//fiter: create a new array with all element that pass a test
let num = [59, 25, 45, 18, 40, 60];
let small = num.filter((n) => n <=50);
console.log("small", small);

let product = [
    {name: "butter", expiredate: new Date(25, 1, 1), isINStock: true},
    {name: "cheese", expiredate: new Date(25, 1, 1), isINStock: true},
    {name: "paneer", expiredate: new Date(25, 1, 1), isINStock: true},
];
let today = new date(25, 2, 7);
let expiredproduct = product.filter((product)=>product.expiredate < today );
console.log("expiredproduct",expiredproduct);

//spread operator: allow you to copy the element of an array into a new array 
let fruit1 = [...arr];
console.log("name Arr: ", arr);

//arraydestruction operatuion =store array valur seprately
let [n1, n2, n3] =arr;
console.log("n1=",n1);
console.log("n2=",n2);
console.log("n3=",n3);

//concate:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log("arr3 =",arr3);





