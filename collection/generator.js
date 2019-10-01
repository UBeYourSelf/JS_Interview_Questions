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

//================================
function * iterator(str){
    let i = 0
    let len = str.length
    while(i<len){
        yield(str.charAt(i))
        i++
    }   
    yield(null)
}

var myiterator = iterator("test");
console.log(myiterator.next().value) 
console.log(myiterator.next().value)
console.log(myiterator.next().value)
console.log(myiterator.next().value)
console.log(myiterator.next().value)


