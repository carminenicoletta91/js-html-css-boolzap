
// creare funzione per scrivere messaggio e mandarlo nella chat
$( document ).ready(function() {

  var data = new Date () ;
  var ora =data.getHours();
  var minuti = data.getMinutes();
  var scrivi = ora + ":"+minuti;
  console.log(scrivi);
  document.getElementById('orario').innerHTML = scrivi;
  





  //  document.getElementById('orario').innerHTML = scrivi;
  // console.log(ora + ":" + minuti);
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

      // funzione al click per entrare nella chat relativa al contatto cliccato
      $(".chat-name > div").click(
        function(){
          var attrref = $(this).attr('refchat');
          console.log(attrref);
          $(".chat > div").removeClass('active');
          $(".destra-fixed-sx > div").removeClass('active');
          // visualizzo il nome del contatto cliccato
          $('.destra-fixed-sx > div[refchat="' + attrref +'"]').addClass("active");
          // visualizzo la chat del contatto
          $('.chat > div[refchat="' + attrref +'"]').addClass("active");
        }
      );
      // funzione per far apparire icona del send quando premi un tasto su input
       $(".send-message input#msginput").keypress(
         function(){
           $(".send-message a i.message").show();
           $(".send-message a i.audio-record").hide();


         }
       );






       $(".send-message a i.send ").click(
         // funzione per inserire il messaggio nella chat
         function(){

           $(".send-message a i.message").hide();
           $(".send-message a i.audio-record").show();
           var inputval = $("#msginput").val();
           console.log(inputval);
           // inserisco il mio testo nell'apposita sezione contenente classe utente-verde
           $(".chat >div.active").append(
             "<div class='utente-verde'>" + "<p >"+ inputval +"("+ scrivi +")" +"</p>"+"</div>"
             // +"<i class='fas fa-caret-down'id='off-verde'>"+"</i>" +"</div>"
             // + "<div class='menu-a-tendina-verde'>" + "<p>"+ "elimina" +"</p>" + ""
           );
           // mostro il p relativo al sta scrivendo
            $("p.scritta").show();
            // nascono il p relativo all'utlimo messaggio
            $("p.accesso").hide();
           // pulisco l'input quando invio
           $("#msginput").val("");
           //genero una risposta ad ogni invio
           function testobianco(){
          $(".chat >div.active").append(
             "<div class='utente-bianco'>" + "<p>"+ "ok" +"("+ scrivi +")"+"</p>"+"</div>"
             // +"<i class='fas fa-caret-down' id='off-bianco'>"+"</i>" +"</div>"
             // + "<div class='menu-a-tendina-bianco'>" + "<p>"+ "elimina" +"</p>" + "</div>"
           );
           $("p.scritta").hide();
           $("p.accesso").show();

           console.log(testobianco);
         }
         setTimeout(testobianco,1000);

       });

});
