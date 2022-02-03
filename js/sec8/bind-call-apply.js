// Bind
const helloWorld = {
    name: "Moumen",
    age: 100,
    callMoumen(startMessage, endMessage) {
        return `${startMessage} ${this.name} is age ${this.age} ${endMessage}`
    }
}

// const callMoumen = helloWorld.callMoumen.bind({name: "John", age: 400})

// callMoumen();

// Call

helloWorld.callMoumen.call({name: "John", age: 400}, "hello", "Bye")

// Apply
const welcomePerson = {
    name: "Moumen",
    age: 100,
    welcomePersonMessage(startMessage, endMessage) {
        return `${startMessage} ${this.name} ${this.age} ${endMessage}`
    }
}

const printWelcomePerson = welcomePerson.welcomePersonMessage.apply(welcomePerson, [40, "Bye!"])

console.log(printWelcomePerson)
