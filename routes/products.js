'use strict'

import path from 'path'
import express from 'express'
import sqlite from 'sqlite'
import { isAuth } from '../lib/middleware'

// Path is relative to the `dist` directory
const DB_PATH = path.resolve(__dirname, '../../data/database.sqlite')

const router = express.Router()
const dbPromise = sqlite.open(DB_PATH, { Promise })

router.get('/', (req, res) => res.redirect(301, '/products/list'))

router.get('/list', async (req, res, next) => {
  try {
    const db = await dbPromise
    const products = await db.all('SELECT * FROM products')
    res.render('list', { products })
  } catch (err) {
    next(err)
  }
})

router.get('/view/:id', isAuth, async (req, res, next) => {
  try {
    const db = await dbPromise
    const product = await db.get('SELECT * FROM products WHERE id = ?', req.params.id)
    res.render('view', { product })
  } catch (err) {
    next(err)
  }
})

router.get('/cart/:id', isAuth, async (req, res, next) => {
  try {
    const db = await dbPromise
    const product = await db.get('SELECT * FROM products WHERE id = ?', req.params.id)
    console.log(product)
    res.json({success: true, text: `Product ${req.params.id} successfully bought`})
  } catch (err) {
    next(err)
  }
})

export default router
