import { Context, Next } from "koa";
import IndexController from "../controllers/IndexController";
import Router from "koa-router";

const router = new Router();

router.prefix("/api");

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = {
    title: "koa2",
  };
});

router.get("/data", async (ctx: Context, next: Next) => {
  ctx.body = await IndexController.getData();
});

export default router;
