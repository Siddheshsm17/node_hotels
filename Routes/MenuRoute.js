const express = require('express');
const router  = express.Router();
const Menu = require('../models/Menu');

router.post('/', async(req , res)=>{
    
    try{
        const data = req.body // assuming that request body contain person data

        // // create a new person document using mongoose model
         const newMenu = new Menu( data);
         // save the new person to dtabase
         const response = await newMenu.save();
         console.log('data saved');
         res.status(200).json(response);
        
    }
    catch(err){

        console.log(err);
        res.status(500).json({error: " Internal server error  "});
    }

})

router.get('/',  async(req , res)=>
    {
    
        try{
            const data = await  Menu.find();
            console.log('data fetched');
            res.status(200).json(data);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error: " Internal server error  "});
        }
    })


    router.get('/:tastetype', async(req ,res)=>{

        try{
             const tastetype=req.params.tastetype;// to extratct the work type from the url parameter
             if(tastetype=="sour" || tastetype=="sweet" ||tastetype=="spicy"  ){
                 const response = await Menu.find({taste:tastetype});
                 console.log('response fetched');
                 res.status(200).json(response);
             }
             else{
                 res.status(404).json({error:"invalid taste type"});
             }
     
        }
     
        catch(err)
        {
         console.log(err);
                 res.status(500).json({error: " Internal server error  "});
        }
     })

    module.exports=router;