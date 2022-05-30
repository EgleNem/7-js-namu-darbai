function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
console.log("----------1 ----------");

// const a = 'tekstas';
// // pirma(a);
// //  function pirma(a){
// // console.log(a)}
// console.log(a);

function pirmaFun(BusTekstas) {
  console.log(`ar tikrai ${BusTekstas}`);
}

pirmaFun("siandien lijo");
pirmaFun("silta");

function antraFun(vardas) {
  console.log(`Labas, mano vardas ${vardas}`);
}

antraFun("Morta");

// 2.Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašyta funkcija;
console.log("----------2 ----------");
let AtsSk = 0;
function treciaFun(BusTekstas, AtsSk) {
  for (let i = 0; i < AtsSk; i++) {
    console.log(`Spausdinamas tekstas: ${BusTekstas}`);
  }
}

treciaFun("siandien lijo", 2);

// 4. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
console.log("----------4 ----------");

function sveikuSkaicuKiekis(skaicius) {
  let count = 0;
  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0 && i != skaicius) {
      count++;
    }
  }
  return count;
}

console.log(sveikuSkaicuKiekis(8));

// 5. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
console.log("----------5 ----------");
const mas100 = [];

for (let i = 0; i < 100; i++) {
  mas100.push(rand(33, 77));
}
for (let k = 2; k < mas100.length; k++) {
  mas100.sort((a, b) => {
    if (sveikuSkaicuKiekis(a) > sveikuSkaicuKiekis(b)) {
      return -1;
    }
    if (sveikuSkaicuKiekis(a) < sveikuSkaicuKiekis(b)) {
      return 1;
    }
  });
}

console.log(mas100);

// 6. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
console.log("----------6 ----------");
const mas101 = [];

//     for (let k=2; k<mas101.length; k++){
//     if(mas101[i]%2 != 0){
//          `je`
// }
// }

// 7. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis - masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
console.log("----------7 ----------");

// const mas3 = [rand(10,20), [rand(10,20)]];
// let mas3Ilgis = rand(10,20)
// for (let i = 0; i < mas3Ilgis ; i++) {
//     mas3.push(rand(0,10))
//     mas3[mas3.length-1 ] = rand(10,20)
// }
// console.log(mas3);

// darom nuo galo

const monsterSize = rand(10, 30);

const makeNiceArray = () => {
  const array = [];
  const size = rand(10, 20);
  for (let i = 0; i < size; i++) {
    array.push(rand(0, 10));
  }
  return array;
};

let monster = [];
for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) {
    const monsterPart = makeNiceArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
    }
    monster = monsterPart;
}
console.log(monster);
// 8. Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.


// 9. Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

console.log("----------9 ----------");
const prime = (a) => {
    let count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    return count;
};

const Cats = [rand(1, 33), rand(1, 33), rand(1, 33), rand(1, 33)];

const yesOrNo = (a, c = 3) => {
    for (let i = 0; i < c; i++) {
        if (prime(a.slice(-c)[i])) {
            return true;
        }
    }
    return false;
}

while(yesOrNo(Cats)) {
    Cats.push(rand(1, 33));
}

console.log(Cats);
//if prime true pridet yes 



// 10. Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.

console.log("----------10 ----------");



const sqArray = [];

for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
    }
    sqArray.push(row);
}

const primeSum = a => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach(v => { //masyvvas => eilute=> eilutes value 
        //         if(!prime(v)) { // vercia atvirksciai
        if (!prime(v)) {
            count++;
            sum += v;
        }
    }));
    return count ? sum / count : 0;
}

const findMin = a => {
    let min = a[0][0];
    let coord = [0, 0];
    a.forEach((r, ri) => r.forEach((v, ci) => {
        if (v < min) {
            min = v;
            coord = [ri, ci];
        }
    }));
    return coord;
}

console.table(sqArray);

console.log(findMin(sqArray));

let s = 1000;

while(primeSum(sqArray) < 70){
    if(--s === 0) {
        console.log('BR')
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;

}


console.table(sqArray);

console.log(primeSum(sqArray));


let data=7;
while(data>=0) {
  if(data<=5) {
    data--;
    continue;
  }
  console.log(data);
  data--;
}

let zodis = "Programavimas";
console.log(zodis.charAt(4))

let zodisp="MokymasisMokykloje";
console.log(zodisp.indexOf('M'))

var x=1; 
    var y=2;
    console.log("Atsakymas: "+x+y)

    var i = 0;
    var suma = 0;
    while (i < 20) {
        suma = suma + 1;
    }
   
    console.log(suma);

    const arr = [5, 4, 3, 2, 1];
    arr.forEach((x,y) => {
        console.log(y)
    });

    const arr2 = [5, 4, 3, 2, 1];

    arr2.forEach((x) => {
        var suma=suma + x;
    });
    
    console.log(suma);

    console.log('-----9----');