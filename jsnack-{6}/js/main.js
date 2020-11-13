// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

  const arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];

  const newPropArr = arrayObj.map((el) => {

    const newel = {...el, position: charRandom()};
    return newel;
    
  });
  console.log(newPropArr);
  console.log(arrayObj);
});
