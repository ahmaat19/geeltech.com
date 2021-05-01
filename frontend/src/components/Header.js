import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  FaCog,
  FaFileContract,
  FaPhoneAlt,
  FaPlusCircle,
  FaPowerOff,
  FaSignInAlt,
  FaUser,
  FaUserCircle,
  FaUserPlus,
  FaUsers,
  FaEnvelope,
} from 'react-icons/fa'
import { resetUpdateUser, logout } from '../redux/users/usersSlice'
import logo from '../images/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(resetUpdateUser())
  }

  const authLinks = (
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
      <li className='nav-item dropdown'>
        <span
          className='nav-link dropdown-toggle'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <FaUserCircle className='mb-1' /> {userInfo && userInfo.name}
        </span>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
          <li>
            <Link to='/profile' className='dropdown-item'>
              <FaUser className='mb-1' /> Profile
            </Link>
          </li>
        </ul>
      </li>

      {userInfo && userInfo.roles.includes('Admin') && (
        <>
          <li className='nav-item dropdown '>
            <span
              className='nav-link dropdown-toggle'
              id='navbarDropdown'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <FaCog className='mb-1' /> Admin
            </span>
            <ul className='dropdown-menu ' aria-labelledby='navbarDropdown'>
              <li>
                <Link to='/admin/users' className='dropdown-item'>
                  <FaUsers className='mb-1' /> Users
                </Link>
              </li>
              <li>
                <Link to='/admin/users/logs' className='dropdown-item'>
                  <FaFileContract className='mb-1' /> Users Log
                </Link>
              </li>
              <li>
                <Link to='/admin/users/quotation' className='dropdown-item'>
                  <FaFileContract className='mb-1' /> Quotation
                </Link>
              </li>
            </ul>
          </li>
        </>
      )}
      <li className='nav-item'>
        <Link to='/' onClick={logoutHandler} className='nav-link'>
          <FaPowerOff className='mb-1' /> Logout
        </Link>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#home'>
          Home
        </a>
      </li>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#about'>
          About
        </a>
      </li>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#services'>
          Services
        </a>
      </li>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#process'>
          Process
        </a>
      </li>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#works'>
          Works
        </a>
      </li>
      <li className='nav-item '>
        <a className='nav-link  active ' aria-current='page' href='#contact'>
          Contact Us
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link   btn btn-success rounded-pill shadow py-2'
          aria-current='page'
          href='mailto:info@geeltech.com'
        >
          <FaEnvelope className='icon-color' /> info@geeltech.com
        </a>
      </li>
    </ul>
  )

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} className='img-fluid brand-logo' alt='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav sr-auto mb-2 mb-lg-0'></ul>
            {userInfo ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
