const response = require('../lib/response')
const cartService = require('../service/cartService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일


exports.insertcart = async (req, res) => {
  try {
    const { user_id } = req.body
    // const { event_id, benchinfo_id } = req.body

    if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    } else {
      await cartService.insertcart(req)
      response.respondJson2('장바구니에 성공적으로 등록되었습니다!', res, 201)
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.getcartlist = async (req, res) => {
  try {
    const { user_id } = req.query 

    if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    } else {
      const result = await cartService.getcartlist(req)
      response.respondJson('즐겨찾기 리스트 성공적!', result, res, 201)
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.delete = async (req, res) => {
  try {
    const { user_id } = req.body

    if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    } else {
      const result = await cartService.delete(req)
      response.respondJson('즐겨찾기 리스트 성공적!', result, res, 201)
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}