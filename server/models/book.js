/* book.js
Students's name: Arish Qureshi
StudentID: 301176321
Date: 24 June, 2022
*/
let mongoose=require('mongoose');

//create model class
let bookModel=mongoose.Schema({
    name:String,
    author:String,
    published: String,
  
},
{
    collection:"books"
});

module.exports=mongoose.model('Book',bookModel);