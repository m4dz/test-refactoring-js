import { isAuth } from '../lib/middleware'

var express = require('express')
const router = express.Router()

router.get('/view/:id', isAuth, function (req, res) {
  var id = req.params.id
  var sqlite3 = require('sqlite3').verbose()
  let db = new sqlite3.Database('database.sqlite')

  db.get('SELECT * FROM products WHERE id = ' + id, function (err, row) {
    if (err) res.status(500).send('Error in selecting your product')
    console.log(row)
    res.render('view', {product: row})
  })

  db.close()
})

router.get('/cart/:id', isAuth, function (req, res) {
  var id = req.params.id
  var sqlite3 = require('sqlite3').verbose()
  var db = new sqlite3.Database('database.sqlite')

  db.get('SELECT * FROM products WHERE id = ' + id, function (err, row) {
    if (err) res.status(500).send('Error in selecting your product')
    console.log(row)
    res.json({success: true, text: 'Product ' + id + ' successfully bought'})
  })

  db.close()
})

export default router
