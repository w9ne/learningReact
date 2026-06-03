import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggle, styles } = useTheme();

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
    </nav>
  );
}