import React from 'react'
import strategy from '../images/strategy.jpg'
import design from '../images/design.jpg'
import support from '../images/support.jpg'
import develop from '../images/develop.jpg'

const Strategies = () => {
  return (
    <div
      className='container-fluid py-5 my-5 text-center strategy'
      id='strategy'
    >
      <h2 className='fw-bold '>
        Our <span className='text-success'>Process</span>
      </h2>

      <div className='container'>
        <div className='row gy-5 pt-3 mt-3'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <h1 className='text-light'>
              <span
                className='fw-bolder text-success'
                style={{ fontSize: '300%' }}
              >
                01
              </span>
              Strategy
            </h1>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <img
              src={strategy}
              alt='Strategy'
              className='img-fluid rounded-pill w-75 border border-success border-5'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 text-success fw-light my-auto text-start'>
            <p>
              We define your competition and target audience. Discover what is
              working in your online industry, then design your website
              accordingly.
            </p>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 text-success fw-light my-auto text-end'>
            <p>
              Color scheme, layout, sitemap, and style. We will bring your brand
              to life with a one of a kind masterpiece, built just for you.
            </p>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <img
              src={design}
              alt='Design'
              className='img-fluid rounded-pill w-75 border border-success border-5'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <h1 className='text-light'>
              Design
              <span
                className='fw-bolder text-success'
                style={{ fontSize: '300%' }}
              >
                02
              </span>
            </h1>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <h1 className='text-light'>
              <span
                className='fw-bolder text-success'
                style={{ fontSize: '300%' }}
              >
                03
              </span>
              Develop
            </h1>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <img
              src={develop}
              alt='Develop'
              className='img-fluid rounded-pill w-75 border border-success border-5'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 text-success fw-light my-auto text-start'>
            <p>
              We turn your ideas into a reality. &our website is placed on a
              "development server" where you get to watch the whole process,
              live.
            </p>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 text-success fw-light my-auto text-end'>
            <p>
              This is where you go live, to the world. Design, marketing, and
              maintenance; we'll be at your side for the life of your site.
            </p>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <img
              src={support}
              alt='Support'
              className='img-fluid rounded-pill w-75 border border-success border-5'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-2 my-auto'>
            <h1 className='text-light'>
              Support
              <span
                className='fw-bolder text-success'
                style={{ fontSize: '300%' }}
              >
                04
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategies
