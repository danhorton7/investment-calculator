import { calculateInvestmentResults, formatter } from '../../util/investment'
import { InvestmentData } from '../../types/investment'

interface ResultProps {
	investmentData: InvestmentData
}

const Result = ({ investmentData }: ResultProps) => {
	let resultsData = null

	try {
		resultsData = calculateInvestmentResults(investmentData)
	} catch (error: unknown) {
		return (
			<section style={{ margin: '2rem auto', textAlign: 'center' }}>
				{' '}
				<h1>Something went wrong!</h1>
				{error instanceof Error
					? error.message
					: 'An unexpected error occurred'}
			</section>
		)
	}

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
