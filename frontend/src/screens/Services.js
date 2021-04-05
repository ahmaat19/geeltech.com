import React from 'react'
import marketing from '../images/marketing.png'
import development from '../images/development.png'
import ecommerce from '../images/ecommerce.png'
import seo from '../images/seo.png'
import branding from '../images/branding.png'
import web_design from '../images/web_design.png'

const Services = () => {
  return (
    <div id='services' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Check Our <span className='text-success'>Services</span>{' '}
        </h2>
        <div className='row g-5 pt-3'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={web_design}
                alt='Web Design'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Web Design </h5>
                <p className='card-text fw-lighter'>
                  Powerful web design that will out-perform your strongest
                  competitors.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={development}
                alt='Development'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Development </h5>
                <p className='card-text fw-lighter'>
                  Custom programming for most complex functions you can think.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={ecommerce}
                alt='Ecommerce'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Ecommerce </h5>
                <p className='card-text fw-lighter'>
                  We build your online store using a flexible, modular platform
                  that allows you to expand…
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={seo}
                alt='SEO Optimization'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>SEO Optimization </h5>
                <p className='card-text fw-lighter'>
                  Optimizing our web designs to rank on the first page of google
                  is our specialty.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={marketing}
                alt='Marketing'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Marketing </h5>
                <p className='card-text fw-lighter'>
                  We use strategic marketing tactics that have been proven to
                  work.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 '>
            <div className='card bg-transparent border-0'>
              <img
                src={branding}
                alt='Branding'
                className='card-img-top w-25 mx-auto service-img p-2'
              />
              <div className='card-body'>
                <h5 className='card-title text-success'>Branding </h5>
                <p className='card-text fw-lighter'>
                  A solid brand strategy, logo and guidelines help you to get
                  You recognized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
