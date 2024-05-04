
import img from '../assets/stanley-t-is-marketing-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="">
        <div className="logo">
          <img src={img} alt="Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#get-started">Get Started</a></li>
            <li><a href="#home">Features</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
