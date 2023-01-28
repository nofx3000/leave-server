import { Context, Next } from "koa";
import IndexController from "../controllers/IndexController";

const router = require("koa-router")();

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
