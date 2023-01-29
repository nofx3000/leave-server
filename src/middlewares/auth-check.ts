import { Next, Context } from "koa";
import { ErrorModel } from "../resmodel/ResModel";

export const authCheck = async (
  ctx: Context,
  next: Next,
  serviceName: string,
  serviceAction: string
) => {
  console.log(serviceName, serviceAction);
};
