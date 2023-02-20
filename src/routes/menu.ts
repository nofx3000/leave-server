import { Context } from "koa";
import { ErrorModel } from "../resmodel/ResModel";
import MenuController from "../controllers/MenuController";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/menu");

router.get("/", async (ctx: Context) => {
  const role_id = ctx.userInfo.role_id;
  const res = await MenuController.getMenuList(role_id);
  if (res instanceof ErrorModel) {
    ctx.status = 401;
  }
  ctx.body = res;
});

export default router;
