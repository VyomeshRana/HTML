let prompt = require('prompt-sync')({sigint:true})
let n = parseInt(prompt("enter the number :"))
let obj={}

for(i=1;i<=n;i++)
{
    obj[prompt('enter state --> ')] = prompt('capital is --> ')
}
console.log(obj)
for(j in obj)
{
    console.log(`${j} capital is ${obj[j]}`)
}