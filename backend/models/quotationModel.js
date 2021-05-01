import mongoose from 'mongoose'

const quotationScheme = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    jobInfo: [
      {
        item: {
          type: String,
          required: true,
        },
        estimatedCost: {
          type: Number,
          required: true,
        },
        estimatedTime: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const QuotationModel = mongoose.model('QuotationModel', quotationScheme)
export default QuotationModel
