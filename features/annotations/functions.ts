// If no return annotation typescript does not throw an error if nothing is returned from function
const add = (a: number, b: number): number => {
    return a + b
}

const subtract = (a: number, b: number): number => {
    return a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
    // can return null or undefined
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const throwErrorString = (message: string): string => {
    if (!message) {
        throw new Error(message)
    }
    return message
}

const todaysWeather = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)