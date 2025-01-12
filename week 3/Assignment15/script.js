let arr1=[1,2,3];
let arr2=[3,4,5];
let merge=arr1.concat(arr2);
let unique=[];
for (let i = 0; i < merge.length; i++) {
    if(!unique.includes(merge[i]))
        unique.push(merge[i]);

}
console.log("Merged array:",unique);
