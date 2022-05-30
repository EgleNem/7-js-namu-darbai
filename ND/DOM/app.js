const Allh2 = document.querySelectorAll('h2')
console.log(Allh2);

const h2withoutFirst = document.querySelectorAll('h2:not([class*="first"]')
console.log(h2withoutFirst);
//Visus h2 tagus nuspalvinti šviesiai mėlynai

Allh2.forEach(h2 => { 
    h2.style.color = 'lightblue';

});

//Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
const divSuPrices = document.querySelectorAll('div[class~="prices"]')
console.log(divSuPrices);

divSuPrices.forEach(div =>{
    div.innerHTML = '<i class="price-tag"></i>';

})

//Pabraukti visus tagus su klase new;
const AllNew  = document.querySelectorAll('[class~="new"]')
console.log(AllNew);

AllNew.forEach(AllNew =>{
    AllNew.style = 'text-decoration: underline';

})
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const animals  = document.querySelectorAll('[class~="animals"].ul')
console.log(animals);

// const AllZirafos  = document.querySelectorAll('[class~="new"]')
// console.log(AllNew);

