import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="container">
            <img src={logo} alt="Logo" />
            <ul className='nav'>
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>    
        </div>
    )
}

export default Header;