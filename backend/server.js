const express=require("express");
require("dotenv").config()
//REQUIRE ROUTERS
const workoutRoutes=require('./routes/workRouts')

const app=express();

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

//listen to request
app.listen(process.env.PORT,()=>{
   console.log("listening on port", process.env.PORT);
})
