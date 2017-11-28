'use strict'

import logger from 'morgan'
import express from 'express'
import router from './routes'

const app = express()
const port = process.env.PORT || 3001

app.use(logger('dev'))
app.set('view engine', 'twig')
app.use(express.static('static'))
app.use('/', router)

app.listen(port, () => console.log(`Express server listening on port ${port} in ${app.settings.env} mode`))
