const cartDao = require('../dao/cartDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


exports.insertcart = async (req) => {
  try {
    await cartDao.insertcart(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
}

exports.getcartlist = async (req) => {
  let result
  try {
    result = await cartDao.getcartlist(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}

exports.delete = async (req) => {
  let result
  try {
    result = await cartDao.delete(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}



