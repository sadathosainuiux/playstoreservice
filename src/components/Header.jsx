import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src="/assets/logo.png" alt="Hero IO Logo" />
          <span>Hero IO</span>
        </Link>

        <nav className="header-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/apps" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Installation
          </NavLink>
        </nav>

        <a
          href="https://github.com/sadathosainuiux"
          target="_blank"
          rel="noopener noreferrer"
          className="header-contribution-btn"
        >
          <FaGithub />
          <span>Contribution</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
