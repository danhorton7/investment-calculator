import { useState } from 'react'
import ControlPanel from './Components/ControlPanel/ControlPanel'
import Header from './Components/Header/Header'
import Result from './Components/Result/Result'
import React from 'react'

const App = () => {
	const [investmentData, setInvestmentData] = useState({
		initialInvestment: 12000,
		annualInvestment: 500,
		expectedReturn: 6,
		duration: 12,
	})

	const handleInputChange =
		(identifier: keyof typeof investmentData) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInvestmentData((prevData) => ({
				...prevData,
				[identifier]: Number(e.target.value),
			}))
		}

	return (
		<>
			<Header />
			<ControlPanel handleInputChange={handleInputChange} />
			<Result investmentData={investmentData} />
		</>
	)
}

export default App
