import { Link } from 'react-router-dom';

function Navbar() {
  return (
    /* cool lookin nav bar */
    <nav style={{
      display: 'flex',
      gap: '16px',
      padding: '16px',
      background: 'linear-gradient(to right, #1f0808, #010a13)',
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;