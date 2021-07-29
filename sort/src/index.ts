import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -1])
numbersCollection.sort()
console.log(numbersCollection.data)
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Matheus')
charactersCollection.sort()
console.log(charactersCollection.data)
// const sorterCharacter = new Sorter(charactersCollection)
// sorterCharacter.sort()
// console.log(charactersCollection.data)

const linkedListCollection = new LinkedList()
linkedListCollection.add(500)
linkedListCollection.add(10)
linkedListCollection.add(-2)
linkedListCollection.add(4)
linkedListCollection.sort()
// const sorterLinkedList = new Sorter(linkedListCollection)
// sorterLinkedList.sort()
linkedListCollection.print()