import { Router } from "express";
import { createUser, loginUser, updateUser } from "./controllers"; // Update path if needed

const userRoutes = Router();

// RESTful Endpoint Design
// RESTful Route Definitions
userRoutes.post("/register", createUser); // or keep as "/"
userRoutes.post("/login", loginUser);
userRoutes.put("/:id", updateUser); // OR use .patch("/:id", updateUser) for partial updates

export default userRoutes;