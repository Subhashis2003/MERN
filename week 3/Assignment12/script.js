let str=prompt("Enter a string");
let clstr=str.replace(/\s+/g,"").toLowerCase();
let rev=clstr.split("").reverse().join("");
if (rev==clstr) {
    document.write( str," &nbsp is palindrome");
    
} else {
    document.write(str," &nbsp is not palindrome");
}