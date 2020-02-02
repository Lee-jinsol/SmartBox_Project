const { Router } = require('express')

const bookmarkCtrl = require('../controller/cartController')

const cart = Router()

cart.post('/', bookmarkCtrl.insertcart)
cart.get('/getcart', bookmarkCtrl.getcartlist)
cart.post('/delete', bookmarkCtrl.delete)

module.exports = cart
