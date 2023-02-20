import seq from "../db/seq";
import { RoleInter } from "../interface/RoleInterface";
class RoleService {
  static RoleService: RoleService = new RoleService();
  private Role = seq.models.Role;
  // authRight装饰器中使用，不需添加至权限数据库
  public async findRoleById(role_id: number) {
    const res = await this.Role.findOne({
      where: {
        id: role_id,
      },
    });
    return res;
  }

  async getRole(role_id: number) {
    return await this.Role.findOne({
      where: {
        id: role_id,
      },
    });
  }

  async getRolesList() {
    return await this.Role.findAll();
  }

  async addRole(roleinfo: RoleInter) {
    return await this.Role.create(roleinfo as any);
  }

  async updateRole(role_id: number, new_roleinfo: Partial<RoleInter>) {
    return await this.Role.update(new_roleinfo, {
      where: {
        id: role_id,
      },
    });
  }

  async delRole(role_id: number) {
    return await this.Role.destroy({
      where: {
        id: role_id,
      },
    });
  }
}

export default RoleService.RoleService;
