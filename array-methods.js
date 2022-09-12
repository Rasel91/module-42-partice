const products = [
    {name:'laptop', price:32000, brand:'lenovo', color:'silver' },
    {name:'watch', price:3200, brand:'citysun', color:'yellow' },
    {name:'phone', price:2000, brand:'iphone', color:'gray' },
    {name:'sungless', price:300, brand:'ray', color:'black' }
];
// Use map for the product arry individual এটা রিটার্ন করে বিধায় এখানে variable দিয়ে declear করতে হয়।
const brands= products.map(product => product.brand);

const colors= products.map(product => product.color);
console.log(brands);
console.log(colors);

// 2. Use forEach এটা  কোন কিছু রিটার্ন করে না
products.forEach(product=> console.log(product))
products.forEach(product=> console.log(product.color))
products.forEach(product=> console.log(product.brand))


// 3. use Filter 
const cheap = products.filter(product=>product.price<= 3000);
console.log(cheap);

const specificName= products.filter(p=>p.name.includes('p'))
console.log(specificName);