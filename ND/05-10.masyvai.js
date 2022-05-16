// Masyvai
// 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
console.log('--1---');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 


 const pinigine = [];
 let pinigas = rand(10,30);
 for (let i = 0; i < pinigas; i++) {
    pinigine.push(rand(0,10));
     
 }
 console.log(pinigine);

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log('--2---');
piniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
    piniguSuma += pinigine[i];
    
}
console.log(piniguSuma);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
// console.log('--3---');
console.log('--3---');
PopPiniguSuma = 0;

for (let i = 0; i < pinigine.length; i++) {
    if(pinigine[i] > 2)
        PopPiniguSuma += pinigine[i];
    }
     (console.log(PopPiniguSuma))
 

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('---4---');

// for (i = 0; i < pinigine.length; i++) {
//     if (pinigine[i] <= 2) {
//         pinigine[i] = 0;
//     }
// } console.log(pinigine);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;


console.log('---------- 5 ----------');

let MaxReiksmiuSk=0;

for (i = 0; i < pinigine.length; i++) {
    
    if (pinigine[i] ===Math.max(...pinigine)) {
        MaxReiksmiuSk ++;
    }
} 
console.log(Math.max(...pinigine));
console.log(MaxReiksmiuSk);

// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

console.log('---------- 6 ----------');

// for (let i = 0; i < pinigine.length; i++) {
//     if(pinigine[i]===0){
//         pinigine[i]=[i];
//     }
    
// }
// console.log(pinigine);
// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log('---------- 7 ----------');

let papildymas = 30 - pinigine.length
for (let i = 0; i < papildymas; i++) {
    // do {
        pinigine.push(rand(0,10))}

    // }
    // while (pinigine.length != 30)

    console.log(pinigine);

    
// }
// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log('---------- 8 ----------');


let naujasMasyvas1 =[];
let naujasMasyvas2 =[]; 

for (let i = 0; i < pinigine.length; i++) {
  if(pinigine[i] <= 2){
    naujasMasyvas1.push(pinigine[i]);
}
        else naujasMasyvas2.push(pinigine[i]);
    }


console.table(naujasMasyvas2);
console.log(naujasMasyvas1);



// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

console.log('---------- 9 ----------');

let PinigineSuDviem = [naujasMasyvas1, naujasMasyvas2];

console.log(PinigineSuDviem);



// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log('----------10 ----------');

let PinigineSuKortelem = [];
const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
PinigineSuKortelem = [PinigineSuDviem , korteles]
console.log(PinigineSuKortelem);



// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

console.log('----------11 ----------');

korteles.sort()
console.log(PinigineSuKortelem);
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite
// atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek,
// kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log('----------12 ----------');

m = 20 - korteles.length 

// for (let i = 0; i < m; i++) {
//     let MasterVisa = [ 'MasterCard', 'Visa']
//     korteles.push(Math.floor(Math.random() * MasterVisa.length));
    
// }
const masterVisa = ['MasterCard', 'Visa'];
korteles.push(...masterVisa);
console.log(korteles);

while (korteles.length !== 20) {
    korteles.push(masterVisa[Math.floor(Math.random() * masterVisa.length)]);
}

console.log(PinigineSuKortelem);


// console.log(korteles);
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log('----------13 ----------');

// let MastercardKiekis = 0
// let VisaKiekis = 0;

// if(MastercardKiekis > VisaKiekis ){
//     MastercardKiekis++;
//     VisaKiekis++;
//     {
//         console.log(`visa daugiau `);
//     }
// }
// else `daugiau Visa`

let countVisa = 0;
let countMaster = 0;
console.log(PinigineSuKortelem[1]);

for (let i = 0; i < PinigineSuKortelem[1].length; i++) {
    if (PinigineSuKortelem[1][i] === 'Visa') {
        countVisa++;
    }
    if (PinigineSuKortelem[1][i] === 'MasterCard') {
        countMaster++;
    }
} 

console.log(`Visa korteliu kiekis: ${countVisa}`);
console.log(`MasterCard korteliu kiekis: ${countMaster}`);
if (countVisa>countMaster) {
    console.log(`daugiau visa`);
}
else if (countVisa===countMaster){
    console.log(`lygus skaicius`);
}
else console.log(`daugiau master`);
// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
// kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki
// 9999999999;

console.log('----------14 ----------');

let Trecias = []
   for (let i = 0; i < 10; i++) {
    Trecias.push(rand(1000000000,9999999999));
    // PinigineSuKortelem.push(Trecias);
       
   }
const pinigineNauja = [PinigineSuKortelem, Trecias]
console.log(pinigineNauja);


// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log('----------15 ----------');
PinigineSuKortelem.sort()
console.log(PinigineSuKortelem);
console.log(PinigineSuKortelem[1]);

// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti
// atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi
// 500);

console.log('----------16 ----------');

// console.log(PinigineSuKortelem[1]);
// console.log(PinigineSuKortelem[1]);
// console.log(PinigineSuKortelem[3]);

// let naujasMasyvas2Suma = 0;

// for (let i = 0; i < 500; i++) {
//     do{ 
//         naujiPinigai = rand(3,10);
//         naujasMasyvas2Suma +=naujiPinigai;
//         PinigineSuKortelem[1].push(naujiPinigai);
//     }
//     while (naujasMasyvas2Suma <500)

// console.log(PinigineSuKortelem[1]);



// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins
// be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

console.log('----------17 ----------');
let laimingas = 0;

for (let i = 0; i < Trecias.length; i++) {
    if (Trecias[i] % 777 ===0 )
    laimingas++;
    
}

console.log(laimingas);
console.log(Trecias);

console.log(PinigineSuKortelem);


// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas',
// 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;



console.log('----------18 ----------');

const PenktasSk = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']

const asc = PenktasSk.sort((a,b) => a.length - b.length);
console.log(asc);
PinigineSuKortelem.push(PenktasSk)
console.log(PinigineSuKortelem);


// basic 7 uzd - find index
