import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import RightService from "../services/RightService";
import RoleService from "../services/RoleService";
import { RightInter } from "../interface/RightInterface";
import { Model } from "sequelize";

class MenuController {
  static MenuController: MenuController = new MenuController();
  async getMenuList(role_id: number) {
    const rawAllRightList: Model[] = await RightService.findAllRights();
    // 处理一级菜单
    const allMenuObj = rawAllRightList.reduce((acc: any, cur) => {
      const rightObj: RightInter = cur.dataValues;
      if (rightObj && rightObj.is_menu && rightObj.pid === 0) {
        acc[rightObj.id] = {
          key: rightObj.is_menu,
          children: [],
          label: rightObj.right_name,
        };
        return acc;
      } else {
        return acc;
      }
    }, {});
    // 处理二级菜单
    rawAllRightList.forEach((right: Model) => {
      const rightObj = right.dataValues;
      if (rightObj && rightObj.is_menu && rightObj.pid !== 0) {
        allMenuObj[rightObj.pid].children.push({
          key: rightObj.is_menu,
          label: rightObj.right_name,
        });
      }
    });

    let rawRoleRightList: Model | null = await RoleService.findRoleById(
      role_id
    );
    const userMenuObj: any = {};
    if (rawRoleRightList) {
      // 角色权限列表字符串转换为数组
      const roleRightIdList: string[] =
        rawRoleRightList.dataValues.right_list.split(",");
      roleRightIdList.forEach((id) => {
        if (allMenuObj[id]) {
          userMenuObj[id] = allMenuObj[id];
        }
      });
    } else {
      return new ErrorModel("获取角色权限失败");
    }

    return new SuccessModel(userMenuObj);
  }
}

export default MenuController.MenuController;
