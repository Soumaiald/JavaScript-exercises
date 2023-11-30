function compteArea(width, height){
    let area = width*height
    console.log("The area of a rectangle with a width of " + width + " and a height of "+height+ " is " + area +" square units.")
}

compteArea(5, 7)


function planetHasWater(planet){
    if (["earth", "mars"].includes(planet.toLowerCase())) {
        return true
    } else {
        return false
    }
}

res = planetHasWater("MArS")

console.log(res)