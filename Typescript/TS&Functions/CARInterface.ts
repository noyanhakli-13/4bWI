interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "Bugatti", model: "Spider", price: 1500000, year: 2022 },
    { brand: "BMW", model: "3er", price: 42900, year: 2023 },
    { brand: "Volkswagen", model: "Golf", price: 31900, year: 2021 },
    { brand: "Mercedes-Benz", model: "C-Klasse", price: 55800, year: 2024 },
];

function getTotalPrice(cars: Car[]): number {
    let total = 0;
    cars.forEach((car) => {
        total += car.price;
    });
    return total;
}

function printCars(cars: Car[]): void {
    cars.forEach(car =>{
        console.log(car.brand);
        console.log(car.model);
        console.log(car.year);
        console.log(car.price);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const expensiveCars: Car[] = [];
    cars.forEach((car) => {
        if (car.price > minPrice) {
            expensiveCars.push(car);
        }
    });
    return expensiveCars;
}

function getTotalPriceReduce(cars: Car[]): number {
    return cars.reduce((total, car) => total + car.price, 0);
}


function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
    return cars.filter((car) => car.price > minPrice);
}



// Gesamtpreis mit forEach
console.log("Gesamtpreis (forEach):");
console.log(getTotalPrice(cars));

// Alle Autos ausgeben
console.log("Alle Autos:");
printCars(cars);

// Teure Autos mit forEach
console.log("Teure Autos (forEach):");
printCars(getExpensiveCars(cars, 50000));

// Gesamtpreis mit reduce
console.log("Gesamtpreis (reduce):");
console.log(getTotalPriceReduce(cars));

// Teure Autos mit filter
console.log("Teure Autos (filter):");
printCars(getExpensiveCarsFilter(cars, 55000));