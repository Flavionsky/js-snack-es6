
const triangoloRettangolo =
  {
    'base' : 15,
    'altezza' : 15
  };

let area = ((triangoloRettangolo.base * triangoloRettangolo.altezza) / 2);

console.log(`l'area del triangolo è : ${area}`);

let ipotenusa = (((triangoloRettangolo.base **2)+(triangoloRettangolo.altezza**2))**0.5);

console.log(`l'ipotenusa è circa: ${Math.round(ipotenusa)}`);

let perimetro = ipotenusa + triangoloRettangolo.base + triangoloRettangolo.altezza;

console.log(`il perimetro del triangolo è circa: ${Math.round(perimetro)}`);
