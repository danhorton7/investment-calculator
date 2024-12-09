const ControlPanel = ({ handleInputChange }) => {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initial_investment'>Initial Invvestment</label>{' '}
					<input
						id='initial_investment'
						onChange={handleInputChange('initialInvestment')}
						type='number'
						required
					/>
				</p>
				<p>
					<label htmlFor='annual_investment'>Annual Investment</label>{' '}
					<input
						id='annual_investment'
						type='number'
						onChange={handleInputChange('annualInvestment')}
						required
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
					/>
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>{' '}
					<input
						id='duration'
						onChange={handleInputChange('duration')}
						type='number'
						required
					/>
				</p>
			</div>
		</section>
	)
}

export default ControlPanel
