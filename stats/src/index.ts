import { MatchReader } from './MatchReader'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'
import { HtmlReports } from './reportTargets/HtmlReport'

const matchReader = MatchReader.fromCsv('football.csv')
const summaryStatic = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load()
summaryStatic.buildAndPrintReport(matchReader.matches)


// Inheritance: IS A relationship
// Compositoin: HAS A relationship