var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'

  },
  price:{
    type: Number,
    default:0,
    trim:true,
    required:'Price required'
  },
  quantity:{
    type: Number,
    default:1,
    trim:true,
    required:'Quantity required'
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

var Article = mongoose.model('Product', ProductSchema, 'product');
module.exports = Article;
