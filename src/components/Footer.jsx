import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';
import './Footer.css';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Hero IO" />
              <span>Hero IO</span>
            </Link>
            <p className="footer-tagline">
              Discover and install the best apps. Trusted by millions of users worldwide.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/apps">All Apps</Link>
              <Link to="/installation">Installation</Link>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">Play Store</a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">App Store</a>
              <a href="https://github.com/sadathosainuiux" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Hero IO. Made with <FaHeart className="footer-heart" /> by Sadat
          </p>
          <div className="footer-socials">
            <a href="https://github.com/sadathosainuiux" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
