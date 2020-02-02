const list = require('../../schemas/list')

// 이벤트
exports.list = async (req) => {
  // const id = req.body.id // req.body는 클라이언트(사용자)가 입력한 데이터를 받아오는 곳 console.log(req.body)찍어보면 클라이언트쪽에서 어떤 데이터를 보냈는지 콘솔로 확인할 수 있어요!
  // const pw = req.body.pw // -> 예전 문법
  // es6 문법
  const { name, favorite, touch, shake, tryon, picture } = req.body
  let data
  // const { id, pw } = req.body -> 실제 타이핑 수를 줄여주는 문법으로 req.body 하위에 있는 id, pw를 가져오는 동시에 id,pw를 바로 변수명으로 사용가능
  // // async await은 말로 설명해드릴게욤
  const duplicated = await list.find({
    list_name: name,
  })
  if (!duplicated[0]) {
    await list.create({
      list_name: name,
      list_favorite: favorite,
      list_touch: touch,
      list_shake: shake,
      list_tryon: tryon,
      list_picture: picture,
    })
    data = {
      message: '등록성공',
    }

  } else {
    data = {
      message: '이미 존재하는 상품입니다',
    }
    return data
  }
 return data
}

//  exports.getqna = async (req) => {
//   const result = await qna.find({})
//   return result[0]
//  }
exports.getlist = async (req) => {
  const result = await list.find().limit(1) 
  return result[0]
}

exports.relist = async (req) => {
 
  const { name, favorite, touch, shake, tryon } = req.query
  
  await list.update(
    { list_name: name },
    {
      $inc: {
        list_favorite: favorite,
        list_touch: touch,
        list_shake: shake,
        list_tryon: tryon,
      }, 
    },
  )
  console.log('success')
  }

  exports.reset = async (req) => {
    const { name } = req.body
    await list.update(
      { list_name: name },
      {
        $set: {
          list_favorite: 0,
          list_touch: 0,
          list_shake: 0,
          list_tryon: 0,
        }, 
      },
    )
    console.log('success')
  }