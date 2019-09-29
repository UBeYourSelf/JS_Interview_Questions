
String.prototype.isPrime = function(){
    let divisor = 2
    let bool = false
    //num = 91
    for( ; divisor < this; divisor++){
        if(this%divisor === 0){
            console.log(`Divisor is ${divisor}`)
            console.log(`${this} is not prime`)
            break
        }
        else{
            if(this-divisor === 1){
                console.log(`${this} is prime`)
            }
        }
    }
}

console.log('37'.isPrime())


