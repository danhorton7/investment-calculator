import styles from './Header.module.css'
import logo from '../../assets/investment-calculator-logo.png'

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src={logo} alt='A bag of money logo' />
			<h1 className={styles.title}>Investment Calculator</h1>
		</div>
	)
}

export default Header
