let str = 'abc'
let len = str.length
let result = [], tempStr = ""
for(let i=0; i<len; i++){
    for(let j=0; j<len; j++){
        if(i === j){
            tempStr = str.charAt(i)
            if(tempStr in result === false){
                result.push(tempStr)
            }
        }
        else{
            tempStr = str.charAt(i)+str.charAt(j)
            if(tempStr in result === false){
                result.push(tempStr)
            }
        }
    }
}

console.log(result)