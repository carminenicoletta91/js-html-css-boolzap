// creare funzione per scrivere messaggio e mandarlo nella chat
$( document ).ready(function() {


    // richiamo una funzione quando premo tasti sul mio input
    $(".search .search-input input").keyup(

    // funzione di ricerca
    function (){
      // nascondo tutte le mie sezioni contenenti le chat
      $(".chat-name > div").hide();
      // scorro nei nomi delle chat
      $(".chat-name > div .message-name h2" ).each(function( index) {
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
          $(".chat-name > div").each(function(index)

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

      // visualizzo inizialmente la prima chat
      var schermo = $(".chat .elemento.uno");
      schermo.show();
      // nascondo tutti i contatti nel nav bar in alto a destra
      var eliminachat = $(".destra-fixed-sx > div");
      eliminachat.hide();
      // mostro solo il primo contatto nella nav bar in alto
      var schermoassociato = $(".destra-fixed-sx .uno");
      schermoassociato.show();

      // funzione quando clicco su un contatto nel menu a sinistra
      $(".chat-name > div").click(function(){

        var temp = $(this);
        console.log(temp);
        // se il mio oggetto cliccato ha
        if(temp.hasClass("uno")){//classe associata uno
          $(".chat .elemento").hide();
          $(".chat .elemento.uno").show();
          schermo = $(".chat .elemento.uno");
          schermoassociato = $(".destra-fixed-sx .uno");
          eliminachat.hide();
          schermoassociato.show();
       }else if(temp.hasClass("due")){//classe associata due
         $(".chat .elemento").hide();
         $(".chat .elemento.due").show();
         schermo = $(".chat .elemento.due");
         schermoassociato = $(".destra-fixed-sx .due");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("tre")){//classe associata tre
         $(".chat .elemento").hide();
         $(".chat .elemento.tre").show();
         schermo = $(".chat .elemento.tre");
         schermoassociato = $(".destra-fixed-sx .tre");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("quattro")){//classe associata quattro
         $(".chat .elemento").hide();
         $(".chat .elemento.quattro").show();
         schermo = $(".chat .elemento.quattro");
         schermoassociato = $(".destra-fixed-sx .quattro");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("cinque")){//classe associata cinque
         $(".chat .elemento").hide();
         $(".chat .elemento.cinque").show();
         schermo = $(".chat .elemento.cinque");
         schermoassociato = $(".destra-fixed-sx .cinque");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("sei")){//classe associata sei
         $(".chat .elemento").hide();
         $(".chat .elemento.sei").show();
         schermo = $(".chat .elemento.sei");
         schermoassociato = $(".destra-fixed-sx .sei");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("sette")){//classe associata sette
         $(".chat .elemento").hide();
         $(".chat .elemento.sette").show();
         schermo = $(".chat .elemento.sette");
         schermoassociato = $(".destra-fixed-sx .sette");
         eliminachat.hide();
         schermoassociato.show();
       }else if(temp.hasClass("otto")){//classe associata otto
         $(".chat .elemento").hide();
         $(".chat .elemento.otto").show();
         schermo = $(".chat .elemento.otto");
         schermoassociato = $(".destra-fixed-sx .otto");
         eliminachat.hide();
         schermoassociato.show();
       }



       });






       $(".send-message a i.send ").click(
         // funzione per inserire il messaggio nella chat
         function(){
           var inputval = $("#msginput").val();
           console.log(inputval);
           // inserisco il mio testo nell'apposita sezione contenente classe utente-verde
           schermo.append(
             "<div class='utente-verde'>" + "<p >"+ inputval +"</p>"
             // +"<i class='fas fa-caret-down'id='off-verde'>"+"</i>" +"</div>"
             // + "<div class='menu-a-tendina-verde'>" + "<p>"+ "elimina" +"</p>" + "</div>"
           );
           // pulisco l'input quando invio
           $("#msginput").val("");
           //genero una risposta ad ogni invio
           function testobianco(){
           schermo.append(
             "<div class='utente-bianco'>" + "<p>"+ "ok" +"</p>"
             // +"<i class='fas fa-caret-down' id='off-bianco'>"+"</i>" +"</div>"
             // + "<div class='menu-a-tendina-bianco'>" + "<p>"+ "elimina" +"</p>" + "</div>"
           );
           console.log(testobianco);
         }
         setTimeout(testobianco,1000);

       });
       // $('.chat').on('mouseenter', '.utente-verde >p', function()
       // {
       //   $("i#off-verde").toggle();
       // })
       // $('.chat').on('mouseenter', '.utente-bianco >p', function()
       // {
       //   $("i#off-bianco").toggle();
       // })
       // $('.chat').on('click', 'i#off-bianco', function()
       // {
       //   $(".menu-a-tendina-bianco").toggle();
       // })
       // $('.chat').on('click', 'i#off-verde', function()
       // {
       //   $(".menu-a-tendina-verde").toggle();
       // })
});
