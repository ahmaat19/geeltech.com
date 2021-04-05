import React from 'react'

const Clients = () => {
  return (
    <div id='clients' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Our <span className='text-success'>Clients</span>{' '}
          <div className='row'>
            <div className='col-6 col-sm-6 col-md-3 col-lg-2'>
              <img
                src='https://www.flaticon.com/svg/vstatic/svg/4469/4469811.svg?token=exp=1617613104~hmac=f790ed4269805dc486ed600e3acfe828'
                alt='brand'
                className='img-fluid'
              />
            </div>
            <div className='col-6 col-sm-6 col-md-3 col-lg-2'>
              <img
                src='https://www.flaticon.com/svg/vstatic/svg/4469/4469811.svg?token=exp=1617613104~hmac=f790ed4269805dc486ed600e3acfe828'
                alt='brand'
                className='img-fluid'
              />
            </div>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Clients
