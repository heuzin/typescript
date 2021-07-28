const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inferene when extractin values
const cars = carMakers[0] // string
const myCar = carMakers.pop() // string 

// Prevent incompatible values
carMakers.push(2)

// Help with functions 'map' 'forEach' 
carMakers.map((car: string): string => {
    return car.toLocaleUpperCase()
})

// Flexible types
const importandDates: (string | Date)[] = [new Date(), '2030-10-10']