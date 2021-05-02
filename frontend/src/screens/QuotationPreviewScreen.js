import { FaPrint } from 'react-icons/fa'
const QuotationPreviewScreen = ({ quotes }) => {
  return (
    <>
      {quotes && quotes._id && (
        <div className='modal-body'>
          ID: {quotes._id}
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary '
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='submit' className='btn btn-success '>
              <FaPrint className='mb-1' />
              Print
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default QuotationPreviewScreen
