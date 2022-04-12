

console.log('------1------');
// // 1. Sukurti masyvą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.

const array= [];
for (let i = 0; i <20; i++) {
    array.push(Math.floor(Math.random() * 20)+1);

}
console.log(array);

console.log('------2------');
// // 2. Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.

function rand(min,max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}

let masyvas = [];

for (let i = 0; i < rand(40,60); i++) {
    masyvas.push(rand(1, masyvas.length));
}
console.log(masyvas);

console.log('------3------');
// // 3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės – atsitiktiniai skaičiai nuo 5
// iki 47. Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
// console.log('------4------');


let mas1 = [];
let max = 5;

for (let i = 0; i < rand(10,15); i++) {
    mas1.push(rand(5, 47));
}
console.log(mas1);

for (let i = 0; i < mas1.length; i++){
    if (mas1[i] > max){
        max = mas1[i];
    }
}
console.log('max: ' + max);



// // 4. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20.
console.log('------5------');



// const raides = ['D', 'E', 'F', 'G', 'H', 20];
// const mas2 = [];

// for (let i = 0; i < 100; i++) {
//     mas2.push(raides(rand()));
// }
// console.log(mas2);


const raides1 = ['A', 'B', 'C', 'D'];

const masyvas7 = [];

for (let i = 0; i < 100; i++) {
    masyvas7.push(raides1[rand(0,3)]);
}

console.log(masyvas7);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < masyvas7.length; i++) {
    if (masyvas7[i] === 'A'){
        countA++;
    }
    if (masyvas7[i] === 'B'){
        countB++;
    }
    if (masyvas7[i] === 'C'){
        countC++;
    }
    if (masyvas7[i] === 'D'){
        countD++;
    }
}

console.log(`Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

// // 5. Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo
// // daugiausia.
// console.log('------6------');
// // 6. Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve
// // turi būti unikalios, tai yra – nesikartoti.

// const nArray = parseInt(Math.floor(Math.random() * 21))


// console.log(nArray);


