
let num = 255
console.log("By toString: ", num.toString(2))

const deciToBinary = (x) =>{
    if(isNaN(x)){
        return "Not a number"
    }
    return Number(x).toString(2)
}

console.log(`decitoBinary: `, deciToBinary(10))