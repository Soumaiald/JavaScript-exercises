
function calculSum(arrSum){
    console.log("This function calculate the sum of the elements of an Array")
    let sum=0
    for (var num of arrSum) {
        sum += num
    }
    return sum
}

function calculAverage(arrAvr){
    console.log("This function calculate the average of the elements of an Array")
    let len = arrAvr.length
    if (len===0){
        return 0
    } 
    return parseFloat((calculSum(arrAvr)/len).toFixed(2))
}

function longestString(arrString){
    console.log("This function return the longest string of an Array")
    if (arrString.length===0){
        return null
    } else {
        let longString = 0  
        for (let i=1; i<arrString.length; ++i){
            if (arrString[i].length > arrString[i-1].length){
                longString = arrString[i]
            } else {
                longString = arrString[i-1]
            }
        }
        return longString
    }

}

function stringLongerThanNum(arrString2, num){
    console.log("This function return a list of strings with a length greater than a given number")
    let arrRes = []
    for (let i=0; i<arrString2.length; ++i){
        if (arrString2[i].length > num){
            arrRes.push(arrString2[i])
        } 
    }
    return arrRes

}

var arr = [20, 10, 10, 20.60]
console.log(calculSum(arr))
console.log(calculAverage(arr))
var arrStr = ["soum", "loud", "soumaia"]
console.log(longestString(arrStr))
console.log(stringLongerThanNum(arrStr, 4))

var num=3
console.log(recursionNum(num))

console.log("************************************* Part 2: Thinking Methodically *******************************************")
var data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
const sortAge = data.sort((elem1,elem2)=> elem1.age - elem2.age)
console.log("Display data sorted by age\n")
console.log(data)
data.splice(data.findIndex(elem => parseInt(elem.age) > 50),1)
console.log("Filter data to remove entries with an age greater than 50\n")
console.log(data)
console.log("Map the array to change the “occupation” key to “job” and increment every age by 1\n")
const newData = data.map(({occupation: job, age, ...rest}) => ({job, age: parseInt(age)+1, ...rest}));
console.log(newData)
console.log("Use the reduce method to calculate the sum of the ages.")
const sumAllAges = newData.reduce((sum, elem) => sum + elem.age, 0)
console.log(sumAllAges)
console.log("Use the sum to calculate the average of the ages.")
const averageAges = sumAllAges/newData.length
console.log(averageAges)

console.log("************************************* Part 3: Thinking Critically *******************************************")


function recursionNum(number){
    console.log("This function return numbers between 1 and a given number (using recursion not a loop)")
    if(number<=1){
        return 1
    } else {
       return number + " " + recursionNum(number-1)
    }
}

function incrementAge(obj){
    console.log("This function incrument the age in an object or created and set it to 0 if the object does not have age key")
    if (Object.keys(obj).includes("age")){
        obj["age"] +=1
    } else {
        obj["age"] = 0
    }
    obj["updated_at"] = new Date()
}

var obj1 = {"name":"soumaia", "class": "A"}
var obj2 = {"name":"loud", "class": "B", "age":26}
incrementAge(obj1)
incrementAge(obj2)
console.log("first obj : " + obj1.age + " date " + obj2["updated_at"] + " *** second obj : " + obj2.age + " date " + obj2["updated_at"])

let copyObj = { ...obj2 }
incrementAge(copyObj)
console.log("Copy obj : " + copyObj.age + " date " + copyObj["updated_at"])

/************************************* Part 5: Thinking Back *******************************************/



// function compteArea(width, height){
//     let area = width*height
//     console.log("The area of a rectangle with a width of " + width + " and a height of "+height+ " is " + area +" square units.")
// }

// compteArea(5, 7)


// function planetHasWater(planet){
//     if (["earth", "mars"].includes(planet.toLowerCase())) {
//         return true
//     } else {
//         return false
//     }
// }

// res = planetHasWater("MArS")

// console.log(res)

    // here, we would process this data to achieve the desired result.
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    // return result;