import { useRef } from 'react'
import {
  FaEnvelope,
  FaGlobeAfrica,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
} from 'react-icons/fa'
import moment from 'moment'
import logo from '../images/logo.png'

import { useReactToPrint } from 'react-to-print'

const InvoicePreviewScreen = ({ quotes }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Order Request Report',
    pageStyle: `size: 302.36px 188.98px`,
  })

  return (
    <>
      {quotes && quotes._id && (
        <div className='modal-body'>
          <div ref={componentRef} className='p-5'>
            <div className='brand text-center'>
              <img
                src={logo}
                alt='logo'
                className='img-fluid'
                style={{ width: '3rem' }}
              />
            </div>
            <div className='d-flex justify-content-between'>
              <div className=''>
                <address>
                  <p
                    className='bg-success py-1 pe-2 text-light fs-4'
                    style={{ width: 'fit-content', background: '#111' }}
                  >
                    Geel Tech
                  </p>
                  <FaPhoneAlt className='mb-1 text-success' />{' '}
                  <a href='tel:+252615301507'>+252615301507</a> <br />
                  <FaEnvelope className='mb-1 text-success' />{' '}
                  <a href='mailto:info@geeltech.com'>info@geeltech.com</a>{' '}
                  <br />
                  <FaGlobeAfrica className='mb-1 text-success' />{' '}
                  <a href='https://geeltech.com'>https://geeltech.com</a> <br />
                  <FaMapMarkerAlt className='mb-1 text-success' />{' '}
                  <span>Mogadishu - Somalia</span>
                </address>
              </div>
              <div className=' '>
                <address className='float-end'>
                  <p className='bg-success py-1 ps-2 text-light fs-4'>
                    Invoice
                  </p>
                  <div className='float-end'>
                    <span className=''>{quotes.name}</span>{' '}
                    <FaGlobeAfrica className='mb-1 text-success' />
                  </div>
                  <br />
                  <div className='float-end'>
                    <a className='' href={`mailto:${quotes.email}`}>
                      {quotes.email}
                    </a>{' '}
                    <FaEnvelope className='mb-1 text-success' />
                  </div>
                  <br />
                  <div className='float-end'>
                    <a href={`tel:+252${quotes.mobile}`}>
                      +252 {quotes.mobile}
                    </a>{' '}
                    <FaPhoneAlt className='mb-1 text-success' />
                  </div>
                  <br />
                  <div className='float-end'>
                    <span>
                      {quotes.address} - {quotes.city}
                    </span>{' '}
                    <FaMapMarkerAlt className='mb-1 text-success' />
                  </div>
                </address>
              </div>
            </div>

            <div className='mt-3'>
              <span className='fw-bold'>Invoice Ref: </span> {quotes._id} <br />
              <span className='fw-bold'>Invoice Date: </span>{' '}
              {moment(quotes.createdAt).format('llll')} <br />
            </div>

            <div className='table-responsive mt-3'>
              <table className='table table-hover table-striped table-sm'>
                <thead className='table-success'>
                  <tr>
                    <th style={{ minWidth: '20rem' }}> Job Detail</th>
                    <th> Finished Time (day)</th>
                    <th> Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.jobInfo &&
                    quotes.jobInfo.map((job) => (
                      <tr key={job._id}>
                        <td>{job.item}</td>

                        <td>{job.estimatedTime}</td>
                        <td>${job.estimatedCost}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td className='bg-success text-light'>Total:</td>
                    <td className='bg-success text-light'>
                      $
                      {quotes.jobInfo.reduce(
                        (acc, curr) =>
                          Number(acc.estimatedCost) + Number(curr.estimatedCost)
                      )}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <ol className='list-group '>
              <li className='list-group-item bg-transparent border-0 py-0 fw-bold'>
                Please make payment to the following bank account:
              </li>
              <li className='list-group-item bg-transparent border-0 py-0'>
                <span className='fw-bold'>Bank:</span> Salaam Bank <br />
                <span className='fw-bold'>Account Number:</span> 30728881
              </li>
              <li className='list-group-item bg-transparent border-0 py-2'>
                Please notify via email confirming that payment has been made.
              </li>
            </ol>

            <p className='text-center text-success mt-5'>
              THANK YOU FOR YOUR BUSINESS!
            </p>
          </div>

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary '
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              type='submit'
              className='btn btn-success '
            >
              <FaPrint className='mb-1' />
              Print
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default InvoicePreviewScreen
