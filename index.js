const express= require('express');

const path=require('path');
const mongoose=require('mongoose');
// process.env.MONGODB_URI

mongoose.connect(`mongodb+srv://aditi901:test123@cluster0.jjk7iuz.mongodb.net/test?retryWrites=true&w=majority`,
{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
  console.log("database connected");
});

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));





app.get('/',(req,res)=>{
  res.send('Hello from yolocamp')
})

app.listen(3000,()=>{
  console.log('Serving on port 3000');
})