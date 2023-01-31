import seq from "../db/seq";
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
    console.log(res);
    return res;
  }
  async findAllRights() {
    return await this.Right.findAll();
  }
}

export default RightService.RightService;
