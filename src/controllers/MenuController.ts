import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import RightService from "../services/RightService";
import RoleService from "../services/RoleService";
import { RightInter } from "../interface/RightInterface";
import { listToMap } from "../utils/formatter";
import { Model } from "sequelize";

class MenuController {
  static MenuController: MenuController = new MenuController();
  async getMenuList(role_id: number) {
    // 获取所有权限列表
    const rawAllRightList: Model[] = await RightService.findAllRights();
    const allRightList: RightInter[] = rawAllRightList.map(
      (rawData) => rawData.dataValues
    );
    const allRightMap = listToMap<RightInter>(allRightList);
    // 获取某一角色权限列表
    let rawRoleRightList: Model | null = await RoleService.findRoleById(
      role_id
    );

    const userMenuObj: any = {};
    if (rawRoleRightList) {
      // 角色权限列表字符串转换为数组
      const roleRightIdList: string[] =
        rawRoleRightList.dataValues.right_list.split(",");
      // 处理一级菜单
      roleRightIdList.forEach((id: any) => {
        if (allRightMap[id]) {
          const right = allRightMap[id];
          if (right.pid === 0 && right.is_menu) {
            userMenuObj[id] = {
              key: right.is_menu,
              children: [],
              label: right.right_name,
            };
          }
        }
      });
      // 处理二级菜单
      roleRightIdList.forEach((id: any) => {
        if (allRightMap[id]) {
          const right = allRightMap[id];
          if (right.pid !== 0 && right.is_menu && userMenuObj[right.pid]) {
            userMenuObj[right.pid].children.push({
              key: right.is_menu,
              label: right.right_name,
            });
          }
        }
      });
    } else {
      return new ErrorModel("获取角色权限失败");
    }
    console.log("userMenuObj", userMenuObj);

    return new SuccessModel(userMenuObj);
  }
}

export default MenuController.MenuController;
