import logo from '../images/logo.png';

export default function Footer() {
  return (
    <div className="container-footer">
    <img src={logo} alt="Logo"className='logo-footer'/>
    <ul>
        <li className='text-footer'>Партнерам</li>
        <li className='text-footer'>Разработчикам</li>
        <li className='text-footer'>Вакансии</li>
    </ul>    
</div>
  )
}
