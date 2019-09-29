let arr = [1, 3, 3, 3, 2, 5, 2, 4, 1]
const len = arr.length
let resultArr = []

for(let i=0; i < len; i++){
    if(resultArr.indexOf(arr[i]) === -1){
        resultArr.push(arr[i])
    } 
}
console.log(resultArr)