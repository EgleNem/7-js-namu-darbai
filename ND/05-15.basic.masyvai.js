// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
// a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// b) Raskitedidžiausiąmasyvoreikšmęirjosindeksą;
// c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// d) Sukurkitenaująmasyvą,kurioreikšmėsyra1uždaviniomasyvoreikšmes
// minus tos reikšmės indeksas;
// e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki
// 25, kad bendras masyvas padidėtų iki indekso 39;
// f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti
// sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal
// neporinį-porinį indeksą, ne reikšmę);
// g) Pirminiomasyvoelementussuporiniaisindeksaispadarykitelygius0
// jeigu jie didesni už 15;
// h) Suraskitepirmą(mažiausią)indeksą,kurioelementoreikšmėdidesnė
// už 10;
console.log('----------1 ----------');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 


const mas =[];
let Did10 = 0 ;
PoriniuSkSuma =0;

for (let i = 0; i < 29; i++) {
    mas.push(rand(5,25))
    if(mas[i]>10) {
        Did10++;
        
    }
    if (mas[i]%2===0)
    PoriniuSkSuma+= mas[i] ;
 
}
console.log(mas);
console.log('----------a ----------');
console.log(Did10);
console.log('----------b ----------');
const maxReiksme = Math.max(...mas);
const index = mas.indexOf(maxReiksme);
console.log(maxReiksme);
console.log(index);

console.log('----------c ----------');
// c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
console.log(PoriniuSkSuma);
console.log('----------d----------');
// d) Sukurkitenaująmasyvą,kurioreikšmėsyra 1uždaviniomasyvo reikšmes
// minus tos reikšmės indeksas;
const NaujasMas=[];

for (let i = 0; i < 29; i++) {
    NaujasMas.push(mas[i]-[i])
}
    console.log(NaujasMas);
// e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki
// 25, kad bendras masyvas padidėtų iki indekso 39;
console.log('----------e----------');
let papildymas = 39-mas.length;
for (let i = 0; i < papildymas; i++) {
    mas.push(rand(5,25) );
    
}
console.log(mas);

console.log('----------f----------');
// f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti
// sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal
// neporinį-porinį indeksą, ne reikšmę);

const PorMas=[];
const NeporMas = [];

for (let i = 0; i < 29; i++) {
    if([i] % 2 ===0 )
    PorMas.push(mas[i])
 else NeporMas.push(mas[i])
}

    console.log(mas);
    console.log(PorMas);
    console.log(NeporMas);

// g) Pirminio masyvo elementus suporiniais indeksais padarykite lygius0
// jeigu jie didesni už 15;

console.log('----------g----------');

for (let i = 0; i < 29; i++) {
    if([i] % 2 ===0 && mas[i] >15 )
  mas[i] = 0
}

console.log(mas);

// h) Suraskite pirmą(mažiausią)indeksą,kurio elemento reikšmė  didesnė uz 10 
console.log('----------g----------');
for (let i = 0; i < 29; i++) {
    if(mas[i] >10 ){
  console.log(mas[i]);
  break
}}


// console.log(mas);

// 2. Naudodamiesi 1 uždavinio masyvu:


// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('----------3----------');
const mas2 =[];
const raides = ['A', 'B', 'C', 'D']
let countA= 0;
let countB= 0;
let countC= 0;
let countD= 0; 
for (let i = 0; i < 200; i++) {
    mas2.push(raides[Math.floor(Math.random() * raides.length)])
    if(mas2[i]==='A'){
     countA++;
}
if(mas2[i]==='B') { 
    countB++;
}
    if(mas2[i]==='C') { 
    countC++;
    }
    if(mas2[i]==='D'){ 
    countD++; 
}
}

console.log(mas2);
console.log(`a: ${countA}, b:${countB}, c: ${countC}, d:${countD} `);


// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log('----------4----------');
const masA =[];
const masB =[];
const masC =[];
const masD = [];



for(let i = 0; i < 200; i++){
    masA.push(raides[Math.floor(Math.random() * raides.length)]);
    masB.push(raides[Math.floor(Math.random() * raides.length)]);
    masC.push(raides[Math.floor(Math.random() * raides.length)]);
}

for (let i = 0; i < Math.max(masA.length, masB.length, masC.length); i++) {
  masD.push((masA[i]) + (masB[i]) + (masC[i]));
}

console.log(masD);

const unikalus = new Set(masD).size;
console.log(unikalus);
const kas = unikalus.values()


// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log('----------5----------');
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
// 8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

