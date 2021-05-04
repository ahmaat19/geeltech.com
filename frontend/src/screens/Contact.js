import React from 'react'
import {
  FaComments,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaPenAlt,
} from 'react-icons/fa'

const About = () => {
  return (
    <div id='contact' className='pt-5'>
      <div className='container my-5 text-center'>
        <div className='row'>
          <div className='col-lg-7 col-md-5 col-sm-12 col-12 mx-auto'>
            <h1 className='fw-bold'>
              Lets Get Started <br /> Your Project
            </h1>
            <p className='fw-lighter pt-4'>
              We’ll help to achieve your goals and to grow business
            </p>

            <a
              href='/#contact'
              className='btn btn-success py-3 px-5 my-5 rounded-pill shadow'
            >
              LET'S TALK <FaComments />
            </a>
          </div>
        </div>

        <div className='row gy-5 pt-5'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaMobileAlt className='contact-icon mx-auto text-success' />
              <div className='card-body'>
                <h5 className='card-title text-success'>Call Us </h5>
                <p className='card-text fw-lighter'>
                  <a className='contact-us-links' href='tel:+252615301507'>
                    +252 61 530 1507
                  </a>
                  <br />
                  <a className='contact-us-links' href='tel:+252618237779'>
                    +252 61 823 7779
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaPenAlt className='contact-icon mx-auto text-success' />
              <div className='card-body'>
                <h5 className='card-title text-success'>Write Us </h5>
                <p className='card-text fw-lighter'>
                  <a
                    className='contact-us-links'
                    href='mailto:info@geeltech.com'
                  >
                    info@geeltech.com
                  </a>
                  <br />
                  <a
                    className='contact-us-links'
                    href='mailto:ahmaat19@gmail.com'
                  >
                    ahmaat19@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0 p-2'>
              <FaMapMarkedAlt className='contact-icon mx-auto text-success' />
              <div className='card-body'>
                <h5 className='card-title text-success'>Visit Us </h5>
                <p className='card-text fw-lighter'>
                  <span>
                    Makka Almukaramh <br /> Mogadishu, Somalia
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
