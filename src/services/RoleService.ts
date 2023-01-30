import seq from "../db/seq";
import Right from "../db/models/role.model";
class RoleService {
  static RoleService: RoleService = new RoleService();
  private Role = seq.models.Role;
  public async findRoleById(role_id: number) {
    const res = await Right.findOne({
      where: {
        role_id,
      },
    });
    console.log(res);
    return res;
  }
}

export default RoleService.RoleService;
