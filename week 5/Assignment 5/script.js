let num;
for(num=1;num<=10;num++){
    if(num %3==0){
        console.log("fizz");
        continue;
    }else if(num %5==0){
        console.log("Buzz");
        continue;
    }
    console.log(num);
}