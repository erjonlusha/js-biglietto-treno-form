
var costoBiglietto = kmDaPercorrere * 0.21;
if (age >= 18 && age <= 65 ) {
    var bigliettoScontato = costoBiglietto;
} else if (age < 18) {
    var bigliettoScontato = costoBiglietto * 0.8;
} else if (age > 65) {
    var bigliettoScontato = costoBiglietto * 0.6;    
}
document.getElementById("costo").innerHTML = bigliettoScontato;
