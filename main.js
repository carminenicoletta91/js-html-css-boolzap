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
      )
      // pulisco l'input quando invio
      $("#msginput").val("");
      //genero una risposta ad ogni invio
      function testobianco(){
      $(".chat").append(
        "<section class='utente-bianco'>" + "<p>"+ "ok" +"</p>" + "</section>"
      )
      console.log(testobianco);
    }
    setTimeout(testobianco,1000)

})

});
