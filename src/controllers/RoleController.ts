// import RoleService from "../services/RoleService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { getService } from "../decorator/auth";
import { RoleInter } from "../interface/RoleInterface";
import { Context } from "koa";

const RoleService = getService("RoleService");

class RoleController {
  static RoleController: RoleController = new RoleController();

  getRolesList() {
    return async (ctx: Context) => {
      try {
        const res = await RoleService.getRolesList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getRole(role_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RoleService.getRole(role_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addRole(roleinfo: RoleInter) {
    return async (ctx: Context) => {
      try {
        const res = await RoleService.addRole(roleinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateRole(role_id: number, new_roleinfo: Partial<RoleInter>) {
    return async (ctx: Context) => {
      try {
        const res = await RoleService.updateRole(role_id, new_roleinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delRole(role_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RoleService.delRole(role_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }
}

export default RoleController.RoleController;
