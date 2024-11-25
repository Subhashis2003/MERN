let arr=[1,20,12,58,45,74,32,5,19];
let even=[];
for(let ch of arr){
    if (ch%2==0) {
        even.push(ch);
    }
}
console.log("Even numbers are:",even);
