const arr = [2, 2, 3, 4]

// let sum = arr.reduce((acc, x) => acc+x, 0)

let sum = arr.reduce((acc, x) =>{
    return acc+x
}, 0)
console.log("sum of elements in an array is: ", sum)