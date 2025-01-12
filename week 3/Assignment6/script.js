let arr=[]
for (let i = 0; i <5; i++) {
    let num=parseFloat(prompt("enter the number"+(i+1)+":"));
    arr.push(num)
}
let sum=0;
for (let n of arr) {
    sum+=n;
    
}
document.write("Sum of Numbers",sum)
