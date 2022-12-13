var num=Number(prompt("Enter a number : "))
document.write("we will tell you this number is a magical or not. <br>")
var sum=0;
var rev=0;
var n=num;
while(n!=0){
    let rem=n%10;
    sum=sum+rem
    n=parseInt(n/10)
}
n=sum
while(n!=0){
    let rem=n%10
    rev=rev*10+rem
    n=parseInt(n/10)
}
if(num==rev*sum){
    document.write(`${num} is a magical number.`)
}
else{
    document.write(`${num} is not magical number.`)
}
