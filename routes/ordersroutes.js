import Express from "express";
import {
  createorderController,
  updateorderController,
  getallordersController,
  getorderController,
  deleteorderController,
} from "../controllers/oderController.js";
const router = Express.Router();

router.post("/orders/create", createorderController);
router.post("/orders/update", updateorderController);
router.get("/orders/list", getallordersController);
router.get("/orders/search", getorderController);
router.post("/orders/delete", deleteorderController);
export default router;
