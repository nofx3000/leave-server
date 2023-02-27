import seq from "../db/seq";
import { LoginInter, UserInfoInter } from "../interface/UserInterface";
import Role from "../db/models/role.model";
class UserService {
  static UserService: UserService = new UserService();
  private User = seq.models.User;
  private Division = seq.models.Division;

  async getUsersList() {
    return await this.User.findAll();
  }

  async getUsersListByDivision() {
    return await this.Division.findAll({
      include: {
        model: this.User,
      },
    });
  }

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
        {
          model: this.Division,
        },
      ],
    });
    return res;
  }

  async createUser(userinfo: UserInfoInter) {
    return await this.User.create(userinfo as any);
  }

  async updateUser(user_id: number, new_userinfo: Partial<UserInfoInter>) {
    return await this.User.update(new_userinfo, {
      where: {
        id: user_id,
      },
    });
  }

  async delUser(user_id: number) {
    return await this.User.destroy({
      where: {
        id: user_id,
      },
    });
  }
}

export default UserService.UserService;
