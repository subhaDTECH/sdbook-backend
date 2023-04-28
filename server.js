const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
require("dotenv").config({ path: "./config/config.env" });
connectDatabase();
const mongoose = require("mongoose");
//mongoose.set('strictQuery', true);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.get('/working',(req,res)=>{
  res.status(200).json({
    message:"working"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
