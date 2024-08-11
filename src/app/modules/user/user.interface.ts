/* eslint-disable no-unused-vars */

export interface TUser {
  email: string;
  username: string;
  password: string;
  role?: "admin" | "user";
  status?: "inProgress" | "blocked";
  isDeleted?: boolean;
}
