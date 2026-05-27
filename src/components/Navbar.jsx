import { Link } from 'react-router-dom';

function Navbar() {
  return (
    /* cool lookin nav bar */
    <nav style={{
      display: 'flex',
      gap: '16px',
      padding: '16px',
      backgroundColor: '#333',
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;