var num=Number(prompt(`Enter a number that you want to know that given number is a palindrom or not.`))
var n=num
var rev=0
while(n!=0){
let remainder=n%10
rev=rev*10+remainder
n=parseInt(n/10)
}
if(num==rev){
    document.write(`Given number ${num} is a palindrom because its reverse is ${rev} and both numbers are  equal.`)
}
else{
    document.write(`Given number ${num} is a not palindrom because its reverse is ${rev} and both numbers are not equal.`)
}
