import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// header configuration
const configHeader = (getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  }
}

const configHeaderNormal = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

// add quotation
export const addQuotation = createAsyncThunk(
  'addQuotation',
  async (quotation) => {
    const config = configHeader()
    try {
      const { data } = await axios.post(`/api/quotation`, quotation, config)
      return data
    } catch (error) {
      throw error.response.data
    }
  }
)

// get quotations
export const listQuotations = createAsyncThunk(
  'listQuotations',
  async (options, { getState }) => {
    const config = configHeader(getState)
    try {
      const { data } = await axios.get(
        `/api/quotation?page=${options.page}&&limit=${options.limit}`,
        config
      )
      return data
    } catch (error) {
      throw error.response.data
    }
  }
)

// delete quotation
export const deleteQuotation = createAsyncThunk(
  'deleteQuotation',
  async (id, { getState }) => {
    const config = configHeader(getState)
    try {
      const { data } = await axios.delete(`/api/quotation/${id}`, config)
      return data
    } catch (error) {
      throw error.response.data
    }
  }
)
