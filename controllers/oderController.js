import Order from "../models/ordermodel.js";
import asyncHandler from "express-async-handler";
import moment from "moment/moment.js";
import date from "date-and-time";

export const createorderController = asyncHandler(async (req, res) => {
  const { order_id, item_name, cost, order_date, delivery_date } = req.body;
  if (!order_id || !item_name || !cost || !order_date || !delivery_date) {
    res.status(400);
    throw new Error("All Fields are Required");
  }

  const exixstingorder = await Order.findOne({ order_id });

  if (exixstingorder) {
    res.status(400);
    throw new Error("Order already inserted");
  }
  const order = await new Order({
    order_id,
    item_name,
    cost,
    order_date,
    delivery_date,
  }).save();
  res.status(200).json({ message: "Order Inserted Successfully" });
});

export const updateorderController = asyncHandler(async (req, res) => {
  const { _id, delivery_date } = req.body;
  const existingorder = await Order.findOne({ _id });
  const query = { delivery_date: existingorder.delivery_date };
  const newvalue = { $set: { delivery_date: delivery_date } };
  await Order.updateOne(query, newvalue).exec();
  res.status(200).json({
    message: "Updated Successfully",
  });
});

export const getallordersController = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  if (!orders) {
    res.status(404).json({
      message: "No data is Present",
    });
  }
  const { order_id, item_name, cost, delivery_date, order_date } = orders;
  const actualddate = new Date(delivery_date);
  const newddate = date.format(actualddate, "YYYY/MM/DD");
  const actualodate = new Date(order_date);
  const newodate = date.format(actualodate, "YYYY/MM/DD");
  res.status(200).json({
    orders,
  });
});

export const getorderController = asyncHandler(async (req, res) => {
  const _id = req.body;
  console.log(_id);
  const exixstingorder = await Order.findOne({ _id });
  res.status(200).json({
    exixstingorder,
  });
  if (!exixstingorder) {
    res.status(404);
    console.log(exixstingorder);
    throw new Error("Order is not present");
  }
});

export const deleteorderController = asyncHandler(async (req, res) => {
  const _id = req.body;
  const exixstingorder = await Order.findOne({ _id });

  if (!exixstingorder) {
    res.status(404);
    throw new Error("Order is not present");
  }
  await Order.deleteOne({ _id });
  res.status(200).json({
    message: "Order Deleted Successfully",
  });
});
