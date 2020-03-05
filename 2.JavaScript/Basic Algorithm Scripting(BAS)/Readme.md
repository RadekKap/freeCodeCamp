Basic Algorithm Scripting
=================

Kilka programów z tego działu. Wszystkie znajdują się w jednym pliku *script.js*



1.Find the Longest Word in a String
------------------------------------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string) z zadaniem.

**1.Description**  
Return the length of the longest word in the provided sentence.

Your response should be a number.

**2.Use Cases:**  
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.  
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.   
findLongestWordLength("May the force be with you") should return 5.  
findLongestWordLength("Google do a barrel roll") should return 6.  
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.  
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.    



2.Return Largest Numbers in Arrays
--------------------------------------

**1.Description**  
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays) z zadaniem.

**2.Use Cases:**  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.  
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].  
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].  
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].  


3.Confirm the Ending
------------------------

**1.Description**  
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending) z zadaniem.

**2.Use Cases:**  
confirmEnding("Bastian", "n") should return true.  
confirmEnding("Congratulation", "on") should return true.  
confirmEnding("Connor", "n") should return false.  
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.  
confirmEnding("He has to give me a new name", "name") should return true.  
confirmEnding("Open sesame", "same") should return true.  
confirmEnding("Open sesame", "pen") should return false.  
confirmEnding("Open sesame", "game") should return false.  
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.  
confirmEnding("Abstraction", "action") should return true.  
Your code should not use the built-in method .endsWith() to solve the challenge.  


4.Title Case a Sentence
---------------------------

**1.Description**  
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence) z zadaniem.

**2.Use Cases:**  
titleCase("I'm a little tea pot") should return a string.  
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.  
titleCase("sHoRt AnD sToUt") should return Short And Stout.  
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.  


5.Slice and Splice
----------------------

**1.Description**  
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice) z zadaniem.

**2.Use Cases:**  
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].  
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].  
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].  
All elements from the first array should be added to the second array in their original order.  
The first array should remain the same after the function runs.  
The second array should remain the same after the function runs.  


6.Falsy Bouncer
-------------------

**1.Description**  
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer) z zadaniem.

**2.Use Cases:**  
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].  
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].  
bouncer([false, null, 0, NaN, undefined, ""]) should return [].  
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].  


7.Where do I Belong
-----------------

**1.Description**  
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong) z zadaniem.


**2.Use Cases:**  
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.  
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.  
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.  
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.  
getIndexToIns([40, 60], 50) should return 1.  
getIndexToIns([40, 60], 50) should return a number.  
getIndexToIns([3, 10, 5], 3) should return 0.  
getIndexToIns([3, 10, 5], 3) should return a number.  
getIndexToIns([5, 3, 20, 3], 5) should return 2.   
getIndexToIns([5, 3, 20, 3], 5) should return a number.  
getIndexToIns([2, 20, 10], 19) should return 2.  
getIndexToIns([2, 20, 10], 19) should return a number.  
getIndexToIns([2, 5, 10], 15) should return 3.  
getIndexToIns([2, 5, 10], 15) should return a number.  
getIndexToIns([], 1) should return 0.  
getIndexToIns([], 1) should return a number.  


8.Mutations
---------
Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations) z zadaniem.

**1.Description**  
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


**2.Use Cases:**  
mutation(["hello", "hey"]) should return false.   
mutation(["hello", "Hello"]) should return true.   
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.   
mutation(["Mary", "Army"]) should return true.  
mutation(["Mary", "Aarmy"]) should return true.  
mutation(["Alien", "line"]) should return true.  
mutation(["floor", "for"]) should return true.  
mutation(["hello", "neo"]) should return false.  
mutation(["voodoo", "no"]) should return false.  
mutation(["ate", "date"] should return false.  
mutation(["Tiger", "Zebra"]) should return false.  
mutation(["Noel", "Ole"]) should return true.  


9.Chunky Monkey
-------------

**1.Description**  
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey) z zadaniem.

**2.Use Cases:**  
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].  
