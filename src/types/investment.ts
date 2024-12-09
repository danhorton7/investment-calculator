export interface InvestmentData {
	initialInvestment: number
	annualInvestment: number
	expectedReturn: number
	duration: number
}

export interface AnnualData {
	year: number
	interest: number
	valueEndOfYear: number
	totalInterest: number
	annualInvestment: number
	totalInvestment: number
}
