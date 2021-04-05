import React from 'react'

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
    title: 'E-Commerce Dashboard',
    image:
      'https://i.pinimg.com/originals/f8/cd/aa/f8cdaa282fd12f91bb0bd6088c277924.jpg',
    tag: 'Ecommerce',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    _id: 2,
    title: 'Modern Logo',
    image:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/23197467/original/7fe4f022a60d8c54335a09d1ed3ad86b86df63f6/design-an-impressive-logo.jpg',
    tag: 'Brand',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quisquam? Sapiente dolor cupiditate asperiores debitis, dolorem, pariatur amet.',
  },
  {
    _id: 3,
    title: 'Business Card',
    image:
      'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/2ac977f5-bff9-4ef0-aa92-38931ae8fe60-2-e1500740591149.png?auto=format&q=60&fit=max&w=930',
    tag: 'Branding',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    _id: 5,
    title: 'Modern Logo',
    image:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/23197467/original/7fe4f022a60d8c54335a09d1ed3ad86b86df63f6/design-an-impressive-logo.jpg',
    tag: 'Brand',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quisquam? Sapiente dolor cupiditate asperiores debitis, dolorem, pariatur amet.',
  },

  {
    _id: 6,
    title: 'Business Card',
    image:
      'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/2ac977f5-bff9-4ef0-aa92-38931ae8fe60-2-e1500740591149.png?auto=format&q=60&fit=max&w=930',
    tag: 'Branding',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    _id: 4,
    title: 'E-Commerce Dashboard',
    image:
      'https://i.pinimg.com/originals/f8/cd/aa/f8cdaa282fd12f91bb0bd6088c277924.jpg',
    tag: 'Ecommerce',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
]

export default Works
