import express from 'express'
import {
  getQuotation,
  deleteQuotation,
  addQuotation,
} from '../controllers/quotationController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .post(protect, admin, addQuotation)
  .get(protect, admin, getQuotation)
router.route('/:id').delete(protect, admin, deleteQuotation)

export default router
