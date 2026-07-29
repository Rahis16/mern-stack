import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  avatar?: string;
  password: string; // Removed optional '?' to match required: true
  dob: string;      // Removed optional '?' to match required: true
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  password: {type : String, required: true },
  dob: {type: String, required: true}
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;