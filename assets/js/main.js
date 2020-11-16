var btnGenera = document.getElementById("btn-genera");
btnGenera.addEventListener('click', function () {
     var fullName = document.getElementById('full-name');
     var kmDaPercorrere = document.getElementById('km');
     var age = document.getElementById('fascia');
    //seleziona il valore
    var fullNameValue = fullName.value;
    var kmDaPercorrereValue = kmDaPercorrere.value;
    var ageValue = age.value;
    // console.log("fullName");
    console.log("fullNameValue");

    // var costoBiglietto = kmDaPercorrere * 0.21;
    // if (age  ) {
    //     var bigliettoScontato = costoBiglietto;
    // } else if (age < 18) {
    //     var bigliettoScontato = costoBiglietto * 0.8;
    // } else if (age > 65) {
    //     var bigliettoScontato = costoBiglietto * 0.6;    
    // }
    // document.getElementById("ticket_price").innerHTML = bigliettoScontato;
} );
    


//var btnAnnulla = document.getElementById("btn-annulla");
