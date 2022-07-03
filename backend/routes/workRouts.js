const express=require("express");
// const workout=require('../models/workoutMoudels')
const { createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout } = require("../coutrollers/workoutCoutroller");

//export router from express
const router=express.Router();

//get all woroutes
//woroutes is routes
router.get('/',getWorkouts)
//GET SINGLE WORKOUT
router.get("/:id", getWorkout);

//POST A NEW WORKOUT
router.post("/", createWorkout);
    // const {title,reps,load}=req.body;
    // try{
    //     //create document
    //     const workout=await workout.create({title,load,reps});
    //     res.status(200).json(workout)
    // }
    // catch(error){
    //     res.status(400).json({error:error.message})
    // }
    



//DELETE A NEW WORKOUT
router.delete('/:id',deleteWorkout)
// UPDATE A NEW WORKOUT
router.patch("/:id", updateWorkout) 
module.exports=router