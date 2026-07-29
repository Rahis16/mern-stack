import { Request, Response } from "express";
import { createUserService, updateUserService } from "./service";
import { loginUserService } from "./service";


export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name, dob, avatar } = req.body;

    const userResponse = await createUserService(
      name,
      email,
      password,
      dob,
      avatar
    );
    
    return res.status(201).json({
      success: true,
      data: userResponse,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to create user",
    });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Extract ID from URL path parameters
    const updateData = req.body;

    const userResponse = await updateUserService(id, updateData);

    return res.status(200).json({
      success: true,
      data: userResponse,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message || "Failed to update user",
    });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const result = await loginUserService(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: error.message || "Invalid credentials.",
    });
  }
};
