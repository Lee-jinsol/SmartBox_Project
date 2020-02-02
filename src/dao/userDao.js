const user = require('../../schemas/user')

// / 회원가입
exports.signUp = async (req) => {
  // const id = req.body.id // req.body는 클라이언트(사용자)가 입력한 데이터를 받아오는 곳 console.log(req.body)찍어보면 클라이언트쪽에서 어떤 데이터를 보냈는지 콘솔로 확인할 수 있어요!
  // const pw = req.body.pw // -> 예전 문법
  // es6 문법
  const { id, pw, name } = req.body
  let data
  // const { id, pw } = req.body -> 실제 타이핑 수를 줄여주는 문법으로 req.body 하위에 있는 id, pw를 가져오는 동시에 id,pw를 바로 변수명으로 사용가능
  // // async await은 말로 설명해드릴게욤
  const duplicated = await user.find({
    user_id: id,
  })
  if (!duplicated[0]) {
    await user.create({
      user_id: id,
      user_pw: pw,
      user_name: name,
    })
    data = {
      message: '가입성공',
    }

  } else {
    data = {
      message: '이미 존재하는 id입니다',
    }
    return data
  }
  return data
}

exports.signIn = async (req) => {
  const id = req.body.id // req.body는 클라이언트(사용자)가 입력한 데이터를 받아오는 곳 console.log(req.body)찍어보면 클라이언트쪽에서 어떤 데이터를 보냈는지 콘솔로 확인할 수 있어요!
  const pw = req.body.pw // -> 예전 문법

  // es6 문법
  // const { id, pw } = req.body -> 실제 타이핑 수를 줄여주는 문법으로 req.body 하위에 있는 id, pw를 가져오는 동시에 id,pw를 바로 변수명으로 사용가능
  // async await은 말로 설명해드릴게욤
  const result = await user.find({
    user_id: id, // z컬렉션에 들어가있는 key값
    user_pw: pw,
    
  })
  return result[0]
}

exports.getuser = async (req) => {
  const result = await user.find({ 
  })
  return result
}
