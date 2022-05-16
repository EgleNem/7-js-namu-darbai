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

function dalinasiIsSveikujuSkaiciu(a) {
  if (typeof a !== "number" || !isFinite(a)) {
    return "Error, funckija priima tik sveikuosius skaicius";
  }
  let dalikliai = 0;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      dalikliai++;
    } else {
      continue;
    }
  }
  return `Skaiciaus ${a} sveikuju dalikliu yra ${dalikliai}`;
}

console.log(dalinasiIsSveikujuSkaiciu(30));
console.log(dalinasiIsSveikujuSkaiciu(10));
console.log(dalinasiIsSveikujuSkaiciu('stogas'));
console.log(dalinasiIsSveikujuSkaiciu(5.4));
console.log(dalinasiIsSveikujuSkaiciu(-10));


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

//8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių
//jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".

function telefonoNumeris(a) {
  if (a.length !== 10) {
    return "Error: funkcijai turi buti pateiktas 10 skaiciu masyvas";}
    let telNr = "";
  for (let i = 0; i < a.length; i++) {
    const number = a[i];
    
    telNr += number;
    
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]} - ${a[6]}${a[7]}${a[8]}${a[9]}`;
}
console.log(telefonoNumeris([1, 2, 3, 4, 5, 1, 2, 8,8]));
console.log(telefonoNumeris([1, 2, 3, 4, 5, 1, 2, 8,0,8]));

console.log('------------------');

// function telefonoNumeris(arr) {
//   if (typeof arr !== "object") {
//     return "Error: funkcijai turi buti pateiktas masyvas";
//   }
//   if (arr.length !== 10) {
//     return "Error: funkcijai turi buti pateiktas 10 skaiciu masyvas";
//   }
//   let telNr = "";
//   for (let i = 0; i < arr.length; i++) {
//     const number = arr[i];
//     if (typeof number !== "number") {
//       return "Error: Masyva turi sudaryt desimt skaiciu.";
//     }
//     if (number >= 10 || number < 0) {
//       return "Error: Visu masyve nurodytu skaiciu reiksmes turi buti nuo 0 iki 9.";
//     }
//     telNr += number;
//   }
//   return `(${telNr[0] + telNr[1] + telNr[2]}) ${
//     telNr[4] + telNr[5] + telNr[6]
//   }-${telNr[7] + telNr[8] + telNr[9]}`;
// }

// console.log(telefonoNumeris([10, 20, 30, 40, 50, 1, 2, 3, 4]));
// console.log("---9---"
// //9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra
// //ilgesnis.

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
let t1 = TekstuPalyginimas("ne", "toks");
console.log(t1);

console.log("---10---");
//10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘
//raidžių.
function aRaidesSkaiciavimas(tekstas) {
  let atskirtiRaides = tekstas.split("");
  let kiekR = 0;
  for (let i = 0; i < tekstas.length; i++) {
    if (atskirtiRaides[i] === "a") {
      kiekR++;
    }
  }
  return `${kiekR}`;
}
p1 = aRaidesSkaiciavimas("ci yra asaka");
console.log(p1);

console.log("---10.1---");

const tekstas = 'daugdaugzodeliuciairdabar';
let kiekis=0;
for (let i = 0; i < tekstas.length; i++) {
  if (tekstas [i]==='a') {
    kiekis++
  }
  
}
console.log('Tekste a raidziu yra:' , kiekis);

