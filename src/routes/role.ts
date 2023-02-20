import { Context } from "koa";
import RoleController from "../controllers/RoleController";
import { RoleInter } from "../interface/RoleInterface";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/role");

router.get("/", async (ctx: Context) => {
  ctx.body = await RoleController.getRolesList()(ctx);
});

router.get("/:role_id", async (ctx: Context) => {
  const { role_id } = ctx.params;
  ctx.body = await RoleController.getRole(role_id)(ctx);
});

router.post("/", async (ctx: Context) => {
  const roleinfo: RoleInter = ctx.request.body as any;
  ctx.body = await RoleController.addRole(roleinfo)(ctx);
});

router.put("/:role_id", async (ctx: Context) => {
  const new_roleinfo: any = ctx.request.body;
  const { role_id } = ctx.params;
  ctx.body = await RoleController.updateRole(role_id, new_roleinfo)(ctx);
});

router.delete("/:role_id", async (ctx: Context) => {
  const { role_id } = ctx.params;
  ctx.body = await RoleController.delRole(role_id)(ctx);
});

export default router;
