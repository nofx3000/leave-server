import seq from "../db/seq";
import { LeaveInter } from "../interface/LeaveInterface";
class LeaveService {
  static LeaveService: LeaveService = new LeaveService();
  private Leave = seq.models.Leave;
  private Division = seq.models.Division;
  private User = seq.models.User;

  async getLeavesList() {
    return await this.Leave.findAll();
  }

  async getLeavesListByDivision(division_id: number) {
    return await this.Division.findAll({
      where: {
        id: division_id,
      },
      include: {
        model: this.User,
        include: [
          {
            model: this.Leave,
          },
        ],
      },
    });
  }

  async getLeavesListByUser(user_id: number) {
    return await this.User.findOne({
      where: {
        id: user_id,
      },
      include: {
        model: this.Leave,
      },
    });
  }

  async getLeave(leave_id: number) {
    return await this.Leave.findOne({
      where: {
        id: leave_id,
      },
    });
  }

  async addLeave(leaveinfo: LeaveInter) {
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
        approved,
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
