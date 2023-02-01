import { Context } from "koa";
import UserController from "../controllers/UserController";
import { UserInfoInter } from "../interface/UserInterface";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/user");

router.get("/", async (ctx: Context) => {
  ctx.body = await UserController.getUsersList()(ctx);
});

router.post("/create", async (ctx: Context) => {
  const userinfo: UserInfoInter = ctx.request.body as any;
  ctx.body = await UserController.createUser(userinfo)(ctx);
});

router.put("/:user_id", async (ctx: Context) => {
  const new_userinfo: any = ctx.request.body;
  const { user_id } = ctx.params;
  ctx.body = await UserController.updateUser(user_id, new_userinfo)(ctx);
});

router.delete("/:user_id", async (ctx: Context) => {
  const { user_id } = ctx.params;
  ctx.body = await UserController.delUser(user_id)(ctx);
});


export default router;
