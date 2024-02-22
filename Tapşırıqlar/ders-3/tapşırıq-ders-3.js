var rod=prompt("Neçə rod yol gedəcəksiniz?: ");

const ROD_TO_METER=5.0292;
const FEER_TO_METER=0.3048;

var metr=rod*ROD_TO_METER;
var feet=metr/FEER_TO_METER;
var saat=metr/3000;


console.log(`Siz ${metr}-metir yol getməlisiz.`);
console.log(`Siz ${feet}-feet yol getməlisiz.`);
console.log(`Siz ${saat}-Saat yol gedtməlisiz.`);

