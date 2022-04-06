/*
const pazymiai = [10, 2, 8, 4, 6 ];
let suma = 0;

for (let i= 0; i<pazymiai.length; i++) {
    const pazymys  = pazymiai [i];
    console.log(pazymys);
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}
console.log('Galutine suma', suma);

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis', vidurkis);

console.log('------------');
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;
}
*/
console.log('------1------');
//1. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.

let suma = 0;

while (suma < 100) {
let rand = Math.floor(Math.random() * 11);
suma += rand;
console.log(suma);
} 


console.log('------2------');
// 2. Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš
//7.

let sum = 0;

while (suma % 7) {
let rand = Math.floor(Math.random() * 11);
suma += rand;
console.log(suma);

} 
console.log('------3------');
console.log('------4------');
//4. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius v//////ienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.


let i = 0;
while (i !== 5) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
}

