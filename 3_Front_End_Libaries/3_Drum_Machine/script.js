console.clear();
var remAudio;
var i=0;


function rightString(str){
  return str.toLowerCase()+"Sound ";
}

function play_single_sound(aElement,...flag) {
      if(i>0)
      remAudio.pause();

      aElement.load();
      aElement.play();
      remAudio=aElement;
      i++;
      let elId=aElement.id;
  
      if(flag[0]===undefined) 
    document.getElementById("display").innerHTML+=rightString(elId);
      
  }

$(document).ready(function(){


$('a').on('click', function(e){
    e.preventDefault();
    switch($(this).attr('id')){
      case 'qSound':
           play_single_sound($('#Q')[0]);
           break;
      case 'wSound':
           play_single_sound($('#W')[0]);
           break;
      case 'eSound':
           play_single_sound($('#E')[0]);
           break;
      case 'aSound':
           play_single_sound($('#A')[0]);
           break;
      case 'sSound':
           play_single_sound($('#S')[0]);
           break;
      case 'dSound':
           play_single_sound($('#D')[0]);
           break;
      case 'zSound':
           play_single_sound($('#Z')[0]);
           break;
      case 'xSound':
           play_single_sound($('#X')[0]);
           break;
      case 'cSound':
           play_single_sound($('#C')[0]);
           break;
        
    }
   
    
  });

});

document.addEventListener("keydown", function onPress(event) {
  let padActive;
   
  if(event.keyCode == 81){ // || .key === "q"
     padActive = document.querySelector('#qSound');
     event.preventDefault();
     play_single_sound($('#Q')[0],1);// or .get(0)   
    }
   if(event.keyCode == 87){
      padActive =document.querySelector('#wSound');
      event.preventDefault();
      play_single_sound($('#W')[0],1);
    }
    if(event.keyCode == 69){
      padActive =document.querySelector('#eSound');
      event.preventDefault();
      play_single_sound($('#E')[0],1);
    }
    if(event.keyCode == 65){
      padActive =document.querySelector('#aSound');
      event.preventDefault();
      play_single_sound($('#A')[0],1);
    }
    if(event.keyCode == 83){
      padActive =document.querySelector('#sSound');
      event.preventDefault();
      play_single_sound($('#S')[0],1);
    }
    if(event.keyCode == 68){
      padActive =document.querySelector('#dSound');
      event.preventDefault();
      play_single_sound($('#D')[0],1);
    }
    if(event.keyCode == 90){
      padActive =document.querySelector('#zSound');
      event.preventDefault();
      play_single_sound($('#Z')[0],1);
    }
    if(event.keyCode == 88){
      padActive =document.querySelector('#xSound');
      event.preventDefault();
      play_single_sound($('#X')[0],1);
    }
    if(event.keyCode == 67){
      padActive =document.querySelector('#cSound');
      event.preventDefault();
      play_single_sound($('#C')[0],1);
    }
  if(event.ctrlKey){
      $('#display').text(" ");
    }
  if(padActive!=undefined)
  {
    padActive.classList.add("blackbg");
    setTimeout(function() { 
     padActive.classList.remove("blackbg");
      }, 500);
  }
}); 



