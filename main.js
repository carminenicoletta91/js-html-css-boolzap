// creare funzione per scrivere messaggio e mandarlo nella chat
$( document ).ready(function() {

  $(".send-message a i.send ").click(
    // funzione per inserire il messaggio nella chat
    function(){
      var inputval = $("#msginput").val();
      console.log(inputval);
      // inserisco il mio testo nell'apposita sezione contenente classe utente-verde
      $(".chat").append(
        "<section class='utente-verde'>" + "<p>"+ inputval +"</p>" + "</section>"
      );
      // pulisco l'input quando invio
      $("#msginput").val("");
      //genero una risposta ad ogni invio
      function testobianco(){
      $(".chat").append(
        "<section class='utente-bianco'>" + "<p>"+ "ok" +"</p>" + "</section>"
      );
      console.log(testobianco);
    }
    setTimeout(testobianco,1000);

  });
    // richiamo una funzione quando premo tasti sul mio input
    $(".search .search-input input").keyup(

    // funzione di ricerca
    function search(){
      // nascondo tutte le mie sezioni contenenti le chat
      $(".chat-name section").hide();
      // scorro nei nomi delle chat
      $(".chat-name section .message-name h2" ).each(function( index) {
        var trova;
        // creo oggetto che contiene il valore che digito in input
        var inputval = $(".search .search-input input").val();
        console.log(inputval);
        // creo oggetto che contiene il nome della chat
        var nametemp = $(this).text();
        console.log(nametemp);
        // assegno l'indice dell'oggetto alla variabile trova
        trova = index;
        // se questo oggetto contiene i valori del mio input
        if( nametemp.includes(inputval)){
          console.log("sei qui:" + trova);
          // scorro nelle varie sezioni
          $(".chat-name section").each(function(index)

          {
            // se l'indice della mia sezione è uguale a quello del mio nome chat
            if(index === trova){
              console.log(this);
              // mostro quella sezione
              $(this).show();
            }

          });//chiusura each per le sezioni
        }

      });//chiusura each lettura nome chat

});//chiusura funzione search al keypress


});
