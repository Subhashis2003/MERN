let str=prompt("Enter a string");
 let strlow=str.toLowerCase();
 let vowel="aeiou";
 let count=0;
 for(let char of strlow){
    if (vowel.includes(char)) {
        count++;
    }
 }
 document.write("the number of vowels are:",count);
 