//Intermediate Algorithm Scripting


//Sum All Numbers in a Range

function sumAll(arr) {
  let x=0;
  let helpArr=[];
  x=arr[0];
  if(arr[0]==arr[1])
    return arr[0]+arr[1];

  if(arr[0]<arr[1]){
    while(x<=arr[1]){
      helpArr.push(x);
      x++;
    }
    return helpArr.reduce((res,num)=> res+num,0)
  }
  else{
    while(x>=arr[1]){
      helpArr.push(x);
      x--;
    }
    return helpArr.reduce((res,num)=> res+num,0)
  }
    
}

console.log(sumAll([5, 10]));

//Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  let pom1=[];
  let pom2=[];
  
  pom1=arr1.filter(m=>!arr2.includes(m));
  pom2=arr2.filter(m=>!arr1.includes(m));
  //console.log(pom1,pom2);
  newArr=pom1.concat(pom2);

  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

//Seek and Destroy

function destroyer(arr,...arr2) {
  // Remove all the values
  let helpArr=[];
  helpArr=arr.filter(val=> !arr2.includes(val));
  //console.log(helpArr);
  return helpArr;
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");


//Wherefore art thouPassed v1

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  let count=0;
  
    for(let rowNum in collection){
         count=0;
       for(let rowNumProp in collection[rowNum]){
         for(let srProp in source){ 
          
          if(collection[rowNum].hasOwnProperty(srProp) &&                    collection[rowNum][rowNumProp]===source[srProp]){
             count++;
           
              if(count==Object.keys(source).length){
              arr.push(collection[rowNum]);
              
              
              break;
              }
            }
          
          }
        }
        
      }
 
  // Only change code above this line*/
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Wherefore art thouPassed v2

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
    console.log(Object.keys(collection).filter(key=> collection[key]===source[key]));
    arr=collection.filter(val=>Object.keys(val).filter(key=> val[key]===source[key])).map(function(val, index,helpArr){
        
        return {val,helpArr,index}
    });
    console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});


//Spinal Tap Case
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //
  let regex=/[\W|_]/g;
  str=str.replace(/([a-z])([A-Z])/g, '$1 $2')
  return str.toLocaleLowerCase().split(regex).join('-');
 
  }
console.log(spinalCase('AllThe-small Things'));


//Pig Latin

function translatePigLatin(str) {
  let regex=/^[aeiou]/;
  let regex2=/^[bcdfghjklmnpqrstvwxyz]{2,}/;
  let regex3=/[aeiou]/g;
  if(regex.test(str)){
    return str + "way";
  }else if(!regex3.test(str)){
    return str+"ay";
  }else if(!regex3.test(str[str.length/2]) && !regex3.test(str.slice(0,str.length/2))){
    return str.slice(str.length/2,str.length)+str.slice(0,str.length/2)+"ay";
  }else if(regex2.test(str)){
  return str.slice(2,str.length)+str[0]+str[1]+"ay";
  }else{
    return str.slice(1,str.length)+str[0]+"ay";
  }
   
}

translatePigLatin("paragraphs");


//Search and Replace

function myReplace(str, before, after) {
  let regex=/^[A-Z]/;
  if(regex.test(before[0])){
    let helpStr=after[0].toLocaleUpperCase()+after.slice(1,         after.length);
    return str.replace(before,helpStr);
  }else{
    return str.replace(before,after);
  }
  
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


//DNA Pairing

function pairElement(str) {
  let result=[];

  for(let i=0;i<str.length;i++){
    switch(str[i]){
      case 'G':
        result.push(["G","C"]);
        break;
      case 'C':
        result.push(["C","G"]);
        break;
      case 'A':
        result.push(["A","T"]);
        break;
      case 'T':
        result.push(["T","A"]);
        break;
    }
  }

  return result;
}

console.log(pairElement("GCG"));

//Missing letters
function fearNotLetter(str) {
  let alphabet="abcdefghijklmnopqrstuvwxyz";
    if(str.length==26)
      return undefined;

  let index=alphabet.indexOf(str[0]);
  let lastIndex=alphabet.indexOf(str[str.length-1]);
  let alphSlice=alphabet.slice(index,lastIndex);
  
  for(let i=0;i<alphSlice.length;i++){
    if(!str.includes(alphSlice[i])){
      return alphSlice[i];
    }
  }
  return str;
}

console.log(fearNotLetter("abcdefghjklmno"));

//Sorted Union

function uniteUnique(arr,arr2,...arr3) {

  for(let i=0;i<arr2.length;i++){
    if(!arr.includes(arr2[i])){
      arr.push(arr2[i]);
    }
  }
  
  if(arr3.length>0){

    let index=0;
    while(index<arr3.length){

      for(let i=0;i<arr3[index].length;i++){
        if(!arr.includes(arr3[index][i])){
          arr.push(arr3[index][i]);
        }
      }
      index++;
    }
    return arr;

  }else
  
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1],[3],[8]));


//Convert HTML Entities

