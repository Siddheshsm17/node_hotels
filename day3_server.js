 //  creating server  
 // JSON : 'java script object notion '  --> format to tarnsfer data mostly string format 

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

// const objectToConvert = { name: "Alice", age: 25 };
// const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(jsonStringified); // Output: {"name": "Alice", "age":25}


// var _=require('lodash');
// console.log(typeof(jsonStringified)); // op-> string 

const express = require('express')
const app = express()
 
//const Menu = require('./models/Menu'); 

const db = require ('./db');
// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

app.get('/',function(req,res){
    res.send('welcome to my hotel.....how can i help you ? , we have menu list')
})

// Post ROUTE to add person











// import the router files 
const PersonRoute = require ("./Routes/PersonRoute");


// use the router 
app.use('/Person',PersonRoute);



// import thr router file  --> menu
const MenuRoute = require("./Routes/MenuRoute");
// use router--> menu
app.use('/Menu', MenuRoute);



app.listen(3000 , () =>{
    console.log('listening on port 3000'); 
}) 










// app.get('/', function (req, res) {
    //   res.send('Hello World')
    // })
    
    // app.get('/idli',(req, res)=>
    // {
    //     var idli1={
    //         name: "thatte idli",
    //         price: 25,
    //         quantity: 1
    //     }
    //    res.send(idli1)
    // })
    

    // const data = req.body // assuming that request body contain person data

    // // create a new person document using mongoose model
    // const newPerson = new Person( data);
    
    // // to save person in the data base  using save function

    // newPerson.save((error , savedPerson)=>{

    //     if(error){
    //         console.log('error saving person ', error);
    //         res.status(500).json({error: 'internal server error'})
    //     }
    //     else
    //     {
    //         console.log('data saved successfully');
    //         res.status(200).json(savedPerson);
    //     }
    // })