import { Context } from "koa";
import LoginController from "../controllers/LoginController";
import { UserInfoInter } from "../interface/UserInterface";
import { ErrorModel } from "../resmodel/ResModel";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/login");

router.post("/", async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserInfoInter;
  console.log(ctx.request.body);
  const res = await LoginController.login({ username, password });
  console.log('======', res);
  
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

export default router;
