// import UserService from "../services/UserService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../conf/jwt";
import UserService from "../services/UserService";

class LoginController {
  static LoginController: LoginController = new LoginController();
  async login(logininfo: LoginInter) {
    try {
      let userinfo = await UserService.findUser(logininfo);
      if (!userinfo) {
        return new ErrorModel("user not found");
      }
      const { dataValues } = userinfo;
      let token: any;
      token = jwt.sign(dataValues, SECRET_KEY, {
        expiresIn: "24h",
      });
      return new SuccessModel(token);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }

  async verify(token: string) {
    console.log('-----------in LoginController----------------', token);
    try {
      const decode = jwt.verify(token.split(" ")[1], SECRET_KEY);
      return new SuccessModel(decode);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }
}

export default LoginController.LoginController;
