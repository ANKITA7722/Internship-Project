const express = require("express");
const app=express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute=require("./routes/userRoutes");
const jobRoutes=require("./routes/jobRoute");
require("dotenv").config();

mongoose.connect(process.env.DBCONECTION,
    {
        useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsInsecure: true
    }).then(()=>{
    
    console.log("DB succesfullly Connected")
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use("/users", userRoute); 
app.use("/jobs", jobRoutes);

 const port=process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`server run on port ${port}`);
})