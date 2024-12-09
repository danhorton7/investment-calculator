export const DEFAULT_INVESTMENT_DATA = {
	initialInvestment: 12000,
	annualInvestment: 690,
	expectedReturn: 6,
	duration: 12,
} as const

export const CURRENCY_FORMAT_OPTIONS = {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
} as const
