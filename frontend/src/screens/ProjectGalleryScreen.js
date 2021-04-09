import React from 'react'
import digital_archive from '../images/digital_archive.jpg'
import hr from '../images/hr.jpg'
import blood from '../images/blood.jpg'
import beydan from '../images/beydan.jpg'
import sada from '../images/sada.jpg'

import DztImageGalleryComponent from 'reactjs-image-gallery'

const ProjectGallery = () => {
  var data = [
    {
      url: digital_archive,
      title: 'Digital Archive',
      thumbUrl: digital_archive,
    },
    {
      url: beydan,
      title: 'Coffee Shop Website',
      thumbUrl: beydan,
    },
    {
      url: hr,
      title: 'Human Resource Management System',
      thumbUrl: hr,
    },
    {
      url: sada,
      title: 'Fast Food Website',
      thumbUrl: sada,
    },
    {
      url: blood,
      title: 'Blood Bank System',
      thumbUrl: blood,
    },
  ]

  return (
    <div id='works' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Our <span className='text-success'>Project Gallery</span>{' '}
        </h2>

        <nav className='navbar navbar-expand-sm navbar-light bg-transparent'>
          <div className='container'>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
                <li className='nav-item mx-3 '>
                  <a
                    className='nav-link active  work-link'
                    aria-current='page'
                    href=''
                  >
                    All
                  </a>
                </li>
                <li className='nav-item mx-3 '>
                  <a
                    className='nav-link active  work-link'
                    aria-current='page'
                    href=''
                  >
                    Web Design
                  </a>
                </li>
                <li className='nav-item mx-3 '>
                  <a
                    className='nav-link active  work-link'
                    aria-current='page'
                    href=''
                  >
                    Web App
                  </a>
                </li>
                <li className='nav-item mx-3 '>
                  <a
                    className='nav-link active  work-link'
                    aria-current='page'
                    href=''
                  >
                    Branding
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='row g-5 pt-3'>
          <div className='bg-transparent'>
            <DztImageGalleryComponent images={data} imageClassName='small' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectGallery
