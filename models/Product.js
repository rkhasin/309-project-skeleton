var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'

  },

  price: {
    type: Number,
    default: 0,
    trim: true,
    required: 'Price required'
  },

  quantity: {
    type: Number,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
    created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;