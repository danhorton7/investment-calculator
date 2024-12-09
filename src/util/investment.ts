import { AnnualData, InvestmentData } from '../types/investment'

export function calculateInvestmentResults({
	initialInvestment,
	annualInvestment,
	expectedReturn,
	duration,
}: InvestmentData): AnnualData[] {
	// Input validation
	if (duration <= 0 || expectedReturn < 0) {
		throw new Error('Invalid duration or expected return')
	}

	const annualData: AnnualData[] = []

	// Initialize values
	let investmentValue = initialInvestment
	let totalInterest = 0
	let totalInvestment = initialInvestment // Start with initial investment

	for (let i = 0; i < duration; i++) {
		// Calculate interest before adding this year's investment
		const interestEarnedInYear = Number(
			(investmentValue * (expectedReturn / 100)).toFixed(2)
		)

		// Update running totals
		totalInterest += interestEarnedInYear

		// Add this year's investment
		investmentValue += annualInvestment
		totalInvestment += annualInvestment

		// Then add interest earned
		investmentValue += interestEarnedInYear

		annualData.push({
			year: i + 1,
			interest: interestEarnedInYear,
			valueEndOfYear: Number(investmentValue.toFixed(2)),
			totalInterest: Number(totalInterest.toFixed(2)),
			annualInvestment,
			totalInvestment: Number(totalInvestment.toFixed(2)),
		})
	}
	/**
	 * Currency formatter for consistent monetary value display
	 */

	return annualData
}
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
})
