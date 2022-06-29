const express=require("express");
require("dotenv").config()
const app=express();

//middelwere
app.use((req,res,next)=>{
console.log(req.path,req.method);
next()

})
app.get("/",(req,res)=>{
    res.json({mssg:"welcome to app"})

})
//listen to request
app.listen(process.env.PORT,()=>{
   console.log("listening on port", process.env.PORT);
})
