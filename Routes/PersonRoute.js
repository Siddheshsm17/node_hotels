const express= require("express");
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async(req , res)=>{
    
    try{
        const data = req.body // assuming that request body contain person data

        // // create a new person document using mongoose model
         const newPerson = new Person( data);
         // save the new person to dtabase
         const response = await newPerson.save();
         console.log('data saved');
         res.status(200).json(response);
        
    }
    catch(err){

        console.log(err);
        res.status(500).json({error: " Internal server error  "});
    }

})

// get methid to get persons data 
router.get('/',  async(req , res)=>
{

    try{
        const data = await  Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: " Internal server error  "});
    }
})








router.get('/:worktype', async(req ,res)=>{

   try{
        const worktype=req.params.worktype;// to extratct the work type from the url parameter
        if(worktype=="chef" || worktype=="manager" || worktype=="waiter"  ){
            const response = await Person.find({work:worktype});
            console.log('responss fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:"invalid work type"});
        }

   }

   catch(err)
   {
    console.log(err);
            res.status(500).json({error: " Internal server error  "});
   }
});


router.put('/:_id', async(req, res)=>{
    try{
        const personId= req.params._id;// to extract id from url
        const updatePersonData = req.body; // updated data for the person


        const response = await Person.findByIdAndUpdate( personId , updatePersonData,{

            new: true , // returned updated doc
            runValidators:true // to see updated info validated or not in mongoose

        });

        // if no response came or null response 
        if(!response)
        {
            return res.status(404).json({error : "person not found"});
        }

        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: " Internal server error  "});
    }
});


// to delete id wise 

router.delete('/:_id', async(req, res)=>{
    try{
        const personId= req.params._id;// to extract id from url
        


        const response = await Person.findByIdAndDelete( personId ); 

        // if no response came or null response 
        if(!response)
        {
            return res.status(404).json({error : "person not found"});
        }

        console.log('data deleted');
        res.status(200).json({ message:"person deleted Successfully"});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: " Internal server error  "});
    }
});

module.exports= router;