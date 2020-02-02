const cart = require('../../schemas/cart')
const list = require('../../schemas/list')

// 즐겨찾기 등록하기
exports.insertcart = async (req) => {
  const { list_name } = req.body
  const { user_id } = req.body

console.log(list_name)
    const data = await list.findOne({
      list_name: list_name,
    })
    await cart.findOneAndUpdate(
      { user_id },
      {
        $addToSet: {
          cart_list: {
           list_name: list_name,
          },
        },
      },
      { upsert: true },
    )
    // upsert가 등록하기 전에 해당 유저 정보로 된 데이터가 있는지 검색 먼저하고 없으면 생성하고 있으면 기존 데이터에다가 추가하는거야!
  } 

 
// list 즐겨찾기 가져오기
exports.getcartlist = async (req) => {
  const { user_id } = req.query
  const result = await cart.find({
    user_id,
  }, {
    _id: 0,
    cart_list: [{
      _id: 0,
      list_name: 1,
    }], 
  })
  // const result2 = await list.find({
  //   list_name: result[0].cart_list.list_name, 
  // })
  console.log(result[0])
  console.log(result[0].cart_list.list_name)
  return result[0].cart_list
}

exports.delete = async (req) => {
  const { user_id, list_name } = req.body
  const result = await cart.update(
    { user_id: user_id },
    {
      $pull: { 
        cart_list: {
          list_name: list_name,
      },
    },
  },
  )
  return result
}

