// Kintamųjų inicijavimas

const aukstas = 1;
console.log(aukstas);

const skaicius = 123;
console.log(skaicius);

const diena = 4;
console.log(diena);

const gimtadienis = 'rugsejis';
console.log(gimtadienis);

const prezidentas = 'obama';
console.log(prezidentas);

const gele = 'pelargonija';
console.log(gele);

const menesiai = [2, 3, 4, 7, 8,];
console.log(menesiai);

const pazymiai = [10, 4, 2];
console.log(pazymiai);

const graza = [20, 50, 10, 5, 15]
console.log(graza);

const dienos = ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestdienis'];
console.log('Dienos:', dienos);

const saldainis = ['baunty', 'snikers'];
console.log('Saldainis:', saldainis);

const duona = ['rugine', 'juoda', 'balta', 'toste', 'bagete', 'bandele', 'morku']
console.log(duona);

// VEIKSMAI SU KINTAMAISIAIS
const suma = aukstas + skaicius  + diena;
console.log(suma);

const visi = ['gimtadienis ' + 'prezidentas ' + 'gele'];
console.log(visi);

// 1-2+3-4+5
const skaiciavimas = (2-3+4-7+8)
console.log(skaiciavimas)

const kartu = [gimtadienis  + ' ' + prezidentas + ' ' + gele ];
console.log(kartu);

const reversedDienos = dienos.reverse();
console.log(reversedDienos);

const reverseSaldainis = saldainis.reverse();
console.log(reverseSaldainis);

const reverseDuona = duona.reverse()
console.log(reverseDuona);

// KINTAMUJU PALYGINIMAS
//1.a.

const a = 4;
const b = 6;
if (a>b) {
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita karta.');
}
//1.b.
if (a<b) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//1.c.
if (a==b) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//1.d.
if (a!=b) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//1.e.
if (a>=b) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//1.f.
if (a<=b) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');

//2. Išvesti teksto tipo kintamųjų ilgius
const dienuSkaicius = dienos.length;
console.log(dienuSkaicius);

const saldainiuKiekis = saldainis.length;
console.log(saldainiuKiekis);

const duonosRusys = duona.length;
console.log(duonosRusys);

//3.Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// didesnis
const d = dienuSkaicius;
const e = saldainiuKiekis;

if (d>e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');

//kuris mažesnis
if (d<e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//ar jie lygūs
if (d==e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//ar jie nelygūs
if (d!=e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//kuris didesnis arba lygus
if (d>=e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//kuris mažesnis arba lygus
if (d<=e) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');

//4. Išvesti sąrašo tipo kintamųjų ilgius


const menesiuSkaicius = menesiai.length;
console.log(menesiuSkaicius);

const kovoPazymiai = pazymiai.length
console.log(kovoPazymiai);

const h = menesiuSkaicius;
const i = kovoPazymiai;

//kuris didesnis
if (h>i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');

//kuris mažesnis
if (h<i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//ar jie lygūs
if (h==i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//ar jie nelygūs
if (h!=i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//kuris didesnis arba lygus
if (h>=i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');
//kuris mažesnis arba lygus
if (h<=i) {
    console.log('Pomidoras');
    
} else
console.log('Bandykite kita karta');

/*1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.*/

const n = 20;
if (n<0) {  
    console.log('Blogas');
}
if (n>0) {
    console.log('Geras');
}

/*2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2- geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.*/

let s = 2;

if (s===2) {
    console.log('Palaukite');
    
} else if (s===1) {
    console.log('Eikite');
} else 
    console.log('Sustokite');


//3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.

const de = 3;
const ke = 18;
const ne = 5;

if (de*ne>= ke) {console.log('Knygos telpa i dezes');
}

else {console.log('Knygos netelpa i dezes');
}

//4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.

let aa = 2;
let bb = 10;

if (aa>bb) { 
    console.log(--aa, ++bb);
    
} else if (bb>aa) {
    console.log(--bb, ++aa);
}



//5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. 
//Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.
// c- pradine suma
// p - ledu kaina
// k - porcijos
// m - graza
const cc = 50;
const pp= 20; 
const kk = Math.floor (cc/pp)
console.log(kk);
const m = cc % pp;
console.log(m);

console.log(`Saulius nusipirks ${kk} porcijas, liks ${m} centu`);

