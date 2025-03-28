import { Router } from "express";
import { getUsers } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/users", getUsers);

export { usersRouter };
