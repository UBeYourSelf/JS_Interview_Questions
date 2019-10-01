String.prototype.repeat = function(num){
    let str = ''
    let x = 0
    while(num > x){
        str += this
        x++
    }
    return str
}

console.log("Hello".repeat(3))