import { Context } from "koa";
import RecordController from "../controllers/RecordController";
import { RecordInter } from "../interface/RecordInterface";
import Router from "koa-router";

const router = new Router();

router.prefix("/api/record");

router.get("/", async (ctx: Context) => {
  ctx.body = await RecordController.getRecordsList()(ctx);
});

router.get("/division/:division_id", async (ctx: Context) => {
  const { division_id } = ctx.params;
  ctx.body = await RecordController.getRecordsListByDivision(division_id)(ctx);
});

router.get("/user/:user_id", async (ctx: Context) => {
  const { user_id } = ctx.params;
  ctx.body = await RecordController.getRecordsListByUser(user_id)(ctx);
});

router.get("/:record_id", async (ctx: Context) => {
  const { record_id } = ctx.params;
  ctx.body = await RecordController.getRecord(record_id)(ctx);
});

router.post("/", async (ctx: Context) => {
  const recordinfo: RecordInter = ctx.request.body as any;
  ctx.body = await RecordController.addRecords(recordinfo)(ctx);
});

router.post("/:user_id", async (ctx: Context) => {
  const { user_id } = ctx.params;
  const recordinfo: RecordInter = ctx.request.body as any;
  ctx.body = await RecordController.addUserRecord(user_id, recordinfo)(ctx);
});

router.put("/:record_id", async (ctx: Context) => {
  const new_recordinfo: any = ctx.request.body;
  const { record_id } = ctx.params;
  ctx.body = await RecordController.updateRecord(
    record_id,
    new_recordinfo
  )(ctx);
});

router.delete("/:record_id", async (ctx: Context) => {
  const { record_id } = ctx.params;
  ctx.body = await RecordController.delRecord(record_id)(ctx);
});

export default router;
