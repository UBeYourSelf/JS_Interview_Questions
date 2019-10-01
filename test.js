
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

