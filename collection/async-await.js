console.log("person 1 ticket")
console.log("person 2 ticket")

const Premovie = async () =>{
    const promiseWifeBringTicket = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('Person 3: ticket')
        }, 3000)
    })

    const ticket = await promiseWifeBringTicket

    const promisePopcorn = new Promise((resolve, reject) => resolve('popcorn'))
    const popcorn = await promisePopcorn

    const promiseButter = new Promise((resolve, reject) => resolve('butter'))
    const butter = await promiseButter

    return Promise.all([ticket, popcorn, butter])
}

Premovie().then(t => console.log(`${t}`))

console.log("person 4 ticket")
console.log("person 5 ticket")