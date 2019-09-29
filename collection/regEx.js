let str1 = 'aabc 123 ABCDEF #$%'

let email = "test@yahoo.com"

console.log(str1.replace(/a.c/ig, '-'))

//let regEx = RegExp('@|.', 'g')

//let regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g
let regEx = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}/g

//let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

console.log(regEx.test(email))
