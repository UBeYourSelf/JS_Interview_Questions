const str = 'I love you'

//console.log(str.split('').reverse().join(''))

String.prototype.myNewReverse = function(){
    let result = ''
    let len = this.length
    console.log(len)
    for(let i=len-1;i>=0;i--){
        result += this[i]
    }
    return result
}

console.log(str.myNewReverse())

String.prototype.myReverse = function(){
    return this.split('').reverse().join('')
}

console.log(str.myReverse())

