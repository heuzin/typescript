import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// const reader = new MatchReader('football.csv')
// reader.read()
const csvFileReader = new CsvFileReader('football.csv')

// Create an object that satisfies the 'DataReader' interface
// Create an nstance of MatchReader and pass ni somtehing satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)

// Inheritance: IS A relationship
// Compositoin: HAS A relationship
