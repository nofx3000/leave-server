import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { getService } from "../decorator/auth";
import { RightInter } from "../interface/RightInterface";
import { Context } from "koa";

const RightService = getService("RightService");

class RightController {
  static RightController: RightController = new RightController();

  getRightsList() {
    return async (ctx: Context) => {
      try {
        const res = await RightService.getRightsList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addRight(rightinfo: RightInter) {
    return async (ctx: Context) => {
      try {
        const res = await RightService.addRight(rightinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateRight(right_id: number, new_rightinfo: Partial<RightInter>) {
    return async (ctx: Context) => {
      try {
        const res = await RightService.updateRight(
          right_id,
          new_rightinfo
        )(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delRight(right_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RightService.delRight(right_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }
}

export default RightController.RightController;
