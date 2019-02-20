window.onload = function() {
    document.getElementById("searchNow").onclick = function() {
        
        searchText = document.getElementById("searchText").value;
        
        $.ajax({
            url: "https://www.google.co.in/search?q="+searchText,
            context: document.body
          }).done(function(data) {
            
            html = $.parseHTML( data );

            $("h3.r", html).each(function( i, el ) {
                nodeNames[ i ] = el;
            });

           // nodeNames = [];

            //$("#result").append( html );

            //$.each( html, function( i, el ) {
            //    nodeNames[ i ] = el;
            //});
            
            console.log(nodeNames);

          });
 

    }
}