import seq from "../db/seq";
import { RightInter } from "../interface/RightInterface";
class RightService {
  static RightService: RightService = new RightService();
  private Right = seq.models.Right;
  async authRight(serviceName: string, actionName: string) {
    const res = await this.Right.findOne({
      where: {
        service_name: serviceName,
        service_action: actionName,
      },
    });
    return res;
  }
  async findAllRights() {
    return await this.Right.findAll();
  }

  async getRightsList() {
    return await this.Right.findAll();
  }

  async addRight(rightinfo: RightInter) {
    return await this.Right.create(rightinfo as any);
  }

  async updateRight(right_id: number, new_rightinfo: Partial<RightInter>) {
    return await this.Right.update(new_rightinfo, {
      where: {
        id: right_id,
      },
    });
  }

  async delRight(right_id: number) {
    return await this.Right.destroy({
      where: {
        id: right_id,
      },
    });
  }
}

export default RightService.RightService;
