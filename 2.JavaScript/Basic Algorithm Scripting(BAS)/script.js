//Basic Algorithm Scripting


//Find the Longest Word in a String

function compareNumbers(a, b) {			//asc sort
   return a - b
}
function findLongestWordLength(str) {
  let max=0;
  let maxArr=[];
  for(let i=0;i<str.length;i++){
      max++;
      if(str[i]==" "){
          maxArr.push(max-1);
          max=0;
      }else if(i==str.length-1){
        maxArr.push(max);
      }
        
  }
    /*console.log(maxArr)
    console.log(maxArr.sort())
    console.log(maxArr.sort(compareNumbers))*/
  return maxArr.sort(compareNumbers)[maxArr.length-1];
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));



//Return Largest Numbers in Arrays
function compareNumbers(a, b) {
   return a - b
}

function largestOfFour(arr) {
  let maxArr=[];
  for(let i=0;i<arr.length;i++){
   
      maxArr.push(arr[i].sort(compareNumbers)[arr[i].length-1]);
  }

  return maxArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Confirm the EndingPassed
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
      if(str.slice(str.length-target.length)==target){
        return true;
      }else
      return false;
}

console.log(confirmEnding("Connor", "n"));


//Title Case a SentencePassed

function titleCase(str) {

  let helpArr=[];
  let helpStr="";
    for(let i=0;i<str.length;i++){
      helpStr+=str[i];
      if(str[i]==" " | i==str.length-1){
        helpArr.push(helpStr.toLocaleLowerCase());
        helpStr="";
      }
    }

    for(let i=0;i<helpArr.length;i++){
      helpArr[i]=helpArr[i].replace(helpArr[i][0],helpArr[i][0].toLocaleUpperCase());
      helpStr+=helpArr[i]
      
    }
    console.log(helpArr);

  return helpStr;
}

console.log(titleCase("I'm a little tea pot"));


//Slice and SplicePassed

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
    let helpArr=arr2.slice(0,arr2.length);
    helpArr.splice(n,0,...arr1);
    console.log(helpArr);

  return helpArr;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy BouncerPassed

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let helpArr=[];
  let x=NaN;
  for(let i=0;i<arr.length;i++){
      if(isNaN(arr[i]) && typeof arr[i] == "number")
        arr[i]=true;
      switch(arr[i]){
        case false:
          delete arr[i];
          break;
        case null:
          delete arr[i];
          break;
        case 0:
          delete arr[i];
          break;
        case "":
          delete arr[i];
          break;
        case undefined:
          delete arr[i];
          break;
        case true:
          delete arr[i];
          break;
        default:
          helpArr.push(arr[i]);
          break;
      }
  }
  //isNaN(NaN)  true
  console.log(helpArr);
  return helpArr;
}

bouncer([null, NaN, 1, 2, undefined]);

//Where do I Belong

function compareNumber(a,b){
  return a-b;
}

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
    let help=0;
    arr.sort(compareNumber);
    for(let i=0;i<arr.length;i++){
      if(arr[i]<num)
        help++;
      else
      break;
    }
  return help;
}

console.log(getIndexToIns([2, 20, 10], 19));

//Mutations

function mutation(arr) {
  
  let help=null;
  for(let i=0;i<arr[1].length;i++){
      if(arr[0].toLocaleLowerCase().includes(arr[1][i].toLocaleLowerCase()))
        help=true;
      else{
        help=false;
        break;}
    }

  return help;
}

console.log(mutation(["hello", "hey"]));

//Chunky Monkey

function chunkArrayInGroups(arr, size) {
    let helpArr=[];
    for(let i=0;i<arr.length;i+=size){
      helpArr.push(arr.slice(i,i+size));
    }
  // Break it up.
  console.log(helpArr)
  return helpArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
