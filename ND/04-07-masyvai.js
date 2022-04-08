const { default: anymatch } = require("anymatch");
const minimist = require("minimist");

console.log('------1------');
// // 1. Sukurti masyvą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.

const array= [];
for (let i = 0; i <20; i++) {
    array.push(Math.floor(Math.random() * 20)+1);

}
console.log(array);

console.log('------2------');
// // 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.


const array2= [];
array2.length = Math.floor(Math.random())
for (let i = 0; i < Math.random(array2.length); i++) {
    array2.push(Math.floor(Math.random()*(60-40+1)+40));

}
console.log(array2);

console.log('------3------');
// // 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5
// iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
// console.log('------4------');

arr =[];
// min.length = 10;
// max.length = 15;
arr.length = Math.floor(Math.random()*(15-10+1)+10)
console.log(arr.length);

// // 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20.
// console.log('------5------');
// // 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo
// // daugiausia.
// console.log('------6------');
// // 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve
// // turi būti unikalios, tai yra – nesikartoti.

// const nArray = parseInt(Math.floor(Math.random() * 21))


// console.log(nArray);


