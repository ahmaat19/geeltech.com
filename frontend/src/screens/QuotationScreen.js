import { useState } from 'react'
import Message from '../components/Message'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import {
  FaInfo,
  FaPlus,
  FaPlusCircle,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa'

import { getQuotation, postQuotation, deleteQuotation } from '../api/quotations'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import { confirmAlert } from 'react-confirm-alert'
import { Confirm } from '../components/Confirm'
import { useForm, useFieldArray } from 'react-hook-form'
import QuotationPreviewScreen from './QuotationPreviewScreen'
import InvoicePreviewScreen from './InvoicePreviewScreen'

const QuotationScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      admin: false,
      user: false,
      jobInfo: [{ item: '', estimatedCost: '', estimatedTime: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'jobInfo',
  })

  const [edit, setEdit] = useState(false)
  const [quotes, setQuotes] = useState({})

  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery(
    'quotations',
    () => getQuotation(),
    {
      retry: 0,
    }
  )

  const {
    isLoading: isLoadingDeleteQuotation,
    isError: isErrorDeleteQuotation,
    error: errorDeleteQuotation,
    isSuccess: isSuccessDeleteQuotation,
    mutateAsync: deleteQuotationMutateAsync,
  } = useMutation(['deleteQuotation'], deleteQuotation, {
    retry: 0,
    onSuccess: () => queryClient.invalidateQueries(['quotations']),
  })

  const {
    isLoading: isLoadingPostQuotation,
    isError: isErrorPostQuotation,
    error: errorPostQuotation,
    isSuccess: isSuccessPostQuotation,
    mutateAsync: postQuotationMutateAsync,
  } = useMutation(['postQuotation'], postQuotation, {
    retry: 0,
    onSuccess: () => {
      reset()
      queryClient.invalidateQueries(['quotations'])
    },
  })

  const formCleanHandler = () => {
    setEdit(false)
    reset()
  }

  const deleteHandler = (id) => {
    confirmAlert(Confirm(() => deleteQuotationMutateAsync(id)))
  }

  const submitHandler = (data) => {
    postQuotationMutateAsync(data)
  }

  return (
    <div className='container'>
      {isSuccessPostQuotation && (
        <Message variant='success'>
          Quotation has been created successfully.
        </Message>
      )}
      {isErrorPostQuotation && (
        <Message variant='danger'>{errorPostQuotation}</Message>
      )}

      <div
        className='modal fade'
        id='editUserModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editUserModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h3 className='modal-title ' id='editUserModalLabel'>
                {edit ? 'Edit Quotation' : 'Add Quotation'}
              </h3>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={formCleanHandler}
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className='row g-2'>
                  <div className='col-7'></div>
                  <div className='col-md-6 col-12'>
                    <label htmlFor='name'>Customer</label>
                    <input
                      {...register('name', {
                        required: 'Customer is required',
                      })}
                      type='text'
                      className='form-control'
                      placeholder='customer'
                      autoFocus
                    />
                    {errors.name && (
                      <span className='text-danger'>{errors.name.message}</span>
                    )}
                  </div>
                  <div className='col-md-6 col-12'>
                    <label htmlFor='name'>Address</label>
                    <input
                      {...register('address', {
                        required: 'Address is required',
                      })}
                      type='text'
                      className='form-control'
                      placeholder='address'
                    />
                    {errors.address && (
                      <span className='text-danger'>
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                  <div className='col-md-6 col-12'>
                    <label htmlFor='name'>City</label>
                    <input
                      {...register('city', {
                        required: 'City is required',
                      })}
                      type='text'
                      className='form-control'
                      placeholder='city'
                    />
                    {errors.city && (
                      <span className='text-danger'>{errors.city.message}</span>
                    )}
                  </div>
                  <div className='col-md-6 col-12'>
                    <label htmlFor='name'>Mobile</label>
                    <input
                      {...register('mobile', {
                        required: 'Mobile number is required',
                      })}
                      type='number'
                      className='form-control'
                      placeholder='mobile'
                    />
                    {errors.mobile && (
                      <span className='text-danger'>
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>
                  <div className='col-12'>
                    <label htmlFor='name'>Email</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.+\S+/,
                          message: 'Entered value does not match email format',
                        },
                      })}
                      type='email'
                      className='form-control'
                      placeholder='email'
                    />
                    {errors.email && (
                      <span className='text-danger'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <hr className='mt-5' />

                {fields.map((item, index) => {
                  return (
                    <div className='row py-1 gx-2' key={item.id}>
                      <div className='col-md-4 col-12'>
                        <label htmlFor='item'>Item</label>
                        <input
                          defaultValue={`${item.item}`} // make sure to set up defaultValue
                          {...register(`jobInfo.${index}.item`)}
                          className='form-control'
                          placeholder='item'
                          required
                        />
                      </div>
                      <div className='col-md-3 col-12'>
                        <label htmlFor='estimatedCost'>E. Cost ($)</label>
                        <input
                          defaultValue={`${item.estimatedCost}`} // make sure to set up defaultValue
                          {...register(`jobInfo.${index}.estimatedCost`)}
                          className='form-control'
                          placeholder='Estimated cost ($)'
                          required
                          type='number'
                          min='0'
                          step='.01'
                        />
                      </div>

                      <div className='col-md-3 col-12'>
                        <label htmlFor='estimatedTime'>E. Time (day)</label>
                        <input
                          defaultValue={`${item.estimatedTime}`} // make sure to set up defaultValue
                          {...register(`jobInfo.${index}.estimatedTime`)}
                          className='form-control'
                          placeholder='Estimated time (day)'
                          required
                          type='number'
                          min='0'
                        />
                      </div>
                      <div className='col-md-2 col-12'>
                        <button
                          type='button'
                          className='btn btn-danger form-control'
                          onClick={() => remove(index)}
                          style={{ marginTop: '1.5rem', padding: '0.7rem' }}
                        >
                          <FaTimesCircle className='mb-1' />
                        </button>
                      </div>
                    </div>
                  )
                })}

                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => {
                      append({
                        item: '',
                        estimatedTime: '',
                        estimatedCost: '',
                      })
                    }}
                  >
                    <FaPlusCircle className='mb-1' /> Append
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary '
                    data-bs-dismiss='modal'
                    onClick={formCleanHandler}
                  >
                    Close
                  </button>
                  <button
                    type='submit'
                    className='btn btn-success '
                    disabled={isLoadingPostQuotation}
                  >
                    {isLoadingPostQuotation ? (
                      <span className='spinner-border spinner-border-sm' />
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <h3 className=''>Quotations</h3>
        <button
          className='btn btn-success '
          data-bs-toggle='modal'
          data-bs-target='#editUserModal'
        >
          <FaPlus className='mb-1' />
        </button>
      </div>

      {isSuccessDeleteQuotation && (
        <Message variant='success'>
          Quotation has been deleted successfully.
        </Message>
      )}
      {isErrorDeleteQuotation && (
        <Message variant='danger'>{errorDeleteQuotation}</Message>
      )}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='table-responsive '>
          <table className='table table-sm hover bordered striped caption-top '>
            <caption>{data && data.length} records were found</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date & Time</th>
                <th>CUSTOMER</th>
                <th>EMAIL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((quotation) => (
                  <tr key={quotation._id}>
                    <td>{quotation._id}</td>
                    <td>{moment(quotation.createdAt).format('lll')}</td>

                    <td>{quotation.name}</td>
                    <td>
                      <a href={`mailto:${quotation.email}`}>
                        {quotation.email}
                      </a>
                    </td>

                    <td className='btn-group'>
                      <button
                        className='btn btn-primary btn-sm'
                        onClick={() => setQuotes(quotation)}
                        data-bs-toggle='modal'
                        data-bs-target='#invoicePreviewModal'
                      >
                        <FaInfo className='mb-1' /> Invoice
                      </button>

                      <button
                        className='btn btn-success btn-sm'
                        onClick={() => setQuotes(quotation)}
                        data-bs-toggle='modal'
                        data-bs-target='#quotationDetailsModal'
                      >
                        <FaInfo className='mb-1' /> Details
                      </button>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => deleteHandler(quotation._id)}
                      >
                        {isLoadingDeleteQuotation ? (
                          <span className='spinner-border spinner-border-sm' />
                        ) : (
                          <>
                            <FaTrash className='mb-1' /> Delete{' '}
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <div
        className='modal fade'
        id='quotationDetailsModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='quotationDetailsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h3 className='modal-title ' id='quotationDetailsModalLabel'>
                Quotation Details
              </h3>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            <QuotationPreviewScreen quotes={quotes} />
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='invoicePreviewModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='invoicePreviewModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h3 className='modal-title ' id='invoicePreviewModalLabel'>
                Invoice Details
              </h3>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            <InvoicePreviewScreen quotes={quotes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotationScreen
