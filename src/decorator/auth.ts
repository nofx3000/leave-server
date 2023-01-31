import path from "path";
import { Context, Next } from "koa";
import { ErrorModel, SuccessModel } from "../resmodel/ResModel";
import RightService from "../services/RightService";
import RoleService from "../services/RoleService";

export const getService = (serviceName: string) => {
  const servicePath = path.join(__dirname, "..", "services", serviceName);

  const serviceModule = require(servicePath).default;

  if (!serviceModule) {
    console.log("没有该服务");
    return null;
  }

  const service_prototype = Object.getPrototypeOf(serviceModule);

  const keys_service_prototype = Object.getOwnPropertyNames(service_prototype);

  const service: any = {};

  console.log("*****************************************");
  console.log("拦截服务 => %s", serviceName);
  console.log("*****************************************");

  keys_service_prototype.forEach((_actionName) => {
    if (
      serviceModule &&
      serviceModule[_actionName] &&
      typeof serviceModule[_actionName] === "function"
    ) {
      const origFunc = serviceModule[_actionName];
      service[_actionName] = Invocation(
        serviceName,
        _actionName,
        serviceModule,
        origFunc
      );
      console.log("action => %s", _actionName);
    }
  });

  console.log("*****************************************\n");
  return service;
};

const Invocation = (
  serviceName: string,
  actionName: string,
  serviceModule: any,
  origFunc: () => any
) => {
  return function () {
    const args: any = arguments;

    return async (ctx: Context) => {
      try {
        const pass: boolean = await authFn(ctx, serviceName, actionName);
        if (pass) {
          const res = origFunc.apply(serviceModule, args);
          return res;
        }
      } catch (err) {
        console.log(err);
        // return new ErrorModel("该角色权限验证失败");
        throw new Error("该角色权限验证失败");
      }
    };
  };
};

const authFn = async (
  ctx: Context,
  serviceName: string,
  actionName: string
) => {
  if (!ctx.userInfo || isNaN(parseInt(ctx.userInfo["role_id"]))) {
    throw new Error("没有角色信息");
  }
  // 验证权限
  const authRes = await RightService.authRight(serviceName, actionName);
  if (!authRes) {
    throw new Error("没有该权限信息");
  }
  const right_id: number = authRes.id;

  const roleRes = await RoleService.findRoleById(ctx.userInfo["role_id"]);
  if (!roleRes || !roleRes.dataValues) {
    throw new Error("没有角色信息");
  }

  const rightList: string[] = roleRes.dataValues.right_list.split(",");
  for (const k in rightList) {
    const right_id_in_list: string = rightList[k];
    if (parseInt(right_id_in_list) === right_id) {
      console.log("++++++++++++++++++++++   角色鑒權通過");
      return true;
    }
  }
  throw new Error("没有权限");
};
