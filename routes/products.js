'use strict'

import express from 'express'
import { isAuth } from '../lib/middleware'
import * as products from '../lib/products'

const router = express.Router()

router.get('/', (req, res) => res.redirect(301, '/products/list'))

router.get('/list', async (req, res, next) => {
  try {
    res.render('list', { products: await products.all() })
  } catch (err) {
    next(err)
  }
})

router.get('/view/:id', isAuth, async (req, res, next) => {
  try {
    const product = await products.get(req.params.id)
    res.render('view', { product })
  } catch (err) {
    next(err)
  }
})

router.get('/cart/:id', isAuth, async (req, res, next) => {
  try {
    const product = await products.get(req.params.id)
    console.log(product)
    res.json({success: true, text: `Product ${req.params.id} successfully bought`})
  } catch (err) {
    next(err)
  }
})

export default router
