//Algorithms and Data Structures Projects


//Palindrome Checker

function palindrome(str) {
  // Good luck!
  str=str.toLocaleLowerCase();
  let regex=/\W|_/g;
  str=str.replace(regex,"");
  //console.log(str,str.length);
  let startIndex=0;
  let endIndex=str.length-1;
  while(true){
    if(str[startIndex] === str[endIndex])
    { 
      startIndex++;
      endIndex--;
    }else{
      return false;
    }
   
    if(startIndex===endIndex || startIndex>endIndex)
      return true;

  }

}

palindrome("0_0 (: /-\ :) 0-0");


//Roman Numeral Converter

function convert(num,long) {
  
  if(long==1){
    
    switch(num){
        case 0:
        return "";
        case 1:
        return "I";
        case 2:
        return "II";
        case 3:
        return "III";
        case 4:
        return "IV";
        case 5:
        return "V";
        case 6:
        return "VI";
        case 7:
        return "VII";
        case 8:
        return "VIII";
        case 9:
        return "IX";
    }

  }
  if(long==2){
    
    switch(num){
        case 0:
        return "";
        case 1:
        return "X";
        case 2:
        return "XX";
        case 3:
        return "XXX";
        case 4:
        return "XL";
        case 5:
        return "L";
        case 6:
        return "LX";
        case 7:
        return "LXX";
        case 8:
        return "LXXX";
        case 9:
        return "XC";
    }

  }
  if(long==3){
    
    switch(num){
        case 0:
        return "";
        case 1:
        return "C";
        case 2:
        return "CC";
        case 3:
        return "CCC";
        case 4:
        return "CD";
        case 5:
        return "D";
        case 6:
        return "DC";
        case 7:
        return "DCC";
        case 8:
        return "DCCC";
        case 9:
        return "CM";
    }

  }
  if(long==4){
    
    switch(num){
        case 1:
        return "M";
        case 2:
        return "MM";
        case 3:
        return "MMM";    
    }

  }

 return num;
}

function convertToRoman(num) {
    let x=num.toString().length;
    let res="";
   
    if(x==1){
        res=convert(num,1);
    }
    if(x==2){
        let div=Math.floor(num/10);
        let mod=num%10;
        res=convert(div,2);
        res+=convert(mod,1);
    }
    if(x==3){
        let div=Math.floor(num/100);
        let div2=num%100;
        div2=Math.floor(div2/10);
        let mod=num%10;
        res=convert(div,3);
        res+=convert(div2,2);
        res+=convert(mod,1);
    }
    if(x==4){
        let div=Math.floor(num/1000);
        let div2=num%1000;
        div2=Math.floor(div2/100);
        let div3=num%100;
        div3=Math.floor(div3/10);
        let mod=num%10;
        res=convert(div,4);
        res+=convert(div2,3);
        res+=convert(div3,2);
        res+=convert(mod,1);
    }

 return res;
}

console.log(convertToRoman(1023));

//another solution
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};


//Caesars Cipher

function rot13(str) { // LBH QVQ VG!
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetShifted = "nopqrstuvwxyzabcdefghijklm";
let res="";
let index=0;
for(let i=0;i<str.length;i++){
  index=alphabetShifted.indexOf(str[i].toLocaleLowerCase());
  if(index!=-1)
    res+=alphabet[index].toLocaleUpperCase();
  else
    res+=str[i];
}

  return res;
}

// Change the inputs below to test
console.log(rot13("SERR YBIR?"));


//Telephone Number Validator

function telephoneCheck(str) {
  // Good luck!
  let regex=/^(1?\s?\d{3}-\d{3}-\d{4})$|^(1?\s?\(\d{3}\)\s*\d{3}-\d{4}$)|^(1?\s?\d{3}\s\d{3}\s\d{4})$|^(1?\s?\d{10})$/;
  let regexFalse=/[\d]/g;
  let res=regex.test(str);
  let res2=str.match(regexFalse);
  if((res2.length == 10 || res2.length == 11)  && res){
      return res;
  }else
  return false;
}
 telephoneCheck("1(555)555-5555");

//Cash Register

function checkCashRegister(price, cash, cid) {
  var change;
  let shouldRet=cash-price;
  shouldRet=shouldRet.toFixed(2);
  let ind=-1;
  let helpArr=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  let namesArr=['PENNY','NICKEL','DIME','QUARTER','ONE','FIVE','TEN','TWENTY','ONE HUNDRED'];
  let arr2=cid.map(val => {
    ind+=1;
    return [helpArr[ind],val[1],Math.round(val[1]/helpArr[ind])];
  });
  let range=arr2.filter(val=> val[0]<=shouldRet).map(val => {
    return val;
  });

  var rangeCopy=[];
  for(let i=0;i<range.length;i++){
    rangeCopy[i]=range[i].slice(0);
  }
  rangeCopy.reverse();
  

  for(let i=0;i<rangeCopy.length;i++){
    while(shouldRet>0 && rangeCopy[i][0]<=shouldRet && rangeCopy[i][2]>0){
      shouldRet-=rangeCopy[i][0];
      shouldRet=shouldRet.toFixed(2);
      rangeCopy[i][1]-=rangeCopy[i][0];
      rangeCopy[i][1]=rangeCopy[i][1].toFixed(2);
      rangeCopy[i][2]-=1;
    }
  }
  if(shouldRet>0){
    change={ status: "INSUFFICIENT_FUNDS",change:[]};
    return change;
  }

  rangeCopy.reverse();
 
  ind=-1;
  let res=0;
  var arr3=range.map(val => {
    ind+=1;
    res=val[1]-rangeCopy[ind][1];
    res=res.toFixed(2);
    return [namesArr[ind],res-0];
  });
    
    ind=-1;
    let arr4=cid.map(val => {
      ind+=1;
      if(ind<arr3.length){
      res=val[1]-arr3[ind][1];
      res=res.toFixed(2);
      return res-0;}
      else
      return 0;
    });
  
    let check=arr4.filter(val => val != 0);
    ind=-1;
    if(check.length==0){
      let help=cid.map(val => { 
        ind+=1;
        if(ind<arr3.length)
          return arr3[ind];
        else
          return val;
      });
      change={status: "CLOSED", change: help};
    }else{
      
    change={status: "OPEN", change:arr3.filter(val => val[1]!=0).reverse()};
    //console.log(change);
    }
 
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

