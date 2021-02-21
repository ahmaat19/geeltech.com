import React from 'react'
import { FaArrowAltCircleRight, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import logo from '../logo.png'

const Header = () => {
  return (
    <>
      <div className='sticky-top nav-top'>
        <nav class='navbar navbar-expand-lg navbar-light bg-transparent'>
          <div class='container'>
            <a class='navbar-brand' href='#home'>
              <img
                src={logo}
                className='img-fluid'
                alt='logo'
                style={{ width: '70px' }}
              />
            </a>
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
              <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#home'
                  >
                    Home
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#about'
                  >
                    About
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#services'
                  >
                    Services
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#process'
                  >
                    Process
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#works'
                  >
                    Works
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-success'
                    aria-current='page'
                    href='#contact'
                  >
                    Contact Us
                  </a>
                </li>
                <li class='nav-item'>
                  <a
                    class='nav-link  btn btn-light rounded-pill shadow '
                    aria-current='page'
                    href='tel:+252615301507'
                  >
                    <FaPhoneAlt className='icon-color' /> +252 61 530 1507
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <header id='home' className='pt-5'>
        <div className='text-center pt-5 container'>
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
        </div>
      </header>
    </>
  )
}

export default Header
