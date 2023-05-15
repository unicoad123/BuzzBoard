import mongoose from "mongoose";
//import autoincrement from "mongodb-autoincrement";

const ordermodel = new mongoose.Schema({
  Order_id: {
    type: String,
  },
  item_name: {
    type: String,
    require: true,
  },
  cost: {
    type: Number,
    require: true,
  },
  order_date: {
    type: Date,
    require: true,
  },
  delivery_date: {
    type: Date,
    require: true,
  },
});

export default mongoose.model("orders", ordermodel);