function convertHTML(str) {
  // &colon;&rpar;
  str=str.replace(/&/g,"&amp;");
  str=str.replace(/</g,"&lt;");
  str=str.replace(/>/g,"&gt;");
  str=str.replace(/"/g,"&quot;");
  str=str.replace(/'/g,"&apos;");
  return str;
}

convertHTML("Dolce & Gabbana");

//Sum All Odd Fibonacci Numbers

function recFib(num){
  if(num<=2){
    return 1;
  }else 
  return recFib(num-1)+recFib(num-2);
}
function sumFibs(num) {
  let sum=0;
  let fib=0;
  for(let i=1;i<=num;i++){
    fib=recFib(i);
    
    if(fib % 2 ==0)
      continue;

    if(fib>num)
      break;

    if(fib<=num && fib % 2 == 1){
      sum+=fib;
    }
    
  }
  return sum;
}

console.log(sumFibs(1000));



//Sum All PrimesPassed

function sumPrimes(num) {
  let index=2;
  let sum=0;
  let help=0;
  while(index<=num){
    help=0;
    for(let i=2;i<index;i++){
      if(index % i === 0){
        help=1;
      }
    }
    if(help!=1){
      //console.log(sum,index);
      sum+=index;
    }
    index++;
    
  }
  return sum;
}

console.log(sumPrimes(10));


//Smallest Common Multiple

const asc= (a,b) =>  a-b;
 
function allnumbers(x,y){
  if(y<x){
    return [];
  }else{
    const arr2=allnumbers(x,y-1);
    arr2.push(y);
    return arr2;
  }
}
function arrPrimes(num) {
  let arr=[];
  let index=2;
  let help=0;
  while(index<=num){
    help=0;
    for(let i=2;i<index;i++){
      if(index % i === 0){
        help=1;
      }
    }
    if(help!=1){
      arr.push(index);
    }
    index++;
    
  }
  return arr;
}

function smallestCommons(arr) {
  arr.sort(asc);
  let pomArr=allnumbers(arr[0],arr[1]);
  let resArr=[];
  let requirePrime=arrPrimes(arr[1]);
  let indexPrime=0;
  let changePrime=0;
  let z=0;
  console.log(pomArr,requirePrime);
  
  while(true){
   changePrime=0;
   z=0;
  
    for(let i=0;i<pomArr.length;i++){
      
      if(pomArr[i] % requirePrime[indexPrime] == 0 ){
       pomArr[i]=pomArr[i]/requirePrime[indexPrime];
       
         z=1;
       }
               
      
       if(pomArr[i] % requirePrime[indexPrime]!=0){
        changePrime++;
       }
              
    }
     if(z==1){
     resArr.push(requirePrime[indexPrime]) ;
    }
 
    if(changePrime==pomArr.length){
      indexPrime++;
   }
    if(indexPrime==requirePrime.length)
      break;
  }
   
  console.log(resArr);
  console.log(resArr.reduce((a,b) => a*b))
  return resArr.reduce((a,b) => a*b);
}
 
 
smallestCommons([23, 18]);

//Drop it
function dropElements(arr, func) {
  // Drop them elements.
  for(let i=0;i<arr.length;){
    if(func(arr[i]))
      break;
    else
      arr.shift();
  }
  //console.log(arr.filter(val=> func(val))); not working in one case
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

//Steamroller
function steamrollArray(arr) {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    //console.log(next,stack);
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      //console.log(...next);
      stack.push(...next);
      //console.log(stack);
    } else {      
      res.push(next);
      //console.log(res);
    }
  }
  //reverse to restore input order
  return res.reverse();
}

steamrollArray([1, [2], [3, [[4]]]]);

//Binary Agents
function binaryAgent(str) {
let arr=str.split(" ");
let res=[];
for(let i=0;i<arr.length;i++){
  res.push(String.fromCharCode(parseInt(arr[i],2)));
}
return res.join('');
//console.log(String.fromCharCode(parseInt(str.split(" ")[0],2))); return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Everything Be True
function truthyOrFalsy(a) {
    return a ? "truthy" : "falsy";
}
/*

Truthy -> Value that resolve to true in boolean context

Falsy -> Value that resolve to false in boolean context

For better understanding, falsy values is given below.

    false
    0
    empty string
    null
    undefined
    NaN

*/
function truthCheck(collection, pre) {
  // Is everyone being true?
  //console.log(collection.length)
  let index=0;
  for(let prop in collection){
    if(collection[prop].hasOwnProperty(pre) && collection[prop][pre])
      index++;
  }
  if(index==collection.length)
    return true;
  else
    return false;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

//Arguments Optional
function addTogether(a,b) {
  if(Number.isInteger(a) && !b ){
    return function func(x){
      if(!Array.isArray(x))
        return a+x;
      else
      return undefined;
    }
  }else if(Number.isInteger(a) && Number.isInteger(b))
   return a+b; 
   else
   return undefined;
    
}

var xxx=addTogether(2)(3);
console.log(xxx);

//Make a Person
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  
  let fullName;
    
  
  this.setFirstName = function(first) {
    let l=fullName.split(' ')[1];
    this.setFullName(first+" "+l)
  };
  this.setLastName = function(last) {
    let f=fullName.split(' ')[0];
    this.setFullName(f+" "+last)
  };
  this.setFullName = function(firstAndLast) {
    fullName=firstAndLast;
  };

  this.setFullName(firstAndLast);

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
   this.getFullName = function() {
    return fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFirstName());

//Map the Debris
const formula = (GM,earthRadius,val) =>{

  return Math.round(2*Math.PI*Math.sqrt(Math.pow(val+earthRadius,3)/GM));
}

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let res=arr.map(val =>{
      return {name:val.name , orbitalPeriod: formula(GM,earthRadius,val.avgAlt)}
  });

  return res;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
