console.clear();

$(document).ready(function() {
   $('#display').text('0');
  
   $('.btn-primary').on('click',function (e) {
     e.preventDefault();
     let dis=$('#display').text();
     let num=$(this).text();
     if(dis == '0'){
       $('#display').text('');
       $('#display').append(num);
     }else{
       let help =dis[dis.length-1];
       let help2 =dis[dis.length-2];
       
       if((help2=='/' || help2=='*' || help2=='+' || help2=='-') && help =='0' && num == '0' ){
         
       }else{
         $('#display').append(num); 
       }
     }
      
   });
  
  $('.btn-dark').on('click',function (e) {
     e.preventDefault();
     let dis=$('#display').text();
     let butt=$(this).text();
     
     if(dis == '0'){
       
       if(butt=='.'){
       $('#display').text('0.');
       $('#decimal').prop('disabled',true);
       }
              
     }else{
       let help =dis[dis.length-1];
       let help2=0;
       
       
       if((help=='/' || help=='*' || help=='+' || help=='-') && butt == '.' ){
        help2=1;
       }else{
         if(help=='.'){
           
         }else{
         $('#display').append(butt); 
         $('#decimal').prop('disabled',false);}
       }
       
       if(butt=='.' && help2!=1){
          $('#decimal').prop('disabled',true);
       }
       
     }
     if(butt == 'Clr'){
       $('#display').text('0');
       $('#decimal').prop('disabled',false);
     }
   });
  
  $('.btn-success').on('click',function(e){
    e.preventDefault();
    let dis=$('#display').text();
    let ind=0;
    let indOp=0;
    let resString='';
    if(dis!='0.'){
      
      while(ind<dis.length){
        if(isNaN(parseFloat(dis[ind]))){
          indOp++;
          if(indOp<=2)
            resString+=dis[ind];
         
        }else{
          if(indOp>=2){ resString=resString.slice(0,resString.length-2);
            if(dis[ind-1]!='-'){
              resString+=dis[ind-1];  
            }
            if(dis[ind-1]=='-' && dis[ind-2]=='-'){
             resString+='+';  
            }
            if(dis[ind-1]=='-' && dis[ind-2]!='-'){
             resString+=dis[ind-2]+dis[ind-1];  
            }
          }
          resString+=dis[ind];
          indOp=0;
        }
        ind++;  
      }
    }

     if(!isNaN(parseFloat(resString[resString.length-1]))){
    let res=eval(resString);//.toFixed(4);
    if(isFloat(res))
      $('#decimal').prop('disabled',true);
    else
      $('#decimal').prop('disabled',false);
    
    $('#display').text(res);
    
    }else{
  if(resString[resString.length-1]=='.'){
    $('#display').text(resString.slice(0,resString.length-1));
    $('#decimal').prop('disabled',false);
  }else{
$('#display').text(resString.slice(0,resString.length-2));
  }     
    }

    /*console.log(resString);
    let res=eval(resString);//.toFixed(4);
    $('#display').text(res)
    $('#decimal').prop('disabled',true);
    */
  });
  
  
});

function isFloat(n) {
    return n === +n && n !== (n|0);
}

/*Vanila
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  document.addEventListener("click", function(event) {
  var target = event.target;
  console.log(target.id);
});
});

*/