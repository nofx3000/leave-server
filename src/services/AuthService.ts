import seq from "../db/seq";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import Role from "../db/models/role.model";
class AuthService {
  static AuthService: AuthService = new AuthService();
  private User = seq.models.User;

  public async findUser(logininfo: LoginInter) {
    const { username, password } = logininfo;
    return await this.User.findOne({
      where: {
        username,
        password,
      },
      include: [
        {
          model: Role,
        },
      ],
    });
  }

  async createUser(userinfo: UserInfoInter) {
    return await this.User.create(userinfo as any);
  }
}

export default AuthService.AuthService;
