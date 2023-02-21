import seq from "../db/seq";
import { TaskInter } from "../interface/TaskInterface";
class TaskService {
  static TaskService: TaskService = new TaskService();
  private Task = seq.models.Task;
  // authRight装饰器中使用，不需添加至权限数据库
  public async findTaskById(task_id: number) {
    const res = await this.Task.findOne({
      where: {
        id: task_id,
      },
    });
    return res;
  }

  async getTask(task_id: number) {
    return await this.Task.findOne({
      where: {
        id: task_id,
      },
    });
  }

  async getTasksList() {
    return await this.Task.findAll();
  }

  async addTask(taskinfo: TaskInter) {
    return await this.Task.create(taskinfo as any);
  }

  async updateTask(task_id: number, new_taskinfo: Partial<TaskInter>) {
    return await this.Task.update(new_taskinfo, {
      where: {
        id: task_id,
      },
    });
  }

  async delTask(task_id: number) {
    return await this.Task.destroy({
      where: {
        id: task_id,
      },
    });
  }
}

export default TaskService.TaskService;
