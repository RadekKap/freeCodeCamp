Regular Expressions
===================
Wybrane programy z tego działu. Wszystkie znajdują się w jednym pliku *script.js*.


1.Reuse Patterns Using Capture Groups
-----------------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups) z zadaniem.

**1.Description**  
Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

**2.Use Cases:**  
Your regex should use the shorthand character class for digits.  
Your regex should reuse a capture group twice.  
Your regex should have two spaces separating the three numbers.  
Your regex should match "42 42 42".  
Your regex should match "100 100 100".  
Your regex should not match "42 42 42 42".  
Your regex should not match "42 42".  
Your regex should not match "101 102 103".  
Your regex should not match "1 2 3".  
Your regex should match "10 10 10".  


2.Restrict Possible Usernames
-----------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames) z zadaniem.

**1.Description**  
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.  


**2.Use Cases:**  
Your regex should match JACK  
Your regex should not match J  
Your regex should match Jo  
Your regex should match Oceans11  
Your regex should match RegexGuru  
Your regex should not match 007  
Your regex should not match 9  
Your regex should not match A1  
Your regex should not match BadUs3rnam3  
Your regex should match Z97    
Your regex should not match c57bT3  


3.Positive and Negative Lookahead
---------------------------------

Link do [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead) z zadaniem.

**1.Description**  
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.  

**2.Use Cases:**  
Your regex should use two positive lookaheads.  
Your regex should not match "astronaut"  
Your regex should not match "banan1"  
Your regex should match "bana12"  
Your regex should match "abc123"  
Your regex should not match "1234"  
Your regex should not match "8pass99"  
Your regex should not match "12abcde"  
Your regex should match "astr1on11aut"  
