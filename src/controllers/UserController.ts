// import UserService from "../services/UserService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../conf/jwt";
import { getService } from "../decorator/auth";
import { Context } from "koa";

const UserService = getService("UserService");

class UserController {
  static UserController: UserController = new UserController();

  getUsersList() {
    return async (ctx: Context) => {
      try {
        const res = await UserService.getUsersList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  createUser(userinfo: UserInfoInter) {
    return async (ctx: Context) => {
      try {
        const res = await UserService.createUser(userinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateUser(user_id: number, new_userinfo: Partial<UserInfoInter>) {
    return async (ctx: Context) => {
      try {
        const res = await UserService.updateUser(user_id, new_userinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delUser(user_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await UserService.delUser(user_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  async verify(token: string) {
    try {
      const decode = jwt.verify(token.split(" ")[1], SECRET_KEY);
      return new SuccessModel(decode);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }
}

export default UserController.UserController;
