import { NavLink } from 'react-router-dom';
import myLogo from '../assets/logo.png';
import githubLogo from '../assets/github-logo.png';

const NavBar = () => (

    <header>
        <img src={myLogo} alt="Logo" className='my-logo'/>
        <h1>IDARESIT&apos;S <img src={githubLogo} alt="Logo" /> REPOSITORIES</h1>
        <nav>
            <NavLink to="/" activeClassName='active-link'>Home</NavLink>
            <NavLink to="/about" activeClassName='active-link'>About</NavLink>
            <NavLink to="/contact" activeClassName='active-link'>Contact Me</NavLink>
        </nav>
    </header>
);
    
export default NavBar;