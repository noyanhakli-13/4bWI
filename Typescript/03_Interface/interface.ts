interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean; // ?=optional
}

const person = {  
    firstname: "Berke",
    lastname: "Arziman",
    age: 11,
};

function printName(person: Person) {
    console.log(person.age);
}
printName(person);
 