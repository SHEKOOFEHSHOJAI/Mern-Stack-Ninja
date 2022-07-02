const workout = require("../models/workoutMoudels");
 
const moongoose=require('mongoose')
//get all workout

const getWorkout=async(req,res)=>{
    const workouts=await workouts.find({}).sort({createdAt:-1}) 
    res.status(200).json(workouts);
   
    
}

//get a single worout
const getWorkouts=async(req,res)=>{
    const {id}=req.params;
     //IF EMPYTY or not valid
     if (!moongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ error: "NO SUCH WORKOUT" });
     }




    const workouts = await workouts.findById(id);
     
    if(!workouts){
        return res.status(404).json({error:'NO SUCH WORKOUT'})
    }
    res.status(200).json(workouts)
}

//create new workout
 const createWorkout=async(req,res)=>{

     const { title, reps, load } = req.body;
     try {
       //create document
       const workout = await workout.create({ title, load, reps });
       res.status(200).json(workout);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
 }


//delete a workout


//update a workout


module.exports={
    getWorkouts,
    getWorkout,
    createWorkout
}