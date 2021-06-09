import asyncHandler from 'express-async-handler'
import QuotationModel from '../models/quotationModel.js'

export const getQuotation = asyncHandler(async (req, res) => {
  let query = QuotationModel.find()

  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.limit) || 50
  const skip = (page - 1) * pageSize
  const total = await QuotationModel.countDocuments()

  const pages = Math.ceil(total / pageSize)

  query = query
    .skip(skip)
    .limit(pageSize)
    .sort({ logDate: -1 })
    .populate('user', ['name', 'email'])

  const result = await query

  res.status(200).json({
    startIndex: skip + 1,
    endIndex: skip + result.length,
    count: result.length,
    page,
    pages,
    total,
    data: result,
  })
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
