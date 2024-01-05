import { Link } from 'react-router-dom';
import LogoRed from './assets/images/logoRed.svg';

import './styles/main.scss'

function Header() {
    return (
      <header>
        <nav className='navBar'>
          <Link to="/">
            <img src={LogoRed} alt="Logo Kasa" />
          </Link>
          <div className='link'>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;