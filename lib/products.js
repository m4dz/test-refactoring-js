'use strict'

import path from 'path'
import sqlite from 'sqlite'

// Path is relative to the `dist` directory
const DB_PATH = path.resolve(__dirname, '../../data/database.sqlite')

const all = () => Promise.resolve()
  .then(() => sqlite.open(DB_PATH, { Promise, cached: true }))
  .then(db => db.all('SELECT * FROM products'))

const get = (id) => Promise.resolve()
  .then(() => sqlite.open(DB_PATH, { Promise, cached: true }))
  .then(db => db.get('SELECT * FROM products WHERE id = ?', id))

export {
  all,
  get
}
