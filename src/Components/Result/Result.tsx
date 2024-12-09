import { calculateInvestmentResults, formatter } from '../../util/investment'
import { InvestmentData } from '../../types/investment'

interface ResultProps {
	investmentData: InvestmentData
}

const Result = ({ investmentData }: ResultProps) => {
	const resultsData = calculateInvestmentResults(investmentData)

	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Capital Invested</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Investment Value</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((entry) => (
					<tr key={entry.year}>
						<td>{entry.year}</td>
						<td>{formatter.format(entry.totalInvestment)}</td>
						<td>{formatter.format(entry.interest)}</td>
						<td>{formatter.format(entry.totalInterest)}</td>
						<td>{formatter.format(entry.valueEndOfYear)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Result
