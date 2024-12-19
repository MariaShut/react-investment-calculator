import logo from '../assets/investment-calculator-logo.png'

export const Header = () => {
  return (
    <header className='header'>
      <img className='header__image' src={logo} alt="Logo showing a money bag" />
      <h1 className='header__title'>Investment Calculator</h1>
    </header>
  )
}