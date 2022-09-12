// How to declear variable in js
const fatherName= 'Arjullah';
let season = 'rainy';
 season = 'winter';

//  6 Basic conditons > ,< ,===,!==, <=, >=
// multiple conditions : && , ||

if (fatherName ==='Arjullah' || season === 'rainy'){

}else if(fatherName ==='Arjullah'){

}else{

}

// 3. Array declare 
// index 
//  length , push , pop

const numbers = [89, 56 ,89, 23];
numbers[0]=89;


// 4. for loop
for (let i= 0; i<numbers.length; i++){
    const numbers = numbers[i];
    console.log(number);
};

// 5. function 
function multiple(num1, num2){
    const result= num1*num2;
    return result;
};

const output = multiple(20,22);

// 6. Object 
const student ={
    name: 'shakib khan',
    age:32,
    movices :['king khan', 'Dhakar Mastan']
};

const myVariable ='age';

console.log(student.age);//direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]);//Access via property name in a variable