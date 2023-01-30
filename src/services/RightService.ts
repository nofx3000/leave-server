import seq from "../db/seq";
import Right from "../db/models/right.model";
class RightService {
  static RightService: RightService = new RightService();
  private Right = seq.models.Right;
  public async authRight(serviceName: string, actionName: string) {
    const res = await Right.findOne({
      where: {
        service_name: serviceName,
        service_action: actionName,
      },
    });
    console.log(res);
    return res;
  }
}

export default RightService.RightService;
