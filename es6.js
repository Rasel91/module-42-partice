const numbers = [89, 35,98, 12];
const student ={
    name: 'shakib khan',
    age:32,
    movices :['king khan', 'Dhakar Mastan']
};

// 1. template String 
const about = `My Name is ${student.name} age of ${student.age} movices ${student.movices[0]} has number ${numbers[2]}`;
console.log(about);

// 2. Arrow function

const getFiveNumber=()=> 5;// Single Line Arrow function 
const addThirtyFive=num=> num+35;
const isEven = x=> x % 2 == 0;
const addThree =(x , y ,z)=> x + y+ z;
const doMath =(num1, num2)=>{
    const add = num1+num2;
    return add;
}

const result = doMath(20,20)
console.log(result);


// 2.spread operator

// const  newNumbers= [numbers];
const  newNumbers= [...numbers];//spread operator

numbers.push(222);
numbers.push(222);
numbers.push(222);


// create a new array from an older array and an element
const currentNumbers = [...newNumbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);