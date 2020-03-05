Algorithms and Data Structures Projects
=================

Programy z tego działu. Wszystkie znajdują się w jednym pliku *script.js*



1.Palindrome Checker
--------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker) z zadaniem.


**1.Description**  
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

**2.Use Cases:**  
    palindrome("eye") should return a boolean.  
    palindrome("eye") should return true.  
    palindrome("`_`eye") should return true.  
    palindrome("race car") should return true.  
    palindrome("not a palindrome") should return false.  
    palindrome("A man, a plan, a canal. Panama") should return true.  
    palindrome("never odd or even") should return true.  
    palindrome("nope") should return false.  
    palindrome("almostomla") should return false.  
    palindrome("My age is 0, 0 si ega ym.") should return true.  
    palindrome("1 eye for of 1 eye.") should return false.  
    palindrome("0_0 (: /-\ :) 0-0") should return true.  
    palindrome("five|\_/|four") should return false.  


2.Roman Numeral Converter
---------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converters) z zadaniem.

**1.Description**  
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.  

**2.Use Cases:**  
    convertToRoman(2) should return "II".  
    convertToRoman(3) should return "III".  
    convertToRoman(4) should return "IV".  
    convertToRoman(5) should return "V".  
    convertToRoman(9) should return "IX".  
    convertToRoman(12) should return "XII".  
    convertToRoman(16) should return "XVI".  
    convertToRoman(29) should return "XXIX".  
    convertToRoman(44) should return "XLIV".  
    convertToRoman(45) should return "XLV"  
    convertToRoman(68) should return "LXVIII"  
    convertToRoman(83) should return "LXXXIII"  
    convertToRoman(97) should return "XCVII"  
    convertToRoman(99) should return "XCIX"  
    convertToRoman(400) should return "CD"  
    convertToRoman(500) should return "D"  
    convertToRoman(501) should return "DI"  
    convertToRoman(649) should return "DCXLIX"   
    convertToRoman(798) should return "DCCXCVIII"  
    convertToRoman(891) should return "DCCCXCI"  
    convertToRoman(1000) should return "M"  
    convertToRoman(1004) should return "MIV"  
    convertToRoman(1006) should return "MVI"  
    convertToRoman(1023) should return "MXXIII"  
    convertToRoman(2014) should return "MMXIV"  
    convertToRoman(3999) should return "MMMCMXCIX"  


3.Caesars Cipher
--------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher) z zadaniem.

**1.Description**  
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.  

**2.Use Cases:**  
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP  
rot13("SERR CVMMN!") should decode to FREE PIZZA!  
rot13("SERR YBIR?") should decode to FREE LOVE?  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.  

4.Telephone Number Validator
------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator) z zadaniem.

**1.Description**  
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.  

**2.Use Cases:**  
telephoneCheck("555-555-5555") should return a boolean.  
telephoneCheck("1 555-555-5555") should return true.  
telephoneCheck("1 (555) 555-5555") should return true.  
telephoneCheck("5555555555") should return true.  
telephoneCheck("555-555-5555") should return true.  
telephoneCheck("(555)555-5555") should return true.  
telephoneCheck("1(555)555-5555") should return true.  
telephoneCheck("555-5555") should return false.  
telephoneCheck("5555555") should return false.  
telephoneCheck("1 555)555-5555") should return false.  
telephoneCheck("1 555 555 5555") should return true.  
telephoneCheck("1 456 789 4444") should return true.  
telephoneCheck("123**&!!asdf#") should return false.  
telephoneCheck("55555555") should return false.  
telephoneCheck("(6054756961)") should return false  
telephoneCheck("2 (757) 622-7382") should return false.  
telephoneCheck("0 (757) 622-7382") should return false.  
telephoneCheck("-1 (757) 622-7382") should return false  
telephoneCheck("2 757 622-7382") should return false.  
telephoneCheck("10 (757) 622-7382") should return false.  
telephoneCheck("27576227382") should return false.  
telephoneCheck("(275)76227382") should return false.  
telephoneCheck("2(757)6227382") should return false.  
telephoneCheck("2(757)622-7382") should return false.  
telephoneCheck("555)-555-5555") should return false.  
telephoneCheck("(555-555-5555") should return false.  
telephoneCheck("(555)5(55?)-5555") should return false.  

5.Cash Register
---------------------
Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register) z zadaniem.

**1.Description**  
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency  |Unit | Amount
--------- |---- | ------
Penny	  |$0.01| (PENNY)
Nickel	  | $0.05|(NICKEL)
Dime	  | $0.1| (DIME)
Quarter	  |$0.25| (QUARTER)
Dollar	  |$1|    (DOLLAR)
Five Dollars |$5|  (FIVE)
Ten Dollars |$10|  (TEN)
Twenty Dollars |$20| (TWENTY)
One-hundred Dollars |$100| (ONE HUNDRED)


**2.Use Cases:**  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.  

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.  

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.  

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.  

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.  

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.  
