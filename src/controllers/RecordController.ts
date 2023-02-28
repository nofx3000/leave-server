import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { getService } from "../decorator/auth";
import { RecordInter } from "../interface/RecordInterface";
import { Context } from "koa";

const RecordService = getService("RecordService");

class RecordController {
  static RecordController: RecordController = new RecordController();

  getRecordsList() {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.getRecordsList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getRecordsListByDivision(division_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.getRecordsListByDivision(division_id)(
          ctx
        );
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getRecordsListByUser(user_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.getRecordsListByUser(user_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getRecord(record_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.getRecord(record_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addRecords(recordinfo: RecordInter & { operator_list?: string }) {
    return async (ctx: Context) => {
      if (!recordinfo.operator_list) {
        return new ErrorModel("没有选择作业员");
      }
      try {
        const res = await RecordService.addRecords(recordinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addUserRecord(user_id: number, recordinfo: RecordInter) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.addRecord(user_id, recordinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateRecord(record_id: number, new_recordinfo: Partial<RecordInter>) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.updateRecord(
          record_id,
          new_recordinfo
        )(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delRecord(record_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await RecordService.delRecord(record_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }
}

export default RecordController.RecordController;
