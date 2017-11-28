'use strict'

import express from 'express'
import products from './products'

const router = express.Router()

router.get('/', (req, res) => res.redirect(301, '/products/list'))
router.use('/products', products)

export default router
