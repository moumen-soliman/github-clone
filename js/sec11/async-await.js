function helloAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("promise resolve after 2 seconds")
        }, 2000)
    })
}

const resolovePromiseCaller = async () => {
    const result = await helloAfter5Seconds();
    console.log("start");
    console.log(result)
}

resolovePromiseCaller()