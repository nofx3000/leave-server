import seq from "../db/seq";
class RoleService {
  static RoleService: RoleService = new RoleService();
  private Role = seq.models.Role;
  public async findRoleById(role_id: number) {
    const res = await this.Role.findOne({
      where: {
        id: role_id,
      },
    });
    return res;
  }
}

export default RoleService.RoleService;
