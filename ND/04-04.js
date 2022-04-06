// Ciklo for panaudojimas
//1.

function sumaIntervale(nuo, iki) {
  let suma = 0;
  for (let i = nuo; i <= iki; i++) {
    suma += +i;
  }
  return suma;
}
console.log(sumaIntervale(0, 0));
console.log(sumaIntervale(0, 4));
console.log(sumaIntervale(0, 100));
console.log(sumaIntervale(574, 815));
console.log(sumaIntervale(-50, 50));
console.log(sumaIntervale(-70, 30));

//2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”

function atvirksciai(zodis) {
  let reverse = "";
  for (let i = 0; i < zodis.length; i++) {
    reverse = zodis[i] + reverse;
  }
  return reverse;
}
console.log(atvirksciai("abcdef"));
console.log(atvirksciai("labas"));
console.log(atvirksciai("sula"));

function atvirksciai2(zodis) {
  let reverse = "";
  for (let i1 = 0; i1 < array.length; i1++) {
    reverse = zodis[i1] + reverse;
  }
  return reverse;
}
console.log(atvirksciai("sula"));

//3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

function liekana(nuo, iki, daliklis) {
  let count = 0;

  for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
      count++;
    }
  }
  return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`;
}
//a
console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));

//b
console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(8, 31, 7));

//c
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 5));
console.log(liekana(-18, 18, 7));

//Funkcijos
//1
function tusciaFunkcija() {
  return false;
}

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(23434));
console.log(tusciaFunkcija("ana"));
console.log(tusciaFunkcija(true));

//2

function daugyba(sk1, sk2) {
  const san = sk1 * sk2;
  return san;
}

console.log(daugyba(3, 5));
console.log(daugyba(4, 5));
console.log(daugyba(3, 4));

//3
console.log('----------3-----');
    
function skaitmenuKiekisSkaiciuje(v) {
  kiekis = v.length

  if (typeof v !== 'number') {
    return "Pateikta netinkamo tipo reikšmė";
  } 
  if (isNaN(v)) {
      return "Pateikta netinkamo tipo reikšmė";
      
  }
  if (typeof v === 'number'){
      return kiekis
  }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );




//MENOTRIAUS FOR CIKLAS MINi
//1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

