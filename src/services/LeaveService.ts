import seq from "../db/seq";
import { LeaveInter } from "../interface/LeaveInterface";
class LeaveService {
  static LeaveService: LeaveService = new LeaveService();
  private Leave = seq.models.Leave;
  private Division = seq.models.Division;
  private User = seq.models.User;
  private Task = seq.models.Task;

  async getLeavesList() {
    return await this.Leave.findAll({
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
        {
          model: this.Task,
        },
      ],
      order: [
        ["approved", "ASC"],
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["created_at", "ASC"],
      ],
    });
  }

  async getLeavesListByDivision(division_id: number) {
    return await this.Leave.findAll({
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
        {
          model: this.Task,
        },
      ],
      order: [
        ["approved", "ASC"],
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["created_at", "ASC"],
      ],
    });
  }

  async getLeavesListByUser(user_id: number) {
    const res = await this.Leave.findAll({
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
        {
          model: this.Task,
        },
      ],
      order: [
        ["approved", "ASC"],
        ["user", "division", "id", "ASC"],
        ["user", "id", "ASC"],
        ["created_at", "ASC"],
      ],
    });
    return res;
  }

  async getLeave(leave_id: number) {
    return await this.Leave.findOne({
      where: {
        id: leave_id,
      },
    });
  }

  async addLeaves(leaveinfo: LeaveInter & { operator_list?: string }) {
    const { operator_list } = leaveinfo;
    const user_id_list: number[] | undefined = operator_list
      ?.trim()
      .split(",")
      .map((id_string) => parseInt(id_string));
    console.log("user_id_list", user_id_list);

    const leavesinfo: LeaveInter[] | undefined = user_id_list?.map((id) => {
      const _leaveinfo = Object.assign({}, leaveinfo);
      _leaveinfo.user_id = id;
      return _leaveinfo;
    });
    return await this.Leave.bulkCreate(leavesinfo as any);
  }

  async addLeave(user_id: number, leaveinfo: LeaveInter) {
    return await this.Leave.create(leaveinfo as any);
  }

  async updateLeave(leave_id: number, new_leaveinfo: Partial<LeaveInter>) {
    return await this.Leave.update(new_leaveinfo, {
      where: {
        id: leave_id,
      },
    });
  }

  async delLeave(leave_id: number) {
    return await this.Leave.destroy({
      where: {
        id: leave_id,
      },
    });
  }

  async approveLeave(leave_id: number, approved: boolean) {
    return await this.Leave.update(
      {
        approved: Number(approved),
      },
      {
        where: {
          id: leave_id,
        },
      }
    );
  }
}

export default LeaveService.LeaveService;
