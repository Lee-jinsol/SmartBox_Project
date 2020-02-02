const { Router } = require('express')

const listCtrl = require('../controller/listController')

const list = Router()

list.post('/', listCtrl.list)
list.get('/getlist', listCtrl.getlist)
list.get('/relist', listCtrl.relist)
list.post('/reset', listCtrl.reset)

module.exports = list
