const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  cart_list: [{
    list_name: {
      type: String,
      default: null,
    },
  }],
  
},
{
  versionKey: false,
})
module.exports = mongoose.model('cart', cartSchema)
