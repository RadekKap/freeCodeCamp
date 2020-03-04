console.clear();
const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
});


function printValue(){
let help=$("#editor").val();

//console.log(marked(help));
//$("#preview").html(marked(help, { renderer }));
document.getElementById('preview').innerHTML=marked(help, { renderer });
  
}


$(document).ready(function(){
  let string=`header (H1 size)
===========================

a sub header (H2 size)
-------------------------
It's an example link: [Link](http://example.com/). 

foo  
baz

Example of inline code: \` Inline Code: \`    
Code Block:    
\`\`\`javascript
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + <br>;
}
  \`\`\`
List Items:   
1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses  
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.   
Image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")   
Bolded text: Strong emphasis, aka bold, with **asterisks** or __underscores__.   

`;
  renderer.link = (address = "#", title = "", content = "") => (
   `<a target="_blank" href=${address} title=${title}>${content}</a>`
);

   $('#editor').text(string);
    printValue();
                
 });