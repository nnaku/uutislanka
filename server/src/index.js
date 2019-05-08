/* init .env */
require('dotenv').config()

const path = require('path')
const mongoose = require('mongoose');
const express = require('express')

const PORT = process.env.PORT || 3001
const itemController = require('./controllers/item')
const app = express()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('connected', () => {
  console.log('connected')
  require('./cronTab')
})

app.get('/api', itemController.getAll)
app.get('/api/:category', itemController.getCategory)

app.use(express.static(path.resolve(__dirname, '../../client/build')))
app.get(/./, (req, res) => { res.sendFile(path.resolve(__dirname, '../../client/build/index.html')); });
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
