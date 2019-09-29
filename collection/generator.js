function *generator(){
    console.log('start')
    let i = 0
    while(true){
        if(i < 3){
            yield i++
        }
    }
}

let gen = generator()

let ret = gen.next()

console.log(ret)
console.log(gen.next())


