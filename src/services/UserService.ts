import seq from "../db/seq";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import Role from "../db/models/role.model";
class UserService {
  static UserService: UserService = new UserService();
  private User = seq.models.User;

  async findUser(logininfo: LoginInter) {
    const { username, password } = logininfo;
    const res = await this.User.findOne({
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
    return res
  }

  async createUser(userinfo: UserInfoInter) {
    console.log('++++++++++++++++++++++', userinfo);
    return await this.User.create(userinfo as any);
  }
}

export default UserService.UserService;
