//8 Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n
//colius centimetrais.
let n=5;
for (let i = 1; i < n; i++) {
    //i = centimetrai
    console.log(i*2.54)
}

// 9.Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite
//kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas,indeli

console.log('-----9-----');
let ind=100;
let p = 0.02
for (let m = 1; m < n; m++) {
    
    ind= ind + ind*p;
    
    console.log(`${m} metais palukanos bus ${p}, indelis bus  ${ind}`);
    
}
console.log('-----10-----');
/* Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra
keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros keliamuosius metus.
*/

/*
for (m = 0; m <= 2022; m++) {
    ( (m % 4 === 0) || ( m % 400 === 0) && (m % 100 === 0) {
    console.log(m);
    }
  
} 
*/
let indelis = 100;
let palukanos = 0;
let metai = 1;
for (i = 1; i <= 20; i++) {
    palukanos += 0.02 * indelis;
    console.log(`Metai: ${metai++} / Palukanos: ${palukanos}e / Indelis: ${indelis + palukanos}e`);
}