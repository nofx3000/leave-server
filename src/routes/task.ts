import { Context } from "koa";
import TaskController from "../controllers/TaskController";
import { TaskInter } from "../interface/TaskInterface";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/task");

router.get("/", async (ctx: Context) => {
  ctx.body = await TaskController.getTasksList()(ctx);
});

router.get("/:task_id", async (ctx: Context) => {
  const { task_id } = ctx.params;
  ctx.body = await TaskController.getTask(task_id)(ctx);
});

router.post("/", async (ctx: Context) => {
  const taskinfo: TaskInter = ctx.request.body as any;
  ctx.body = await TaskController.addTask(taskinfo)(ctx);
});

router.put("/:task_id", async (ctx: Context) => {
  const new_taskinfo: any = ctx.request.body;
  const { task_id } = ctx.params;
  ctx.body = await TaskController.updateTask(task_id, new_taskinfo)(ctx);
});

router.delete("/:task_id", async (ctx: Context) => {
  const { task_id } = ctx.params;
  ctx.body = await TaskController.delTask(task_id)(ctx);
});

export default router;
