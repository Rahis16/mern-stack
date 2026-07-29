import * as userRepository from "./repository";
import { formatUserResponse, FormattedUserResponse } from "./utils";
import { findByEmailWithPassword } from "./repository";

export const createUserService = async (
  name: string,
  email: string,
  password: string,
  dob: string = "",
  avatar: string = ""
): Promise<FormattedUserResponse> => {
  // Check if user already exists
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  // Save to database via repository
  const savedUser = await userRepository.create({
    name,
    email,
    password, // Note: Hash this password (e.g., using bcrypt) in a real app
    dob,
    avatar,
  });

  return formatUserResponse(savedUser);
};

export const updateUserService = async (
  userId: string,
  updateData: { name?: string; avatar?: string; dob?: string }
): Promise<FormattedUserResponse> => {
  const updatedUser = await userRepository.updateById(userId, updateData);

  if (!updatedUser) {
    throw new Error("User not found.");
  }

  return formatUserResponse(updatedUser);
};


export const loginUserService = async (
  email: string,
  password: string
): Promise<{ user: FormattedUserResponse; token?: string }> => {
  // 1. Find user by email
  const user = await findByEmailWithPassword(email);
  if (!user) {
    throw new Error("Invalid email or password.");
  }

  // 2. Validate password
  // NOTE: If using bcrypt, use: await bcrypt.compare(password, user.password)
  const isPasswordValid = user.password === password; 
  if (!isPasswordValid) {
    throw new Error("Invalid email or password.");
  }

  // 3. (Optional) Generate JWT token here if using auth tokens

  // 4. Return formatted user response without exposing password
  return {
    user: formatUserResponse(user),
    // token, // Include if generating JWT
  };
};