import Express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import OrderRoutes from "./routes/ordersroutes.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();
connectDB();
const app = Express();
app.use(bodyParser.json());
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
const port = process.env.port || 8000;

app.use("/api/v1/", OrderRoutes);

app.listen(port, function () {
  console.log(`Sever running on ${port}`);
});
