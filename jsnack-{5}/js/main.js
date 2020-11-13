// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

const people = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let firstNumb = prompt('inserisci un numero da 0 a '+(people.length-1));

let secondNumb = prompt('inserisci un numero tra ' +firstNumb+' a '+(people.length-1));

const limitedPeople = people.filter((el, i) => i <= secondNumb && i >= firstNumb);
console.log(limitedPeople);
});
