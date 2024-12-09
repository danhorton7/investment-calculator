import { calculateInvestmentResults, formatter } from '../../util/investment'
import { InvestmentData } from '../../types/investment'
import { memo } from 'react'
import styles from './Result.module.css'

interface ResultProps {
	investmentData: InvestmentData
}

const Result = memo(({ investmentData }: ResultProps) => {
	let resultsData = null

	try {
		resultsData = calculateInvestmentResults(investmentData)
	} catch (error: unknown) {
		return (
			<section className={styles.center}>
				<h1>Something went wrong!</h1>
				{error instanceof Error
					? error.message
					: 'An unexpected error occurred'}
			</section>
		)
	}

	return (
		<table className={styles.resultTable} role="grid" aria-label="Investment Results">
			<thead>
				<tr>
					<th scope="col">Year</th>
					<th scope="col">Total Capital Invested</th>
					<th scope="col">Interest (Year)</th>
					<th scope="col">Total Interest</th>
					<th scope="col">Investment Value</th>
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
})

export default Result
