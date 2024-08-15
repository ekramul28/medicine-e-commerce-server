/* eslint-disable no-unused-vars */

import { Model } from "mongoose";

export interface TUser {
  email: string;
  fastName: string;
  password: string;
  confirmPassword: string;
  imageUrl: string;
  phoneNo: string;
  role?: "admin" | "user";
  status?: "inProgress" | "blocked";
  isDeleted?: boolean;
}
export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
export const USER_ROLE = {
  user: "user",
  admin: "admin",
} as const;

export type TUserRole = keyof typeof USER_ROLE;
