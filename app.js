const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose');

const CORS = require('cors')
const indexRouter = require('./src/routes/index')
//const connect = require('./config/mongoose') // config 폴더의 몽구스 가져오기!
 
mongoose.connect('mongodb://localhost:27017/gachi',{useNewUrlParser:true})
const connect = require('mongoose')
// 마찬가지로 app.use(router)전에 삽입한다

const app = express()
//connect() // 서버가 시작되는 순간 몽구스도 시작시키기! (몽고디비 연결)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(CORS())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})
app.use('/', indexRouter)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
