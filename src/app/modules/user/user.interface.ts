/* eslint-disable no-unused-vars */

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
