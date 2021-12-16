const { application } = require('express')
const express = require('express')
const app=express()
const Subscriber = require('../models/subscriber')
const router = express.Router()
app.use('/:id',getSubscriber)
//getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch (error) {

        res.status(500).json({ message: error.message })


    }


})
router.get('/:id',getSubscriber, (req, res) => {

res.json(res.karan.name)

})
router.post('/', (req, res) => {
    console.log(req.body.name)
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribetoChannel: req.body.subscribetoChannel,

    })
    try {
        const newsubscriber = subscriber.save()
        res.status(201).json(newsubscriber)

    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})



router.post('/:id', (req, res) => {



})


router.patch('/:id', async(req, res) => {
    if(req.body.name!=null)
    {
        res.karan.name=req.body.name;

    }
    if(req.body.subscribetoChannel!=null)
    {
        res.karan.subscribetoChannel=req.body.subscribetoChannel;
        
    }
    try
    {
const updatesub=await req.karan.save()

    }
    catch(err)
    {
        res.status(400).json({
            message: err.message
        }) 
    }


})
    
router.delete('/:id',async ( req, res) => {

try{
await res.karan.remove()
res.json({message:"succesfully deleted the user "})
}catch(err){
res.status(500).json({message : err.message})
}
})
async function getSubscriber(req,res,next){
let ob
    try 
    {
        console.log(req.params.id)
        ob=await Subscriber.findById(req.params.id)
        console.log(ob.name)
        if(ob == null)
        {
            return res.status(404).json({message:"Cannot find the subcriber"})
        }
    }
    catch(error) {

        console.log("error in user")
        return res.status(500).json({message: error.message})
    }
 
    res.karan=ob
    
    next()
}
module.exports = router