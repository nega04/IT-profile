import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">Cognizant Careers</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Skill Check</Link>
          <Link to="/industries">Why Join</Link>
          <Link to="/contact">Apply Now</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
