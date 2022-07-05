const { default: mongoose } = require("mongoose");
const workout = require("../models/workoutMoudels");
 
const moongoose=require('mongoose')
//get all workout

const getWorkouts = async (req, res) => {
  const workouts = await workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get a single worout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  //IF EMPYTY or not valid
  if (!moongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO SUCH WORKOUT" });
  }

  const workouts = await workout.findById(id);

  // if don't find id
  if (!workouts) {
    return res.status(404).json({ error: "NO SUCH WORKOUT" });
  }
  res.status(200).json(workouts);
};

//create new workout
 const createWorkout=async(req,res)=>{

     const { title, reps, load } = req.body;
     // add to database
     try {
       //create document
       const workout = await workout.create({ title, load, reps });
       res.status(200).json(workout);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
 }


//delete a workout


const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!moongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};


// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!moongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};