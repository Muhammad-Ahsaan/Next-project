const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  addres: String,
  contact: String,
});
export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
