import { Router } from "express";
import {
  addUser,
  getUserInfo,
  getUserList,
  renewPass,
} from "../controllers/user.js";
const userRoutes = Router();
userRoutes.post("/add", addUser);
userRoutes.get("/get-list", getUserList);
userRoutes.get("/get-info/:uid", getUserInfo);
userRoutes.post("/renewPass", renewPass);

export default userRoutes;
