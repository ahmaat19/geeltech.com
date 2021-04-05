import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import online_connection from '../images/online_connection.svg'

const Hero = () => {
  return (
    <header id='home' className=''>
      <div className='row g-5 py-5'>
        <div className='col-sm-12 col-12  col-md-6'>
          <div className='pt-5 container'>
            <p>
              Welcome to
              <span className='text-success fw-bold'> Geel Tech</span>
            </p>
            <h1 className='fw-bold font-smaller  pb-5  my-3'>
              We Offer Modern Solutions For Growing Your Business.
            </h1>

            <a
              href='#about'
              className='btn btn-success py-3 px-5 rounded-pill shadow'
            >
              GET STARTED <FaArrowAltCircleRight />
            </a>
          </div>
        </div>
        <div className='col-sm-12 col-12  col-md-6'>
          <img
            src={online_connection}
            alt='work together'
            className='img-fluid'
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
