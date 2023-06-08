import express, { Router } from "express";
import { getCars } from "../Controller/ServicesController";

const router: Router = express.Router();
router.route("/").get(getCars);

export default router;
