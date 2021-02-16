import React from 'react'
import {
  FaArrowAltCircleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaSignInAlt,
} from 'react-icons/fa'
import logo from '../logo.png'

const Header = () => {
  return (
    <>
      <div className='sticky-top nav-top'>
        <nav class='navbar navbar-expand-sm navbar-light bg-transparent'>
          <div class='container'>
            <a class='navbar-brand' href='#'>
              <img
                src={logo}
                className='img-fluid'
                alt='logo'
                style={{ width: '80px' }}
              />
            </a>
            <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a
                  class='nav-link '
                  aria-current='page'
                  href='tel:+252615301507'
                >
                  <FaPhoneAlt className='icon-color' /> +252 61 530 1507
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link '
                  aria-current='page'
                  href='mailto:info@geeltech.com'
                >
                  <FaEnvelope className='icon-color' /> info@geeltech.com
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav class='navbar navbar-expand-md navbar-light bg-transparent'>
          <div class='container'>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav m-auto mb-2 mb-lg-0'>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#home'
                  >
                    HOME
                  </a>
                </li>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#about'
                  >
                    ABOUT
                  </a>
                </li>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#services'
                  >
                    SERVICES
                  </a>
                </li>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#strategy'
                  >
                    STRATEGY
                  </a>
                </li>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#works'
                  >
                    WORKS
                  </a>
                </li>
                <li class='nav-item mx-3 '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#contact'
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header className='text-center pt-5 container' id='home'>
        <h2 className=' fw-lighter'>WELCOME TO</h2>
        <h1
          className='display-1 text-success fw-bold py-4'
          style={{ letterSpacing: '30px' }}
        >
          GEEL TECH
        </h1>
        <p className='fw-lighter fs-2 pb-5 mb-5'>
          We Offer Modern Solutions For Growing Your Business.
        </p>

        <a
          href='#about'
          className='btn btn-success py-3 px-5 rounded-pill shadow'
        >
          GET STARTED <FaArrowAltCircleRight />
        </a>
      </header>
    </>
  )
}

export default Header
