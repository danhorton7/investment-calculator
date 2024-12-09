import { useState } from 'react'
import ControlPanel from './Components/ControlPanel/ControlPanel'
import Header from './Components/Header/Header'
import Result from './Components/Result/Result'
import React from 'react'
import { DEFAULT_INVESTMENT_DATA } from './constants/investment'
import { InvestmentData } from './types/investment'

const App = () => {
	const [userInputs, setUserInputs] = useState(DEFAULT_INVESTMENT_DATA)
	const [investmentData, setInvestmentData] = useState<InvestmentData | null>(null)

	const handleInputChange =
		(identifier: keyof typeof userInputs) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = Number(e.target.value)
			if (isNaN(value)) return

			setUserInputs((prevData) => ({
				...prevData,
				[identifier]: value,
			}))
		}

	const handleCalculate = () => {
		setInvestmentData(userInputs)
	}

	return (
		<>
			<Header />
			<ControlPanel
				handleInputChange={handleInputChange}
				investmentData={userInputs}
				onCalculate={handleCalculate}
			/>
			{investmentData && <Result investmentData={investmentData} />}
		</>
	)
}

export default App
