const person1 = {
    name: "John Doe",
    age: 40,
    gender: "M",
    parents: {
        dad: "David",
        mom: "Mary"
    }
};

// shallow copy
const person2 = {
    ...person1
};



console.log('---- shallow copy ---')
console.log('check object equal?')
console.log(person1 == person2);
console.log(person1 === person2);

console.log('check object primitive member equal?')
console.log(person1.name == person2.name);
console.log(person1.name === person2.name);

console.log('check object object member equal?')
console.log(person1.parents == person2.parents);
console.log(person1.parents === person2.parents);

// deep copy
const person3 = JSON.parse(JSON.stringify(person1));
console.log('---- deep copy ---')
console.log('check object equal?')
console.log(person1 == person3);
console.log(person1 === person3);

console.log('check object primitive member equal?')
console.log(person1.name == person3.name);
console.log(person1.name === person3.name);

console.log('check object object member equal?')
console.log(person1.parents == person3.parents);
console.log(person1.parents === person3.parents);