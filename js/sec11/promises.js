function generatePlusNumber(newNumber) {
    const generateValue = new Promise((resolve, reject) => {
        reject();
        resolve(`Here is your new number ${newNumber}`)
    })

    return generateValue;
}

const plus50Promise = generatePlusNumber(50);
const plus150Promise = generatePlusNumber(150);
const plus200Promise = generatePlusNumber(200);
const plus300Promise = generatePlusNumber(300);

const promiseArr = Promise.race([plus150Promise, plus50Promise, plus200Promise, plus300Promise])

promiseArr.then((res) => console.log(res))


console.log(plus50Promise, plus150Promise)

async function calculateAge() {
    const calculateAgeValue = await generatePlusNumber(2000).catch(err => {
        console.error("Heeey there's err")
    })
    console.log(calculateAgeValue)
}
calculateAge()