import { useState } from 'React';
import '../styles/navbar.css';

export default function() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <nav className="Navigation">
      <a href="/" className="Logo">Navah Harvest</a>
      <button className="Menu" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>Menu</button>
      <div className={ isNavExpanded ? "Navigation-Menu Expanded" : "Navigation-Menu" }>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}