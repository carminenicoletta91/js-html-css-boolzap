
// creare funzione per scrivere messaggio e mandarlo nella chat
$( document ).ready(function() {
    // funzione per generare orario invio messaggio
    function orario(){
      var data = new Date () ;
      var ora =data.getHours();
      var minuti = data.getMinutes();
      var scrivi = ora + ":"+minuti;
      return scrivi;
    }





      // funzione per rimuove messaggi
      function elimina(){
       $(".chat > div.active  ").on('click','.utente-verde .menu-a-tendina,.utente-bianco .menu-a-tendina-bianco ',function(){
        $(this).siblings().remove();
        $(this).remove();

      });
    }
     elimina();
    // richiamo una funzione quando premo tasti sul mio input
    $(".search .search-input input").keyup(
      function(){
        search();
      }
    );

    // funzione di ricerca
    function search(){
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
    }
      // richiamo funzione eliminamex per poter eliminare i mex al refresh della pagina
      // senza il click sulla selezione dei contatti

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
          elimina();

        }

      );

      // funzione per far apparire icona del send quando premi un tasto su input
       $(".send-message input#msginput").keypress(
         function(){
           $(".send-message a i.message").show();
           $(".send-message a i.audio-record").hide();

           // se premo il tasto invio
           if(event.which == 13){
             console.log(event.which);
             invio();
             $(".send-message a i.message").hide();
             $(".send-message a i.audio-record").show();
           }
         }
       );





       // quando clicco su icona invio
       $(".send-message a i.send ").click(
         function (){
           invio();
           $(".send-message a i.message").hide();
           $(".send-message a i.audio-record").show();
       })

         // funzione per inserire il messaggio nella chat
         function invio(){

           var inputval = $("#msginput").val();
           // se la mia stringa è vuota
           if(inputval == ""){

             return alert("stringa vuota");
             // se utente inserisce uno spazio e preme invio
           }else if(inputval === " "){
             return alert("inviare uno spazio non ha senso!!!")
           }
           console.log(inputval);
           // inserisco il mio testo nell'apposita sezione contenente classe utente-verde


           $(".chat >div.active").append(
             "<div class='utente-verde'>"+"<div class='menu-a-tendina'>"+"<a href='#'><p class='flex-in-menu'>"+"Elimina"+"</p></a>"
             +"</div>" +"<div class='putente'>" +"<p >"+ inputval   +"</p>"
             +"<i class='fas fa-caret-down icona-menu'>"+"</i>"

             +"<div class='putenteinput'>"+"<p >"+ orario()+"</p>"+"</div>" +"</div>"+"</div>"


           );
           $(".chat >div.active .utente-verde .icona-menu").click(
             function(){
               $(".menu-a-tendina").toggle();
              
             }
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
               "<div class='utente-bianco'>"+"<div class='menu-a-tendina-bianco'>"+"<a href='#'><p class='flex-in-menu'>"+"Elimina"+"</p></a>"
                +"</div>"+"<div class='putente'>" +"<p >"+ "ok" +"</p>" +"<i class='fas fa-caret-down icona-menu-bianco'>"+"</i>"
               +"<div class='putenteinputbianco'>"+"<p >"+ orario()+"</p>"+"</div>" +"</div>"+"</div>"
             );
             $("p.scritta").hide();
             $("p.accesso").show();
             console.log(testobianco);
           }
           setTimeout(testobianco,1000);
         }

         $(".chat >div.active .utente-verde .icona-menu ").click(
           function(){
             $(".menu-a-tendina-bianco").toggle();
           }
         );
});
