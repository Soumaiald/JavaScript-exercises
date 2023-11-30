/************************************** Refactoring old code and Expanding Functionality ******************************************/
console.log("****************** Display csv data properly ****************")
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let allLines = csvData.split('\n')
let allData = []
for (let i=0; i<allLines.length; ++i){
    allData.push(allLines[i].split(','))
}

console.log(allData)

/************************************** Transforming Data ******************************************/
console.log("********************* Transforming Data ******************")

let objData = []
for (let i=0; i<allData.length-1;++i){
    objData.push({})
    for(let j=0; j<allData[i].length; ++j){
        objData[i][allData[0][j].toLowerCase()] = allData[i+1][j]
    }
}
console.log(objData)

/************************************** Sorting and Manipulating Data ******************************************/
console.log("********************* Sorting and Manipulating Data ******************")

objData.pop()
objData.splice(0, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
objData.splice(allData.length-1, 0, { id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(objData)

console.log("*********************** Age average ***********************")
let ageSum = 0
for (let i=0; i<objData.length; ++i){
    ageSum += parseInt(objData[i].age)
}

let ageAvr = ageSum/objData.length
console.log(ageAvr)
/************************************** Full Circle ******************************************/
console.log("********************* Full Circle ******************")
let allKeys = Object.keys(objData[0])
let csvRdata = allKeys.toString()
console.log(allKeys)
for (let i=1; i<objData.length; ++i){
    csvRdata += '\\n'
    for (let j=0; j<allKeys.length; ++j){
        csvRdata +=  objData[i][allKeys[j]] + ","
    }
    csvRdata = csvRdata.slice(0, -1)

}
csvRdata.slice(0, -1)
console.log(csvRdata)



