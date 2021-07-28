// Parent class
// Public - method can be called any where, any time
// Private - method can only be called by other methods in 'this' class
// Protected - method can be called by other methods in 'this' class, or by other methods in child classes
class Vehicle {
    constructor(public color: string) { }

    protected honk(): void {
        console.log('beep')
    }
}

// Inheritance
// Child class, Subclass
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }

    private drive(): void {
        console.log('overide chugga chugga')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// vehicle.drive();
// vehicle.honk();

const anotherVehicle = new Car(4, 'blue')
anotherVehicle.startDrivingProcess()
console.log(anotherVehicle.color)
console.log(anotherVehicle.wheels)
// anotherVehicle.honk()