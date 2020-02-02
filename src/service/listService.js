const listDao = require('../dao/listDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


exports.list = async (req) => {
  let result
  try {
    result = await listDao.list(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}



exports.getlist = async (req) => {
  let result
  try {
    result = await listDao.getlist(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
  } catch (e) {
    console.log(e.message)
  }
  return result // controller 폴더의 userController.js signIn 함수로 결과값 return!
}

exports.relist = async (req) => {
  try {
    await listDao.relist(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
}

exports.reset = async (req) => {
  
  try {
  
    await listDao.reset(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
   
  } catch (e) {
    console.log(e.message)
  }
}