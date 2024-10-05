const { uniq } = require('lodash');
const mongoose = require('mongoose');

const menuItemschema = new mongoose.Schema({

     name:{
       type : String ,
       required: true
     },

     price :{
       type : Number , 
       required: true
     },

     taste:{
        type : String ,
        enum:['sweet', 'spicy','sour'],
        required: true,
       // uniq: true
     },
     is_drink:{
        type:Boolean,
        default: false // kuni data pathavlach nahi mhanje false 
     },

     ingredients:
     {
        type:[String], // list of strings
        default: []
     },

     num_sales:{
        type: Number,
        default:0
     }


})

const Menu = mongoose.model('Menu ' , menuItemschema );
module.exports= Menu ;