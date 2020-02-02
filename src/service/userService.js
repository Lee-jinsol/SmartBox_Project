const userDao = require('../dao/userDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


// 회원가입
exports.signup = async (req) => {
  let result
  try {
    result = await userDao.signUp(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}

// 로그인
exports.signIn = async (req) => {
  let result
  try {
    result = await userDao.signIn(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
  } catch (e) {
    console.log(e.message)
  }
  return result // controller 폴더의 userController.js signIn 함수로 결과값 return!
}

exports.getuser = async (req) => {
  let result
  try {
    result = await userDao.getuser(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
  } catch (e) {
    console.log(e.message)
  }
  return result // controller 폴더의 userController.js signIn 함수로 결과값 return!
}
