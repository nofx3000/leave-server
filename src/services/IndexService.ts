import seq from "../db/seq";
class IndexService {
  static IndexService: IndexService = new IndexService();
  private SomeModel = seq.models.SomeModel;
  async findData() {
    return this.SomeModel.findAll();
  }
}

export default IndexService.IndexService;
