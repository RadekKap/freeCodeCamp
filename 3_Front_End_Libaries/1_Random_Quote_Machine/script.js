
//console.clear();


let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

var json;
var nowQuote='';
var nowAuthor='';
var pastels=['#FFb5E8','#FFB9B3','#FFCCF9','#35CB4A','#B28DFF','#C5A3FF','#B29DD9','#FE6B64','#77DD77','#779ECB'];
 
function getData() {
  return $.getJSON(url, function(data) {
        
        json=data;
        console.log(json);
    });
}

function getNewQuote(){
  let res=json.quotes[Math.floor(json.quotes.length*Math.random())];
  nowQuote=res.quote;
  nowAuthor=res.author;
  
  $("p").animate(
  {opacity: 0},
    500,
    function(){
      $(this).animate({ opacity: 1 }, 500);
      $("#text").text(nowQuote);
      $("#text").prepend('<i class="fa fa-quote-left"></i>  ');
      $("#text").append('  <i class="fa fa-quote-right"></i>');
      $("#author").text(nowAuthor);
    }
  );
  
  var color=pastels[Math.floor(pastels.length*Math.random())];
  
  //console.log(color); 
  
  $('body').css({'background-color': color,'color': color});
  $('p').css({'color':color});
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + nowQuote + '" ' + nowAuthor));
  $('#new-quote').css({'background-color':color});
  $('#butt i').css({'color':color});
  
}

$(document).ready(function (){
  getData().then( () =>{
   getNewQuote();
  });

});