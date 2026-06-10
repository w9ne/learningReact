import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const { theme, toggle, styles } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  //restructure nav bar logic to add dark/light mode
  //moved to themecontext instead for better structuring
  return (
    <nav style={{
      background: styles.nav, 
      display: 'flex', 
      gap: '16px', 
      padding: '16px'
    }}>
      <button onClick={toggle}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
       <button onClick={handleLogout} style={{ color: styles.text }}>
        Logout
      </button>
    </nav>
  );
}