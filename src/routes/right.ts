import { Context } from "koa";
import RightController from "../controllers/RightController";
import { RightInter } from "../interface/RightInterface";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/right");

router.get("/", async (ctx: Context) => {
  ctx.body = await RightController.getRightsList()(ctx);
});

router.post("/", async (ctx: Context) => {
  const rightinfo: RightInter = ctx.request.body as any;
  ctx.body = await RightController.addRight(rightinfo)(ctx);
});

router.put("/:right_id", async (ctx: Context) => {
  const new_rightinfo: any = ctx.request.body;
  const { right_id } = ctx.params;
  ctx.body = await RightController.updateRight(right_id, new_rightinfo)(ctx);
});

router.delete("/:right_id", async (ctx: Context) => {
  const { right_id } = ctx.params;
  ctx.body = await RightController.delRight(right_id)(ctx);
});

export default router;
