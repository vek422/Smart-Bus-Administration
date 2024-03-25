import { Router } from "express";
import { addUser, getUserList, renewPass } from "../controllers/user.js";
const userRoutes = userRoutes();
userRoutes.post("/user/add", addUser);
userRoutes.get("/users/get", getUserList);
userRoutes.post("/user/renewPass", renewPass);
export default userRoutes;
