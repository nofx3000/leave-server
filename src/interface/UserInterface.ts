import { RoleInter } from "./RoleInterface";

export interface UserInfoInter {
  id?: number;
  username: string;
  password: string;
  realname: string;
  catagory: string;
  role_id: number;
  role?: RoleInter;
}

export interface LoginInter {
  username: string;
  password: string;
}
