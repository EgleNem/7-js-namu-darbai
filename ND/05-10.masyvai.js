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

for (let i = 0; i < pinigine.length; i++) {
    if(pinigine[i]===0){
        pinigine[i]=[i];
    }
    
}
console.log(pinigine);
// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log('---------- 7 ----------');

for (let i = 0; i < pinigine.length; i++) {
    do {
        pinigine.push(rand(0,10))

    }
    while (pinigine.length != 30)

    console.log(pinigine);

    
}
// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log('---------- 8 ----------');


let naujasMasyvas1 =0;
let naujasMasyvas2 =0;

for (let i = 0; i < pinigine.length; i++) {
  if(pinigine[i] <= 2){
    pinigine.push(naujasMasyvas1);}
        else {
            pinigine.push(naujasMasyvas2)

        }
    }


console.log(pinigine);
    
    

// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite
// atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek,
// kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
// kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki
// 9999999999;
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti
// atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi
// 500);
// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins
// be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas',
// 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
