console.log("---1---");
//Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
for (let i = 0; i < 5; i++) {
  console.log("Labas");
}

console.log("---2---");
//2 Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje
//eilutėje).

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("---3---");
//3 Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius
//vienoje eilutėje).


for (let i = 0; i < 50; i+=10) {
  
  console.log(i);
  
}

console.log("---4---");
//4 Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius
//vienoje eilutėje).

for (let i = 49; i <= 53; i++) {
  console.log(i);
}


console.log("---5---");
/*5  Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).*/

  console.log('----45--4-5----');
  for (i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()*10));
}
  
console.log("---6---");
//Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš
//3.
for (let i = 1; i < 20; i++) {
  if (i % 3 !== 0) console.log(i);
}
console.log("---7---");
//7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
let ivestasSkaicius = 4;
let daugiklis = 0;
for (let i = 0; i < 10; i++) {
    let rezultatas = ivestasSkaicius * daugiklis;
    console.log(rezultatas);}

    console.log("---8---");
