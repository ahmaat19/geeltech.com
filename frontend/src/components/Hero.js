import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Hero = () => {
  return (
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
  )
}

export default Hero
