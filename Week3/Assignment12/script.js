let str=prompt("Enter a string");
let rev=str.split("").reverse().join("");
if (rev==str) {
    document.write( rev+" &nbsp is palindrome");
    
} else {
    document.write(str+" &nbsp is not palindrome");
}