import asyncHandler from 'express-async-handler'
import QuotationModel from '../models/quotationModel.js'

export const getQuotation = asyncHandler(async (req, res) => {
  const quotes = await QuotationModel.find({})
    .populate('user', ['name', 'email'])
    .sort({ createdAt: -1 })

  res.status(200).json(quotes)
})

export const addQuotation = asyncHandler(async (req, res) => {
  const { jobInfo, name, city, address, mobile, email } = req.body
  console.log(req.body)
  if (jobInfo && jobInfo.length === 0) {
    res.status(400)
    throw new Error('No job information')
  } else {
    const quotation = new QuotationModel({
      jobInfo,
      name,
      city,
      address,
      mobile,
      email,
      user: req.user._id,
    })

    const createQuotation = await quotation.save()
    res.status(201).json(createQuotation)
  }
})

export const deleteQuotation = asyncHandler(async (req, res) => {
  const quotation = await QuotationModel.findById(req.params.id)
  if (quotation) {
    await quotation.remove()
    res.json({ message: 'Quotation removed' })
  } else {
    res.status(404)
    throw new Error('Quotation not found')
  }
})
