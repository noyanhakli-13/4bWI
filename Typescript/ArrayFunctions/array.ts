const zahlen: number[] = [5, 2, 8, 1, 9, 6];

// MAP: Verändert jeden Wert und erstellt ein neues Array
const verdoppeln = zahlen.map(zahl => zahl * 2);
console.log(verdoppeln); 

// FILTER: Filtert Werte nach einer Bedingung
const filtern = zahlen.filter(zahl => zahl > 5);
console.log(filtern);

// SORT: Sortiert die Werte aufsteigend
zahlen.sort((a, b) => a - b); // a-b für aufsteigend, b-a für absteigend
console.log(zahlen);


