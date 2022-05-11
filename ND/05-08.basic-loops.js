// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5...25;
// A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam.Pasinaudokite console.log atspausdinkite sumos kintamąjį;
// B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
// C. Sudėkiteskaičiusįstringotipokintamąją padarant tarpskaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// D. Sudėkite skaičius įstringo tipokintamąją  padarant tarpskaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;


console.log('----1----');
let b=(Math.floor(Math.random()*(21)+5))
let g=(Math.floor(Math.random()*(21)+5))
let m=(Math.floor(Math.random()*(21)+5))
console.log(b,g,m);
//A
 const suma = b+g+m;
 console.log(suma);
 //B
 const stringas = ''+ b + g + m;
console.log(stringas);
//C
const tarpai = b +' '+ g + ' ' + m;
console.log(tarpai);
//D
const naujas = b +' '+ g + ' ' + m + ' ' +(b+g+m);
console.log(naujas);



// 2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5...10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
console.log('----2----');

function rand(min,max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}
let n =rand(5,10)
console.log(n);

// 3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
console.log('----3----');
let labas = 'labas'
for (let i = 0; i < 5; i++) {
    console.log(labas);
}

// 4. Pasinaudojus ciklu ir ir console.log atspausdinkite kintamąjį iš 2 uždavinio 7 kartus;
console.log('----4----');
for (let i = 0; i < 7; i++) {
    console.log(rand(5,10));
    
}
// 5. Pasinaudojus ciklu ir ir console.log atspausdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
console.log('----5---');

for (let i = 0; i < n; i++) {
    console.log(n);
 
    
}

// 6. Pasinaudojus ciklu ir ir console.log atspausdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
console.log('----6---');

for (let i = 0; i < n; i++) {
    if (n>7) {
        console.log(n);
        
    }
    else{
        break;
    }

}

console.log('----7---');
// 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10...20. Ciklą kartokite 5 kartus;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam,kurį sukūrėte už ciklo ribų ir jį atspausdinkite;
// B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą,ją priskirdami kintamajam,
// kurį sukūrėte už ciklo ribų. Rezultatą atspausdinkite pasinaudodami console.log už ciklo ribų;
// C. Skaičius,generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarps kaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
// D. Skaičius,generuojamus ciklo viduje dėkite  į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

let p;
let psuma =0;
let string = '';
let stringIrSuma = '';

for (let i = 0; i < 5; i++) {
    p = rand(10,20);
    console.log(p);
    psuma += p ;
    string +=  p + ' ' ;
    stringIrSuma = string + psuma
 
}
console.log(psuma);
console.log(string);
console.log(stringIrSuma);

// 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10...25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam,kurį sukūrėte už ciklo ribų ir jį atspausdinkite;
// B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspausdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspausdinkite pasinaudodami console.log už ciklo ribų;
//  D. Sumą skaičiuokite kaip C dalyje,bet papildomai susikurkite kintamąjį,kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspausdinkite pasinaudodami console.log už ciklo ribų;
// E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspausdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
// F. Ciklą iš dalies B kartokite tol, kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspausdinkite pabaigoje.
console.log('----8---');

// let iteracijuSk = 0;
// let h =0;
// hSuma = 0;
// atmestuReiksmiuKiekis = 0;
// lyginiuSk =0;
// nelyginiusSk = 0;

// do {
//     h = rand(10, 25);
//     console.log(h);
//     iteracijuSk ++;
    
//     if (iteracijuSk>20){
//         iteracijuSk ++;
//         console.log(iteracijusSk);
//     }
    
//     if (h < 18){
//         hSuma += h;
       
//     }
//     if (h > 18){
//         atmestuReiksmiuKiekis ++;
       
//     }
//     if (h %2 === 0){
//           lyginiuSk ++;
        
//     } else {
//                  nelyginiusSk++;
    
//         }
       
//     }

//     while (h>=12 )
    
//     console.log(` iteraciju skaicius : ${iteracijuSk}`);
//     console.log(` reiksmiu mazesniu uz 18 suma ${hSuma}`);
//     console.log(` atmestu reksmiu kiekis ${atmestuReiksmiuKiekis}`);
//     console.log(`lyginiai:${lyginiuSk}, nelyginiai:${nelyginiusSk} `);
    


// // 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// // A. Ciklovidujepaleiskitedarvienącikląkurįkartokitetiekkartų,koksskaičiusbuvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// // B. Padarykitetaip,kadišorinisciklaspasibaigtųkai5yrasugeneruojamasnepirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
// // C. PadarykiteanalogiškaikaipBdalyje,bettikkai5yrasugeneruojami3kartusiš eilės;
// // 10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: laimėtojo vardas”. Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.






// kiek kartu apibegs aplink nama kad pagautu 20 ir daugiau ziurkiu
// per karta gali pagauti nuo 3 iki 5 ziurkiu

console.log('----testas---');


VienoRatopagautuZiurkiuSk = 0;
ziurkiuSuma =0;
ratuSuma=0;

do {
    VienoRatopagautuZiurkiuSk = rand(3,5);
    console.log(VienoRatopagautuZiurkiuSk);
    ratuSuma ++;
    ziurkiuSuma  += VienoRatopagautuZiurkiuSk;
    
} while (ziurkiuSuma < 20)

console.log(`${ziurkiuSuma} ziurkes pagavo per ${ratuSuma} ratus`);



