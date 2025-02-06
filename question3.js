let Total_budget = 15500;
let department = 5;
let percentage =[50,30,40,20,10];
for(let i=0; i<department; i++){
    Total_budget -= Total_budget * (percentage[i] / 100);
    console.log("department=", percentage[i], "budget=", Total_budget);
}
