
const mongoose= require('mongoose');
// define mongo db connectoin url
const mongoURL='mongodb://localhost:27017/hotels'; 


// set up mongo db connection 
mongoose.connect(mongoURL,{

    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get default mongodb connection 
// mongoose maintain  a default connection object representing the Mongo DB
const db= mongoose.connection; 
// this object will handle event and interact with user 

// define event listners for database connection 


db.on( 'connected', ()=>{
    console.log('connected to mongodb server')
});

db.on('error', (err)=>{
  console.log('mongo db connectiom error :', err)
})

db.on('disconnected',()=>{
    console.log('mongodb is disconnected')
});

