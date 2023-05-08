import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/useful">Useful</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/about">About & Info</Link>
      </nav>
      <div className="logo">Organizer</div>
    </header>
  );
}