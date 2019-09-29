console.log("Person 1: ticket")
console.log("Person 2: ticket")

const promiseWifeBringTicket = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticket')
    }, 3000)
})

const promisePopcorn = promiseWifeBringTicket.then(t =>{
    return new Promise((resolve, reject) => resolve(`Person 3: ${t}`))
})

const promiseButter = promisePopcorn.then(t =>{
    return new Promise((resolve, reject) => resolve(`${t} Popcorn`))
})

promiseButter.then(t => console.log(`${t} butter`))

console.log("Person 4: ticket")
console.log("Person 5: ticket")