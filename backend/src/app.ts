import express, { Request, Response } from "express";
import userRoutes from "./modules/user/routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check / Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Express server is running successfully!");
});

// Routes
app.use("/api/users", userRoutes);

export default app;