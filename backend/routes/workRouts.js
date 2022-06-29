const express=require("express");
//export router from express
const router=express.Router();

//get all woroutes
//woroutes is routes
router.get('/',(req,res)=>{
res.json({mssg:'GET all workouts'})

})

//GET SINGLE WORKOUT
router.get('/:id',(req,res)=>{
    res.json({mssg:'GET SINGLE WORKOUTES'})
})

//POST A NEW WORKOUT
router.post('/',(req,res)=>{
    res.json({mess:'POST A NEW WORKOUT'})
})


//DELETE A NEW WORKOUT
router.delete('/:id',(req,res)=>{
    res.json({mess:'DELETE A NEW WORKOUT !!!'})
})

// UPDATE A NEW WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mess: "UPDUTE A NEW WORKOUT 3>" });
});
module.exports=router