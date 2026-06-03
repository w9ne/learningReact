import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggle } = useTheme();

  //restructure nav bar logic to add dark/light mode
  return (
    <nav style={{
      background: theme === 'dark'
        ? 'linear-gradient(to right, #1f0808, #010a13)'
        : 'linear-gradient(to right, #f0f0f0, #ffffff)',
      display: 'flex',
      gap: '16px',
      padding: '16px',
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