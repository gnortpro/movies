import { Role } from "./index";
export class User {
  id?: number;
  email: string;
  password?: string;
  avata?: string;
  firstName: string;
  lastName: string;
}
export class UserAuth {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
