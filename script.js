// #1 
const foods = ["pizza"," burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood=[];
modifiedFood=(foods.slice(1,4));
console.log(modifiedFood);

// #2
foods1 = ["pizza"," burger", "fingerChips", "donuts", "springRoll"];
foods1.splice(2,0, "noodles", "icecream");
console.log(foods1)

// #3 
const numberArray = [12,324,213,4,2,3,45,4234];
let even= numberArray.filter(function(item){
    return item%2==0
} )
console.log(even);


// #3.1  

let isprime=numberArray.filter(function(number)
{
return number%2!==0; 
})
console.log(isprime); 

// #4 
let nonPrime=numberArray.filter(function(number1) 
{
return number1%2==0;
});
console.log(nonPrime);

// #5
const numberArray1 = [12,324,213,4,2,3,45,4234];
let even1= numberArray1.filter(item=> item%2==0)
console.log(even1);


// #6

myArray = [11, 34, 20, 5, 53, 16];
let sq= myArray.map(item=> item**2)
console.log(sq)

// #7
myArray=[2, 3, 5, 10];
let multiply=myArray.reduce((multiply,item)=>multiply*item);
console.log(multiply)