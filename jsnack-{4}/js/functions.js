//definisco la mia funzione random che prenderà un numero casuale
function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
//ritorna in console l'ogetto in questione
function printObject(o) {
  let out = '';
  for (let p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  return out;
}
