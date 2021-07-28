const profile = {
    name: 'alex',
    age: 20,
    cords: {
        lat: 0,
        long: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

const { age }: { age: number; } = profile
const { cords: { lat, long } }: { cords: { lat: number; long: number } } = profile