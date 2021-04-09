import React from 'react'
import digital_archive from '../images/digital_archive.jpg'
import hr from '../images/hr.jpg'
import blood from '../images/blood.jpg'
import beydan from '../images/beydan.jpg'
import sada from '../images/sada.jpg'

const Works = () => {
  return (
    <div id='works' className='pt-5'>
      <div className='container my-5 text-center'>
        <h2 className='fw-bold'>
          Our Recent <span className='text-success'>Works</span>{' '}
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

        <div className='row g-5 pt-5'>
          {projects.map((project) => (
            <div
              key={project._id}
              className='col-lg-4 col-md-6 col-sm-12 col-12'
            >
              <div className='card rounded-lg'>
                <img
                  src={project.image}
                  alt=''
                  className='card-img-top img-fluid work-img'
                />
                <div className='card-body'>
                  <h5 className='card-title text-success'>{project.title}</h5>
                  <span
                    className='fw-lighter  text-light bg-success py-1 px-3 rounded-pill'
                    style={{ letterSpacing: '3px' }}
                  >
                    {project.tag}
                  </span>
                  <p className='card-text fw-lighter'>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const projects = [
  {
    _id: 1,
    title: 'Digital Archive',
    image: digital_archive,
    tag: 'Web App',
    description: 'Online digital archive for storing any scanned documents',
  },
  {
    _id: 2,
    title: 'Coffee Shop Website',
    image: beydan,
    tag: 'Website',
    description: 'Modern coffee shop website with beautiful design',
  },
  {
    _id: 3,
    title: 'Human Resource System',
    image: hr,
    tag: 'Web App',
    description:
      'Complete customized human resource management system with payroll and attendance',
  },
  {
    _id: 4,
    title: 'Fast Food Website',
    image: sada,
    tag: 'Website',
    description: 'Well designed fast food website',
  },
  {
    _id: 5,
    title: 'Blood Bank System',
    image: blood,
    tag: 'Web App',
    description:
      'Blood bank system that keep trucks for blood status and storing ',
  },
]

export default Works
