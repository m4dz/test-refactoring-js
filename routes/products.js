'use strict'

import express from 'express'
import { isAuth } from '../lib/middleware'

const router = express.Router()

router.get('/list', (req, res) => {
  res.send('products list')
})

router.get('/view/:id', isAuth, (req, res) => {
  res.send(`products view ${req.params.id}`)
})

router.get('/cart/:id', isAuth, (req, res) => {
  res.send(`products cart ${req.params.id}`)
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
