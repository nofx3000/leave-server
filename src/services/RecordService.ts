import seq from "../db/seq";
import { RecordInter } from "../interface/RecordInterface";
class RecordService {
  static RecordService: RecordService = new RecordService();
  private Record = seq.models.Record;
  private User = seq.models.User;
  private Division = seq.models.Division;

  async getRecordsList() {
    return await this.Record.findAll({
      include: [
        {
          model: this.User,
          as: "user",
          include: [
            {
              model: this.Division,
              as: "division",
            },
          ],
        },
      ],
      order: [
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["leave_at", "ASC"],
      ],
    });
  }

  async getRecordsListByDivision(division_id: number) {
    return await this.Record.findAll({
      include: [
        {
          model: this.User,
          where: {
            division_id,
          },
          as: "user",
          include: [
            {
              model: this.Division,
              as: "division",
            },
          ],
        },
      ],
      order: [
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["leave_at", "ASC"],
      ],
    });
  }

  async getRecordsListByUser(user_id: number) {
    const res = await this.Record.findAll({
      where: {
        user_id,
      },
      include: [
        {
          model: this.User,
          as: "user",
          include: [
            {
              model: this.Division,
              as: "division",
            },
          ],
        },
      ],
      order: [
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["leave_at", "ASC"],
      ],
    });
    return res;
  }

  async getRecord(record_id: number) {
    return await this.Record.findOne({
      where: {
        id: record_id,
      },
    });
  }

  async addRecords(recordinfo: RecordInter & { operator_list?: string }) {
    const { operator_list } = recordinfo;
    const user_id_list: number[] | undefined = operator_list
      ?.trim()
      .split(",")
      .map((id_string) => parseInt(id_string));
    console.log("user_id_list", user_id_list);

    const recordsinfo: RecordInter[] | undefined = user_id_list?.map((id) => {
      const _recordinfo = Object.assign({}, recordinfo);
      _recordinfo.user_id = id;
      return _recordinfo;
    });
    return await this.Record.bulkCreate(recordsinfo as any);
  }

  async addRecord(user_id: number, recordinfo: RecordInter) {
    return await this.Record.create(recordinfo as any);
  }

  async updateRecord(record_id: number, new_recordinfo: Partial<RecordInter>) {
    return await this.Record.update(new_recordinfo, {
      where: {
        id: record_id,
      },
    });
  }

  async delRecord(record_id: number) {
    return await this.Record.destroy({
      where: {
        id: record_id,
      },
    });
  }
}

export default RecordService.RecordService;
