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

// var express = require('express')
// const router = express.Router()

// router.get('/view/:id', isAuth, function (req, res) {
//   var id = req.params.id
//   var sqlite3 = require('sqlite3').verbose()
//   let db = new sqlite3.Database('./data/database.sqlite')

//   db.get('SELECT * FROM products WHERE id = ' + id, function (err, row) {
//     if (err) res.status(500).send('Error in selecting your product')
//     console.log(row)
//     res.render('view', {product: row})
//   })

//   db.close()
// })

// router.get('/cart/:id', isAuth, function (req, res) {
//   var id = req.params.id
//   var sqlite3 = require('sqlite3').verbose()
//   var db = new sqlite3.Database('./data/database.sqlite')

//   db.get('SELECT * FROM products WHERE id = ' + id, function (err, row) {
//     if (err) res.status(500).send('Error in selecting your product')
//     console.log(row)
//     res.json({success: true, text: 'Product ' + id + ' successfully bought'})
//   })

//   db.close()
// })

export default router
