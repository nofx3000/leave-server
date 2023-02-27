import { Context } from "koa";
import LeaveController from "../controllers/LeaveController";
import { LeaveInter } from "../interface/LeaveInterface";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/leave");

router.get("/", async (ctx: Context) => {
  ctx.body = await LeaveController.getLeavesList()(ctx);
});

router.get("/division/:division_id", async (ctx: Context) => {
  const { division_id } = ctx.params;
  ctx.body = await LeaveController.getLeavesListByDivision(division_id)(ctx);
});

router.get("/user/:user_id", async (ctx: Context) => {
  const { user_id } = ctx.params;
  ctx.body = await LeaveController.getLeavesListByUser(user_id)(ctx);
});

router.get("/:leave_id", async (ctx: Context) => {
  const { leave_id } = ctx.params;
  ctx.body = await LeaveController.getLeave(leave_id)(ctx);
});

router.post("/", async (ctx: Context) => {
  //   const user_id: number = ctx.userinfo.id;
  const leaveinfo: LeaveInter = ctx.request.body as any;
  console.log(leaveinfo);

  ctx.body = await LeaveController.addLeaves(leaveinfo)(ctx);
});

router.post("/:user_id", async (ctx: Context) => {
  const { user_id } = ctx.params;
  const leaveinfo: LeaveInter = ctx.request.body as any;
  ctx.body = await LeaveController.addUserLeave(user_id, leaveinfo)(ctx);
});

router.put("/:leave_id", async (ctx: Context) => {
  const new_leaveinfo: any = ctx.request.body;
  const { leave_id } = ctx.params;
  ctx.body = await LeaveController.updateLeave(leave_id, new_leaveinfo)(ctx);
});

router.delete("/:leave_id", async (ctx: Context) => {
  const { leave_id } = ctx.params;
  ctx.body = await LeaveController.delLeave(leave_id)(ctx);
});

router.patch("/:leave_id", async (ctx: Context) => {
  const { approved } = ctx.request.body as any;
  const { leave_id } = ctx.params;
  ctx.body = await LeaveController.approveLeave(leave_id, approved)(ctx);
});

export default router;
