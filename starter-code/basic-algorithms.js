let hacker1 = 'Oscar'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Victor'
console.log(`The navigator's name is ${hacker2}`)

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
  console.log(`Yo, navigator got the longest name, it has characters`)
}else{
  console.log(`Wow, you both got equally long names, ${hacker2.length}`)
}
let i = 0
let newDriver = ''
do{
  newDriver+=hacker1[i]
  newDriver+=' '
  newDriver=newDriver.toUpperCase()
  if((i+1) === hacker1.length){
    newDriver=newDriver.slice(0,newDriver.length-1)
  }
  i++
}while(i < hacker1.length)  

console.log(newDriver, newDriver.length)

let hacker1Reverse = ''
for( let j = (hacker1.length-1); j>=0; j--){
  hacker1Reverse+=hacker1[j]
}
console.log(`\n ${hacker1Reverse}`)

if(hacker1[0] > hacker2[0]){
  console.log(`The driver's name goes first`)
}else if(hacker1[0] < hacker2[0]){
  console.log(`Yo, the navigator goes first definetely`)
}else{
  console.log(`What?! You both got the same name?`)
}