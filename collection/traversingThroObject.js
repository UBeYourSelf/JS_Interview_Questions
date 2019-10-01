// var obj = {a: "one", b: "two", c: "three"} => "a=one&b=two&c=three"

let obj = {a: "one", b: "two", c: "three"} 
//Option 1:
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(`${key}:${obj[key]}`)
    }
}

//Option 2
for(let key of Object.keys(obj)){
    console.log(`${key} = ${obj[key]}`)
}