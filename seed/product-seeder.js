var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var emmawatson = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Emma_Watson_2012.jpg/220px-Emma_Watson_2012.jpg'

var products = [
  new Product({
    imagePath: emmawatson ,
    title: 'Storm - Backpack - 21L',
    description: 'Great Backpack',
    price: 799
  }),
  new Product({
    imagePath: emmawatson ,
    title: 'Storm - Backpack - 21L',
    description: 'Great Backpack',
    price: 799
  }),
  new Product({
    imagePath: emmawatson,
    title: 'Storm - Backpack - 21L',
    description: 'Great Backpack',
    price: 799
  }),
  new Product({
    imagePath: emmawatson,
    title: 'Storm - Backpack - 21L',
    description: 'Great Backpack',
    price: 799
  }),
  new Product({
    imagePath: emmawatson,
    title: 'Storm - Backpack - 21L',
    description: 'Great Backpack',
    price: 799
  })
]

var done = 0;
for(var i=0 ; i < products.length; i++){
  products[i].save(function(err , results){
    done++;
    if(done==products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}














