export class Attributes<T> {
    constructor(private data: T) { }

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key]
    }

    set(update: T): void {
        Object.assign(this.data, update); // takes first argument and overites it with second argument
    }
}