import { Link } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="appname">
        <Link to='/'>
          <h2>Reservation System</h2>
        </Link>
      </div>

      <nav className="menu">
        <Link to='/'>
          <span>Dashboard</span>
        </Link>
        <Link to='/doctors'>
          <span>Doctors</span>
        </Link>
        <Link to='/patients'>
          <span>Patients</span>
        </Link>
        <Link to='/reservations'>
          <span>Reservations</span>
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar