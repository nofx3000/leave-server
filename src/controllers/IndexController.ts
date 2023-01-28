import IndexService from "../services/IndexService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
class IndexController {
  static IndexController: IndexController = new IndexController();
  async getData() {
    const data = await IndexService.findData();
    if (data) {
      return new SuccessModel(data);
    } else {
      return new ErrorModel("not found");
    }
  }
}

export default IndexController.IndexController;
