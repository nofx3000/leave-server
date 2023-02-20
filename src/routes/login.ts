import { Context } from "koa";
import LoginController from "../controllers/LoginController";
import { UserInfoInter } from "../interface/UserInterface";
import { ErrorModel } from "../resmodel/ResModel";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/login");

router.post("/", async (ctx: Context) => {
  const { username, password } = ctx.request.body as UserInfoInter;
  const res = await LoginController.login({ username, password });
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

router.get("/verify1", async (ctx: Context) => {
  const token = ctx.header.authorization;
  if (!token) {
    console.log("untoken");
    ctx.status = 401;
    ctx.body = new ErrorModel(401, "no token");
    return;
  }
  const res = await LoginController.verify(token);
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

export default router;
