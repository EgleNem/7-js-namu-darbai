/* 6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.
*/

const { lightyellow } = require("color-name");

let nn = 6;

if (nn % 3 === 0){
console.log('Trikampį sudėlioti galima.');
} else {
console.log('Trikampį sudėlioti negalima.');
}

/*
7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/

const n=1
if (n===1||n===3||n===5||n===7||n===9||n===11){
    console.log('d=31');
} else if(n===4||n===6||n===8||n===10||n===12) {
    console.log('d=30');
   }   else if (n===2);{
            console.log('d=28');
        }
    
console.log('----------------');

const menesiai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mm = 2;
console.log('Menesio dienu kiekis: ', menesiai[--mm]);

/*
8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/

const t = 4

if (t==1||t===3||t===5){
    console.log('Kambarį tvarkys jaunėlis');
} else if (t==2||t===4||t===6){
    console.log('Kambarį tvarkys vyresnėlis');
}

/*
9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
*/

const pirmaOlimpiada = 1896;
const m = 2005
const nKelintos = (m - pirmaOlimpiada)/4 + 1;
if (m % 4 ===0) {
    console.log('m =', kelnKelintos);
} else {
    console.log('Metai neolimpiniai');
   }

   /*
   10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.
   */

const v1 = 8;
const m1 = 29;
const m2 = 43;
const v = 9;
const mmm = 5;

const sum1 = v * 60 + mmm;
console.log(sum1);
const sum2 = v1 * 60 + m1;
console.log(sum2);


if (sum1-sum2>= m2) {
    console.log('Petras į pamoką nepavėluos.')
 } else  {
        console.log('Petras į pamoką pavėluos.');
    }

       
     