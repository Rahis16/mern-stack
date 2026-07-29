import { IUser } from "./schema";

export interface FormattedUserResponse {
  id?: string;
  name: string;
  email: string;
  avatar?: string;
  dob?: string;
}

export const formatUserResponse = (user: any): FormattedUserResponse => {
  return {
    id: user._id ? user._id.toString() : user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar || "",
    dob: user.dob || "",
  };
};