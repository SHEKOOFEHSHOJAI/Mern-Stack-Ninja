const express=require("express");

const app=express();

//listen to request
app.listen(4100,()=>{
    console.log("listening on port 4000");
})