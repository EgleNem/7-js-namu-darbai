console.log('-------1-----');

// TIK SU IF


// 1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()


// function rand(min,max) {
//     return Math.floor(Math.random()* (max-min+1)+min);
// }



function rand(a,b){
    if(a>b && b!==0) {
        return a / b;
    }
    else if (b===0){
        return 'negalima'
    }
    if(b>a && a!==0) {
        return b / a;
    } 
    else if (a===0){
        return 'negalima'
    } if(a===b){
        return 'kintamieji yra vienodi'
}}
    
const a = Math.floor(Math.random()* 5);
const b = Math.floor(Math.random()* 5);

console.log(a);
console.log(b);
console.log(rand(a,b));

console.log('-----2-----');

// 2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.

function rand2(d,e,f) {
    if (d<e && e<f){
        return `vidurine reiksme yra ${e}`;
    }
    else if (e<f && f<d){
        return `vidurine reiksme yra ${f}`;
    }
    else if (f<d && d<e){
        return `vidurine reiksme yra ${d}`;
    }
    else if (f>d && d>e){
        return `vidurine reiksme yra ${d}`;
    }
    else if (f<d && f<e){
        return `vidurine reiksme yra ${f}`;
    }
    else if (f<e && f>d){
        return `vidurine reiksme yra ${f}`;
    }
    else {
        return `kazkas`
    }
    
}
const d = Math.floor(Math.random()*26);
const e = Math.floor(Math.random()*26);
const f = Math.floor(Math.random()*26);

console.log(d);
console.log(e);
console.log(f);
console.log(rand2(d,e,f));

console.log('-----3-----');

// 3. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite rand() funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().
// the largest length is less than the sum of the other two lengths; otherwise, no triangle can be formed.

function rand3(g,h,i) {
    if (g<h+i){
     return `galima`
    } else {
    return `negalima`;
    }}    

const g = Math.floor(Math.random()*10 +1);
const h = Math.floor(Math.random()*10 +1);
const i = Math.floor(Math.random()*10 +1);

console.log(g);
console.log(h);
console.log(i);
console.log(rand3(g,h,i));


console.log('-----4-----');

// 4. Sukurkite keturis kintamuosius ir rand()funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspausdinkite su console.log()

const array = [];
for (let i = 0; i <4; i++){
    array.push(Math.floor(Math.random()*3))
}
console.log(array);

// let count = 0
// for (let i = 0; i < array.length; ++i) {
//  if (array[i] == 0)
//  count++;
// }

let count1 = array.filter(i => i === 0).length
console.log(count1)
let count2 = array.filter(i => i === 1).length
console.log(count2)
let count3 = array.filter(i => i === 2).length
console.log(count3)

  

// 5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių
// atspauzdinkite “+” simbolius, didesnių už 0 iš abiejų pusių
// atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

console.log('-----5-----');


function random(min,max) {
       return Math.floor(Math.random()* (max-min+1)+min);
}
       for (let i = 0; i <3; i++) {
       let value = random(-10,10);

       if ( value<0){
            console.log(`+${value}+`)
         }
        else if (value>0){
            console.log(`-${value}-`)
         }
         else  {
            console.log(`*${value}*`)
         }
        
       }


// const mas1 = [];
// for (let i = 0; i <3; i++){
//     mas1.push(Math.floor(Math.random()*21-10))
// }
// console.log(mas1);
// let value = Math.floor(Math.random()*21-10);
//  if ( mas1.values(value<0)){
//     console.log(`+${value}+`)
//  }
//  if ( mas1.values(value>0)){
//     console.log(`-${value}-`)
//  }
//  if ( mas1.values(0)){
//     console.log(`*${value}*`)
//  }


// const o = Math.floor(Math.random()*21 -10);
// const p = Math.floor(Math.random()*21 -10);
// const r = Math.floor(Math.random()*21 -10);
// console.log(o,p,r);



    



// Math.floor(Math.random()* (10-(-10)+1)+(-10));




// 6. Įmonė parduoda žvakes po 1EUR.Perkant daugiau kaip už 1000EUR
// taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000.

function rand1(min,max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}
// for (let i = 0; i < kiekis.length; i++) {
    // let kiekis = rand1(5,3000);
    // let suma = kiekis * 1;
    // if(suma > 1000 ) {
    // let kiekis = rand1(5,3000);
    // let suma = kiekis * 1;
    // // if(suma > 1000 ) {
    //     return (`${suma} - ${suma})/0.03`
    


// 7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()

// 30 EILUCIU IF 