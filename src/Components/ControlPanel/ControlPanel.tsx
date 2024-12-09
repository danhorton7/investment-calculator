import { InvestmentData } from '../../types/investment'
import styles from './ControlPanel.module.css'

interface ControlPanelProps {
	handleInputChange: (identifier: keyof InvestmentData) =>
		(e: React.ChangeEvent<HTMLInputElement>) => void
	investmentData: InvestmentData
	onCalculate: () => void
}

const ControlPanel = ({ handleInputChange, investmentData, onCalculate }: ControlPanelProps) => {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initial_investment'>Initial Investment</label>{' '}
					<input
						id='initial_investment'
						onChange={handleInputChange('initialInvestment')}
						type='number'
						required
						value={investmentData.initialInvestment}
					/>
				</p>
				<p>
					<label htmlFor='annual_investment'>Annual Investment</label>{' '}
					<input
						id='annual_investment'
						type='number'
						onChange={handleInputChange('annualInvestment')}
						required
						value={investmentData.annualInvestment}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label htmlFor='expected_return'>Expected Return</label>{' '}
					<input
						type='number'
						onChange={handleInputChange('expectedReturn')}
						required
						id='expected_return'
						value={investmentData.expectedReturn}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>{' '}
					<input
						id='duration'
						onChange={handleInputChange('duration')}
						type='number'
						required
						value={investmentData.duration}
					/>
				</p>
			</div>
			<div className={styles.actions}>
				<button onClick={onCalculate}>Calculate Investment</button>
			</div>
		</section>
	)
}

export default ControlPanel
