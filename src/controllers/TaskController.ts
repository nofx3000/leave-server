// import TaskService from "../services/TaskService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { getService } from "../decorator/auth";
import { TaskInter } from "../interface/TaskInterface";
import { Context } from "koa";

const TaskService = getService("TaskService");

class TaskController {
  static TaskController: TaskController = new TaskController();

  getTasksList() {
    return async (ctx: Context) => {
      try {
        const res = await TaskService.getTasksList()(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  getTask(task_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await TaskService.getTask(task_id)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  addTask(taskinfo: TaskInter) {
    return async (ctx: Context) => {
      try {
        const res = await TaskService.addTask(taskinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  updateTask(task_id: number, new_taskinfo: Partial<TaskInter>) {
    return async (ctx: Context) => {
      try {
        const res = await TaskService.updateTask(task_id, new_taskinfo)(ctx);
        return new SuccessModel(res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }

  delTask(task_id: number) {
    return async (ctx: Context) => {
      try {
        const res = await TaskService.delTask(task_id)(ctx);
        return new SuccessModel(0, res);
      } catch (error) {
        return new ErrorModel((error as any).toString());
      }
    };
  }
}

export default TaskController.TaskController;
