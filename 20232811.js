
/************************************** Fizz Buzz ******************************************/
console.log("Play Fizz Buzz")
for (let i=1; i<=100; ++i){
    if (i%3===0){
        if (i%3===0 && i%5===0) {
            console.log("FizzBuzz")
        } else {
            console.log("Fizz")
        }
        
    } else if (i%5===0){
        if (i%3===0 && i%5===0) {
            console.log("FizzBuzz")
        } else {
            console.log("Buzz")
        }
        }
}

/************************************** Prime Time ******************************************/
console.log("Find the prime number")
let x = 2056
let prime = x
while(true){
    let j = 2
    let isprime = true
    while (j<prime){
        if (prime%j===0){
            isprime = false
        }
        j++
    }

    if (isprime == true){
        console.log(prime)
        break
    }
    prime++
}

/************************************** Loopy ******************************************/
console.log("Display csv data properly")
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let allLines = csvData.split('\n')
for (let i=0; i<allLines.length; ++i){
    console.log(allLines[i].split(','))
}
