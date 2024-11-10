//  creation of a promise
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randomNumber = Math.random()
        if(randomNumber<0.5){
            resolve(randomNumber)
        }
        else{
            reject(new Error("randomNumber is greater the 0.5"))
        }
    },1000)
})


