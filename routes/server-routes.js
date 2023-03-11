import express from "express";

import {
  getCar,
  getEmployee,
  getBranch,
} from "../controllers/server-controller.js";

const router = express.Router();

router.get("/cars", getCar);
router.get("/employees", getEmployee);
router.get("/branches", getBranch);

export default router;
