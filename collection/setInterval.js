function job(callback1, callback2) {
    setTimeout(() =>{
        callback1();
    }, 2000);
    let count = 0;
    let myInterval = setInterval(function callback2(){
        count++;
        console.log("count: ", count)
        if(count >= 3){
            clearInterval(myInterval)
        }
    }, 1000);

}

const func1 = () => console.log("function 1")
const func2 = () => console.log("function 2")

job(func1, func2)

