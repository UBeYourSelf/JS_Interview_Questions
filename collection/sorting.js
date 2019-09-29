

const str1 = 'I love you 123'

console.log(str1.split(' ').sort((a, b) =>{
    console.log("a: ", a.length)
    console.log("b: ", b.length)
    console.log(a.length - b.length)
    return a.length - b.length
}).join(' '))

console.log(str1.split(' ').sort((a, b) => a.length-b.length).join(' '))


