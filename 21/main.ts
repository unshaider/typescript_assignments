// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car: {name: string; company: string; model: number} = {
    company: "Honda",
    name: "Civic",
    model: 2020
};
console.log(`Company: ${car.company}\nName: ${car.name}\nModel: ${car.model}`);