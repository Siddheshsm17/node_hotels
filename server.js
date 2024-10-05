// var notes=require("./notes.js"); //op -> the game is hard
// console.log(notes.age);

// var result= notes.addNumber(notes.age,1);
// console.log(result);

var _ = require('lodash');

var data=['yash','yash', 8, 990];
var filter = _.uniq(data);

console.log(filter);
console.log(_.isString('yash'));