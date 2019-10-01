String.prototype.repeat = function(num){
    let str = ''
    let x = 0
    if(num === 0){
        return str
    }
    while(num > x){
        str += this
        x++
    }
    return str
}

console.log("Hello".repeat(3))