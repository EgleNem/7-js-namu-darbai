/*Class Dog {}
žino vardą
žino rūšies pavadinimą
žino (kailio) spalvą
žino akių spalvą
žino kojų skaičių
žino garsą kurį gali išskleisti
žino mėgstamą maistą
žino ar šiuo metu sėdi (default: ne)
gali išskleisti garsą, pvz.: “Rex: au au!!”
gali prisistatyti, pvz.: “Hi, I am a dog and my name is Rex. My color is black. My eyes are blue. I have 4 legs. Right now I am standing.”
gali atsisėsti ir apie tai pranešti, pvz.: “Rex: I am sitting.”
gali atsistoti ir apie tai pranešti, pvz.: “Rex: I am standing.”
*/

class Dog {
    constructor(name, breed,color, eyes, legs, sound, favFood,){
        this.name =name;
        this.breed=breed;
        this.color=color;
        this.eyes=eyes;
        this.legs = legs;
        this.sound =sound;
        this.favFood=favFood;
        this.sitting=false ;
        //this.komanda=komanda;
    }

     sitting() {
      this.sitting = true;
         console.log(`${this.name} sedi`);
     }
     standing(){
     this.sitting = false;
         console.log(`${this.name} stovi`);
    }}
 //   }
    //komandaStand(){
   //     this.komanda = false;
    //    console.log(`${this.name}: I am standing`);
   // }

const dog1 = new Dog ('Fyfa', 'mixed', 'brown', 'black', '4', 'brrrr', 'chicken', true, );
const dog2 = new Dog ('Kobis', 'poodle', 'white', 'brown', '3', 'woof', 'tuna', 'false');

console.log(dog1);
console.log(dog2);
console.log(dog1.sitting);


