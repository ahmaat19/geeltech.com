import axios from 'axios'

const config = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('userInfo') &&
        JSON.parse(localStorage.getItem('userInfo')).token
      }`,
    },
  }
}

export const getQuotation = async (page) => {
  try {
    const { data } = await axios.get(`/api/quotations?page=${page}`, config())
    return data
  } catch (error) {
    throw error.response.data.message
  }
}

export const postQuotation = async (quote) => {
  try {
    const { data } = await axios.post(`/api/quotations`, quote, config())
    return data
  } catch (error) {
    throw error.response.data.message
  }
}

export const deleteQuotation = async (id) => {
  try {
    const { data } = await axios.delete(`/api/quotations/${id}`, config())
    return data
  } catch (error) {
    throw error.response.data.message
  }
}
