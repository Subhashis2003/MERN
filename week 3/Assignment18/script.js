let str=prompt("Enter a string");
let char=prompt("Enter the charactyer to be counted");
let count=0;
for(let ch of str){
    if (char.includes(ch)){
        count++;
    }
}
document.write("Occurence of &nbsp"+char+":",count);