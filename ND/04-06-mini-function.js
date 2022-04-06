console.log("---1---");
// 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.

function suma(a, b) {
  return a + b;
}
const s = suma(5, 6);
console.log(s);

console.log("---2---");
//2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina
//rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.

function palyginimas(a, b) {
  if (a > b) {
    return `Pirmas skaicius ${a} yra  didesnis`;
  }
  if (b > a) {
    return `Antras skaicius ${b} yra didesnis`;
  }
  if (a === b) {
    return `Skaiciai ${a} ir ${b} lygus`;
  }
}

let p1 = palyginimas(4, 10);
console.log(p1);

let p2 = palyginimas(47, 11);
console.log(p2);

let p3 = palyginimas(11, 11);
console.log(p3);

console.log("---3---");
// 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai
//yra keliemieji. 366 dienos

function keliamieji(m) {
  if (m % 4 === 0 || (m % 400 === 0 && m % 100 === 0)) {
    return `Metai ${m} yra keliamieji`;
  } else {
    return `Metai ${m} nera keliamieji`;
  }
}

let k1 = keliamieji(2006);
console.log(k1);

console.log("---4---");
//4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžintiu skaičiaus kvadratą.

function SkaiciausKvadratas(a) {
  return `skaiciaus ${a} kvadratas yra ${a * a}`;
}
kv1 = SkaiciausKvadratas(10);
console.log(kv1);

console.log("---5---");
/*5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija
turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.*/

function skSuma(a) {
  if (a > 1) {
    let sudeta = 0;
    for (i = 1; i <= a; i++) {
      sudeta += i;
    }
    return `nuo 1 iki ${a} skaiciu suma lygi ${sudeta}`;
  } else {
    return "iveskite didesni skaiciu didesni uz vieneta";
  }
}
let s1 = skSuma(2);
console.log(s1);

let s2 = skSuma(-10);
console.log(s2);

console.log("---6---");
//6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos
//argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
/*
function liekanosSkaiciavimas(b) {
    let n=2;
       
        for (let n = 2; n <b; n++) {
            ilgis = n.length;
            if (b%n===0){

        } return ` Skaicius ${b} dalijasi is ${ilgis} sveiku skaiciu.`

    }
    
}
let b1 = liekanosSkaiciavimas(6);
console.log(b1);

console.log('DOVES');

skaicius = -20;
if (skaicius > 0) {
kiekSveiku = -1;
for(let i = 0; i < skaicius; i++) {
    if(skaicius % i === 0){
        kiekSveiku++;
    }
}
// console.log(kiekSveiku);
} else {
    kiekSveiku = 0;
    for(let i = skaicius; i <= 0; i++) {
        if(skaicius % i === 0 && i !== skaicius && i !== -1){
            kiekSveiku++
        }
    }
    console.log(kiekSveiku);
}

function dalmuo(num) {
    if (typeof num !== 'number' || !isFinite(num)) {
        return `ERROR: turi buti tik sveikieji skaiciai.`
    }

    let daliklis = 0;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            daliklis++;
        }
    } return `Argumentas turi ${daliklis} sveikuosius skaicius.`;
}

// Patikrinimas
s4 = 6;
console.log(dalmuo(s4));
s4 = 12;
console.log(dalmuo(s4));
*/

console.log("---7---");
//7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į
//ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį).
function tekstoIlgis(tekstas) {
  if (typeof tekstas === "string")
    return `Teksto "${tekstas}" ilgis yra ${tekstas.length}`;
}
p1 = tekstoIlgis("kodel taip");
console.log(p1);

console.log("---8---");

/*8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių
jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".


function telefonoNumeris([skaitukai]) {
    const skaitukai = [0,1,2,3,4,5,6,7,8,9]
    for (i = 0; i <10; i++) {
         a = console.log(Math.floor(Math.random()*3))
         b = console.log(Math.floor(Math.random()*3))
         c = console.log(Math.floor(Math.random()*4))
         
         
         ;}
    return `(${a}) ${b} - ${c}`
}
 let b1 = telefonoNumeris(2,4,5,6,7,8,9,0,1)
 console.log(b1);
*/

console.log("---9---");
//9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra
//ilgesnis.

function TekstuPalyginimas(a, b) {
  typeof a === "string";
  typeof b === "string";
  if (a.length > b.length) {
    return `Pirmasis tekstas yra ilgesnis`;
  }
  if (a.length < b.length) {
    return `Pirmasis tekstas yra trumpesnis`;
  }
}
let t1 = TekstuPalyginimas('ne', 'toks')
console.log(t1);


console.log("---10---");
//10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘
//raidžių.

