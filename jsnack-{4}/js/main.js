// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

  //JSnack 4A creo un array di squadre

  const footballSquads = [

    {
      'nome' : 'Roma',
      'punti' : 0,
      'falli' : 0

    },
    {
      'nome' : 'Juventus',
      'punti' : 0,
      'falli' : 0

    },
    {
      'nome' : 'Benevento',
      'punti' : 0,
      'falli' : 0

    }
  ];

  //JSnack 4B genero punti e falli random
for(let key in footballSquads){

  footballSquads[key].punti = getRandom(0, 5);

  footballSquads[key].falli = getRandom(0, 5);
}

  console.log(footballSquads);

});
