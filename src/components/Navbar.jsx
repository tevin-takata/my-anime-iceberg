import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container-fluid">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link>Privacy Policy</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}