import React from 'react'
import wirdo from '../images/wirdo.png'
import cerid from '../images/cerid.png'
import samtec from '../images/samtec.png'
import farshaxan from '../images/farshaxan.png'
import valleyseedenterprise from '../images/valleyseedenterprise.png'
import yardimeli from '../images/yardimeli.png'

const Clients = () => {
  return (
    <div id='clients' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Our <span className='text-success'>Clients</span> <br />
          <span className='fw-lighter fs-6 '> We've developed for</span>
          <div className='row gy-4 mt-4'>
            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img src={yardimeli} alt='yardimeli' className='img-fluid' />
            </div>

            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img src={cerid} alt='cerid' className='img-fluid' />
            </div>

            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img src={farshaxan} alt='farshaxan' className='img-fluid' />
            </div>

            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img src={samtec} alt='samtec' className='img-fluid' />
            </div>

            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img
                style={{ minHeight: '1rem' }}
                src={valleyseedenterprise}
                alt='valley seed enterprise'
                className='img-fluid'
              />
            </div>
            <div className='col-6 col-sm-6 col-md-3 col-lg-2 col-12 mx-auto'>
              <img src={wirdo} alt='wirdo' className='img-fluid' />
            </div>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Clients
