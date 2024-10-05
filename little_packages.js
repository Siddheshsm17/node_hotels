var fs = require('fs');
var os = require('os');

// os  , fs --> is a package or libary , they have so many inbuilt functions in them 

var user = os.userInfo();
console.log(user);

fs.appendFile( 'greeting.txt', "HELLO  "+ user.username+'!\n',()=>{console.log('file is created')});

console.log(fs);