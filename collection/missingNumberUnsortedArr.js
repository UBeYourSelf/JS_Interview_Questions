const arr = [1, 5, 2, 6, 4]

let sum = arr.reduce((acc, x) => acc+x, 0)

console.log("sum: ", sum)

let calculatedSum = 6*5/2
console.log("Missing number: ",  sum -calculatedSum)