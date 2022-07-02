const express=require("express");
require("dotenv").config()
//REQUIRE ROUTERS
const workoutRoutes=require('./routes/workRouts')

const app=express();
//mongoose require
const mongoose=require('mongoose')

//middelwere
//access to midelwere for update data
// middelwere is requist hundeler
app.use(express.json())

app.use((req,res,next)=>{
console.log(req.path,req.method);
next()

})
//ROUTES
// app.get("/",(req,res)=>{
//     res.json({mssg:"welcome to app"})

// })

//go to the workroutes file 
//=>    /  in end api/woroutes
//api/woroutes/
app.use('/api/woroutes',workoutRoutes)


//conect to db
mongoose
  .connect(process.env.MOGO_URI)
  .then(() => {
    
    //listen to request
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })  
  .catch((error) => {
    console.log(error);
  });  
  
