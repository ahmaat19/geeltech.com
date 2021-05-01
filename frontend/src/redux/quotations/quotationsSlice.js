import {
  listQuotations,
  deleteQuotation,
  addQuotation,
} from './quotationsThunk'
import { createSlice } from '@reduxjs/toolkit'

// get all quotation
const listQuotationSlice = createSlice({
  name: 'listQuotation',
  initialState: {},
  reducers: {
    resetListQuotations: (state) => {
      state.errorListQuotations = null
    },
  },
  extraReducers: {
    [listQuotations.pending]: (state) => {
      state.loadingListQuotations = true
    },
    [listQuotations.fulfilled]: (state, { payload }) => {
      state.loadingListQuotations = false
      state.successListQuotations = true
      state.quotations = payload.data
      state.count = payload.count
      state.page = payload.page
      state.pages = payload.pages
      state.total = payload.total
    },
    [listQuotations.rejected]: (state, { error }) => {
      state.loadingListQuotations = false
      state.errorListQuotations = error.message
    },
  },
})

// add new quotation
const addQuotationSlice = createSlice({
  name: 'addQuotation',
  initialState: {},
  reducers: {
    resetAddQuotation: (state) => {
      state.successAddQuotation = false
      state.errorAddQuotation = null
    },
  },
  extraReducers: {
    [addQuotation.pending]: (state) => {
      state.loadingAddQuotation = true
    },
    [addQuotation.fulfilled]: (state) => {
      state.loadingAddQuotation = false
      state.successAddQuotation = true
    },
    [addQuotation.rejected]: (state, { error }) => {
      state.loadingAddQuotation = false
      state.errorAddQuotation = error.message
    },
  },
})

// delete quotation
const deleteQuotationSlice = createSlice({
  name: 'deleteQuotation',
  initialState: {},
  reducers: {
    resetDeleteQuotation: (state) => {
      state.successDeleteQuotation = false
      state.errorDeleteQuotation = null
    },
  },
  extraReducers: {
    [deleteQuotation.pending]: (state) => {
      state.loadingDeleteQuotation = true
    },
    [deleteQuotation.fulfilled]: (state) => {
      state.loadingDeleteQuotation = false
      state.successDeleteQuotation = true
    },
    [deleteQuotation.rejected]: (state, { error }) => {
      state.loadingDeleteQuotation = false
      state.errorDeleteQuotation = error.message
    },
  },
})

export const listQuotationSliceReducer = listQuotationSlice.reducer
export const addQuotationSliceReducer = addQuotationSlice.reducer
export const deleteQuotationSliceReducer = deleteQuotationSlice.reducer

export const { resetListUsers } = listQuotationSlice.actions
export const { resetAddQuotation } = addQuotationSlice.actions
export const { resetDeleteQuotation } = deleteQuotationSlice.actions
