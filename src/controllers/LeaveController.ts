// import LeaveService from "../services/LeaveService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { getService } from "../decorator/auth";
import { LeaveInter } from "../interface/LeaveInterface";
import { Context } from "koa";

const LeaveService = getService("LeaveService");

class LeaveController {
  static LeaveController: LeaveController = new LeaveController();

  getLeavesList() {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.getLeavesList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getLeavesListByDivision(division_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.getLeavesListByDivision(division_id)(
          ctx
        );
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getLeavesListByUser(user_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.getLeavesListByUser(user_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getLeave(leave_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.getLeave(leave_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addLeave(leaveinfo: LeaveInter & {operator_list?: string}) {
    if (!leaveinfo.operator_list) {
      return new ErrorModel('没有选择作业员');
    }
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.addLeave(leaveinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addUserLeave(user_id: number, leaveinfo: LeaveInter) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.addLeave(user_id, leaveinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateLeave(leave_id: number, new_leaveinfo: Partial<LeaveInter>) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.updateLeave(
          leave_id,
          new_leaveinfo
        )(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delLeave(leave_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.delLeave(leave_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  approveLeave(leave_id: number, approved: boolean) {
    return async (ctx: Context) => {
      try {
        const res = await LeaveService.approveLeave(leave_id, approved)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }
}

export default LeaveController.LeaveController;
