import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  FaCheckCircle,
  FaEdit,
  FaPlus,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa'

import {
  resetDeleteUser,
  resetListUsers,
  resetUpdateUser,
  resetRegisterUser,
} from '../redux/users/usersSlice'
import {
  deleteUser,
  listUsers,
  updateUser,
  registerUser,
} from '../redux/users/usersThunk'

import {
  resetAddQuotation,
  resetDeleteQuotation,
} from '../redux/quotations/quotationsSlice'
import {
  addQuotation,
  deleteQuotation,
  listQuotations,
} from '../redux/quotations/quotationsThunk'

import { UnlockAccess } from '../components/UnlockAccess'

import { confirmAlert } from 'react-confirm-alert'
import { Confirm } from '../components/Confirm'
import Pagination from '../components/Pagination'
import { useForm } from 'react-hook-form'

const QuotationScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      admin: false,
      user: false,
    },
  })

  const [id, setId] = useState(null)
  const [edit, setEdit] = useState(false)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(30)

  const dispatch = useDispatch()

  const listQuotation = useSelector((state) => state.listQuotation)
  const {
    quotations,
    loadingListQuotations,
    errorListQuotations,
    // total,
    // pages,
  } = listQuotation

  const deleteQuotation = useSelector((state) => state.deleteQuotation)
  const { successDeleteQuotation, errorDeleteQuotation } = deleteQuotation

  const addQuotation = useSelector((state) => state.addQuotation)
  const {
    loadingAddQuotation,
    errorAddQuotation,
    successAddQuotation,
  } = addQuotation

  const userList = useSelector((state) => state.userList)
  const { users, loadingListUsers, errorListUsers, total, pages } = userList

  const userUpdate = useSelector((state) => state.userUpdate)
  const { loadingUpdateUser, errorUpdateUser, successUpdateUser } = userUpdate

  const userDelete = useSelector((state) => state.userDelete)
  const { successDeleteUser, errorDeleteUser } = userDelete

  const userRegister = useSelector((state) => state.userRegister)
  const {
    loadingRegisterUser,
    errorRegisterUser,
    successRegisterUser,
  } = userRegister

  const formCleanHandler = () => {
    setEdit(false)
    reset()
  }

  useEffect(() => {
    if (
      errorDeleteUser ||
      errorRegisterUser ||
      errorListUsers ||
      errorUpdateUser ||
      successDeleteUser ||
      successRegisterUser ||
      successUpdateUser
    ) {
      setTimeout(() => {
        dispatch(resetDeleteUser())
        dispatch(resetListUsers())
        dispatch(resetUpdateUser())
        dispatch(resetRegisterUser())
      }, 5000)
    }
  }, [
    errorDeleteUser,
    errorRegisterUser,
    errorListUsers,
    errorUpdateUser,
    successDeleteUser,
    successRegisterUser,
    successUpdateUser,
    dispatch,
  ])

  useEffect(() => {
    dispatch(listUsers({ page, limit }))
    if (successUpdateUser || successRegisterUser) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [
    dispatch,
    successDeleteUser,
    successUpdateUser,
    successRegisterUser,
    page,
    limit,
  ])

  useEffect(() => {
    dispatch(listQuotations({ page, limit }))
    if (successAddQuotation) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [dispatch, successAddQuotation, page, limit])

  const deleteHandler = (id) => {
    confirmAlert(Confirm(() => dispatch(deleteUser(id))))
  }

  const submitHandler = (data) => {
    edit
      ? dispatch(
          updateUser({
            _id: id,
            name: data.name,
            email: data.email,
            password: data.password,
            admin: data.admin,
            user: data.user,
          })
        )
      : dispatch(registerUser(data))
  }

  const editHandler = (user) => {
    setId(user._id)
    setEdit(true)
    setValue('name', user.name)
    setValue('email', user.email)

    user &&
      user.roles.map(
        (role) =>
          (role === 'Admin' && setValue('admin', true)) ||
          (role === 'User' && setValue('user', true))
      )
  }

  return (
    <div className='container'>
      <div
        className='modal fade'
        id='editUserModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editUserModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h3 className='modal-title ' id='editUserModalLabel'>
                {edit ? 'Edit User' : 'Add User'}
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
              {successUpdateUser && (
                <Message variant='success'>
                  User has been updated successfully.
                </Message>
              )}
              {errorUpdateUser && (
                <Message variant='danger'>{errorUpdateUser}</Message>
              )}
              {successRegisterUser && (
                <Message variant='success'>
                  User has been Created successfully.
                </Message>
              )}
              {errorRegisterUser && (
                <Message variant='danger'>{errorRegisterUser}</Message>
              )}

              {loadingListUsers ? (
                <Loader />
              ) : errorListUsers ? (
                <Message variant='danger'>{errorListUsers}</Message>
              ) : (
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type='text'
                      placeholder='Enter name'
                      className='form-control'
                      autoFocus
                    />
                    {errors.name && (
                      <span className='text-danger'>{errors.name.message}</span>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.+\S+/,
                          message: 'Entered value does not match email format',
                        },
                      })}
                      type='email'
                      placeholder='Enter email'
                      className='form-control'
                    />
                    {errors.email && (
                      <span className='text-danger'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input
                      {...register('password', {
                        minLength: {
                          value: 6,
                          message: 'Password must have at least 6 characters',
                        },
                      })}
                      type='password'
                      placeholder='Enter password'
                      className='form-control'
                    />
                    {errors.password && (
                      <span className='text-danger'>
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                      {...register('confirmPassword', {
                        minLength: {
                          value: 6,
                          message: 'Password must have at least 6 characters',
                        },
                        validate: (value) =>
                          value === watch().password ||
                          'The passwords do not match',
                      })}
                      type='password'
                      placeholder='Confirm password'
                      className='form-control'
                    />
                    {errors.confirmPassword && (
                      <span className='text-danger'>
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='admin'
                          {...register('admin')}
                          checked={watch().admin}
                        />
                        <label className='form-check-label' htmlFor='admin'>
                          Admin
                        </label>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='user'
                          {...register('user')}
                          checked={watch().user}
                        />
                        <label className='form-check-label' htmlFor='user'>
                          User
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='modal-footer'>
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
                      disabled={
                        loadingRegisterUser || (loadingUpdateUser && true)
                      }
                    >
                      {loadingRegisterUser || loadingUpdateUser ? (
                        <span className='spinner-border spinner-border-sm' />
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <h3 className=''>Users</h3>
        <button
          className='btn btn-success '
          data-bs-toggle='modal'
          data-bs-target='#editUserModal'
        >
          <FaPlus className='mb-1' />
        </button>
      </div>

      {successDeleteUser && (
        <Message variant='success'>User has been deleted successfully.</Message>
      )}
      {errorDeleteUser && <Message variant='danger'>{errorDeleteUser}</Message>}
      {loadingListUsers ? (
        <Loader />
      ) : errorListUsers ? (
        <Message variant='danger'>{errorListUsers}</Message>
      ) : (
        <>
          <div className='d-flex justify-content-center mt-2'>
            <Pagination
              setPage={setPage}
              page={page}
              pages={pages}
              limit={limit}
              setLimit={setLimit}
              total={total}
            />
          </div>
          <div className='table-responsive '>
            <table className='table table-sm hover bordered striped caption-top '>
              <caption>{total} records were found</caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CUSTOMER</th>
                  <th>EMAIL</th>
                  <th>ADMIN</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {quotations &&
                  quotations.map((quotation) => (
                    <tr key={quotation._id}>
                      <td>{quotation._id}</td>
                      <td>{quotation.name}</td>
                      <td>
                        <a href={`mailto:${quotation.email}`}>
                          {quotation.email}
                        </a>
                      </td>

                      <td className='btn-group'>
                        <button
                          className='btn btn-success btn-sm'
                          onClick={() => editHandler(quotation)}
                          data-bs-toggle='modal'
                          data-bs-target='#editUserModal'
                        >
                          <FaEdit className='mb-1' /> Edit
                        </button>

                        <button
                          className='btn btn-danger btn-sm'
                          onClick={() => deleteHandler(quotation._id)}
                        >
                          <FaTrash className='mb-1' /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='d-flex justify-content-center'>
            <Pagination
              setPage={setPage}
              page={page}
              pages={pages}
              limit={limit}
              setLimit={setLimit}
              total={total}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default QuotationScreen
