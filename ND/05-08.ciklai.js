// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}

// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
console.log('------3-----');
for (let i = 0; i < 5; i++) {
    const skaicius1 = 10*i;
    console.log(skaicius1);
}
console.log('------3.1-----');
for (let i = 0; i < 50; i+=10) {
  
    console.log(i);
    
  }
// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
console.log('------4-----');

for (let i = 0; i < 5; i++) {
    const skaicius2 = 49+i;
    console.log(skaicius2);
}

for (let i = 49; i <= 53; i++) {
    console.log(i);
  }
// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
console.log('------5-----');

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
console.log('------6-----');

for (let i = 0; i < 5; i++) {
    const skaicius4 = i+i;
    console.log(skaicius4);
    
}

// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
console.log('------7-----');
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()*11)); 
}
// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
console.log('------8-----');
let a =0;
while (a!=5) {
    a = (Math.floor(Math.random()*11));
    console.log(a)
    
}

// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log('------9-----');

let bsuma = 0;
while (bsuma < 100) {
    let b  = (Math.floor(Math.random()*11));
    bsuma += b;
    console.log(bsuma);
    
}

// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

console.log('------10-----');
let c =0;
let = ciklsk = 0;
while (c!=5 && c!=7) {
    c = (Math.floor(Math.random()*11));
    console.log(c);
    ciklsk++;
    
}
console.log('prasisuko', ciklsk, 'kartu');

// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log('------11-----');

let d= 0;
let dsuma=0;
let ciklsk1=0;
while (dsuma<20 || ciklsk1<11) {
    let d = (Math.floor(Math.random()*11));
     dsuma +=d;
    ciklsk1++;
}
console.log( dsuma, ciklsk1);


// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log('------12-----');
function rand(min,max) {
    min = Math.ceil(min);
    max =  Math.floor(max);
   return Math.floor(Math.random()* (max-min+1)+min);
}

let count = 0;
let ciklai1 = true;

do { 
    let o= rand(0,10);
    console.log(o);

    if(o % 2 != 0){
    count++;
    }

    if (count === 3){
        ciklai1 = false;
    }
}
    while (ciklai1)




// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log('------13-----');

function rand(min,max) {
    min = Math.ceil(min);
    max =  Math.floor(max);
   return Math.floor(Math.random()* (max-min+1)+min);
}

let i=0;
let y=0;
let ciklai = true;

do {
    let i= rand(0,10);
    let y= rand(0,10)
    console.log(i,y);

    if (i===y){
        ciklai =false;
    }
}
while (ciklai)


     
    

// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log('------14-----');

let r = 0;
let t = 0;
ciklas2 = true;
rSuma =0;
tSuma =0;

do {
    let r= rand(0,10);
    let t= rand(0,10)
    console.log(r,t);
    rSuma +=r;
    tSuma +=t;


    if (rSuma >100 && tSuma > 100){
        ciklas2 = false
    }
}
    while (ciklas2)
    console.log(rSuma, tSuma);



// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių (skaičiai atskiruose stulpeliuose)*/
console.log('------15-----');


