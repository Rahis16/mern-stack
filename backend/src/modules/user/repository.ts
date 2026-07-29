import User, { IUser } from "./schema";

export const create = async (userData: IUser): Promise<IUser> => {
  const newUser = new User(userData);
  return await newUser.save();
};

export const findByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

export const findById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const updateById = async (
  id: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

// Add this function to your existing user.repository.ts

export const findByEmailWithPassword = async (email: string): Promise<IUser | null> => {
  // If password field has select: false in schema, use .select('+password')
  return await User.findOne({ email });
};