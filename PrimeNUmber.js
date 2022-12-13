var start=Number(prompt(`Enter the start range`))
var end=Number(prompt(`Enter the end range`))
var count=0
for(var num=start;num<=end;num++){
    var bool=true
    for(var i=2;i<=num/2;i++){
        if(num%i==0){
            bool=false
            break
        }
    }
    if(bool){
        document.write(`${num} `)
        count++
    }
}
document.write(`<br>total prime number present between the given range is ${count}`)
