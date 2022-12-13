var num=Number(prompt(`Eneter a number that you want to know, given number is a neon number or not`))
var sqr=num**2
var sum=0;
while(sqr!=0){
        let rem=sqr%10;
        sum=sum+rem
        sqr=parseInt(sqr/10)
}
if(sum==num){
    document.write(`${num} is a neon number because its squares digit sum is same.`)
}
else{
    document.write(`${num} is not a neon number`)
}
