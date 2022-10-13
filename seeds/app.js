const mongoose=require('mongoose');
// process.env.MONGODB_URI
const Campground=require('../models/campground');
const cities = require('./cities');

const { places, descriptors } = require('./seedHelpers');



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
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
      const random1000 = Math.floor(Math.random() * 1000);
      const camp = new Campground({
          location: `${cities[random1000].city}, ${cities[random1000].state}`,
          title: `${sample(descriptors)} ${sample(places)}`
      })
      await camp.save();
  }
}
seedDB().then(() => {
  mongoose.connection.close();
})