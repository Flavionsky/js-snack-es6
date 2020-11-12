// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

const people = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let firstNumb = prompt('inserisci un numero da 0 a '+(people.length-1));

let secondNumb = prompt('inserisci un numero da 0 a '+(people.length-1)+' diverso da quello inserito prima');

const twoPeople = people.filter((el, i) => {

if(i == secondNumb || i == firstNumb){
  return el;
}
});
console.log(twoPeople);
});
