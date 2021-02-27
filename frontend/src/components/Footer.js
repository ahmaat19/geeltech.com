import React from 'react'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col text-center text-success py-3'>
            Copyright {currentYear} &copy; All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
