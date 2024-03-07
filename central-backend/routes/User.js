import { Router } from "express";
import { addUser } from "../controllers/User.js";

const router = Router();

router.post("/user/add", addUser);

export default router;
