/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : leave_db

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 23/02/2023 16:18:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Divisions
-- ----------------------------
DROP TABLE IF EXISTS `Divisions`;
CREATE TABLE `Divisions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `realname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Divisions
-- ----------------------------
BEGIN;
INSERT INTO `Divisions` (`id`, `realname`) VALUES (1, '一中队');
INSERT INTO `Divisions` (`id`, `realname`) VALUES (2, '二中队');
INSERT INTO `Divisions` (`id`, `realname`) VALUES (3, '三中队');
INSERT INTO `Divisions` (`id`, `realname`) VALUES (4, '四中队');
INSERT INTO `Divisions` (`id`, `realname`) VALUES (5, '技术室');
COMMIT;

-- ----------------------------
-- Table structure for Leaves
-- ----------------------------
DROP TABLE IF EXISTS `Leaves`;
CREATE TABLE `Leaves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `length` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2023-02-23 02:54:12',
  `user_id` int DEFAULT NULL,
  `task_id` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `leaves_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `leaves_ibfk_6` FOREIGN KEY (`task_id`) REFERENCES `Tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Leaves
-- ----------------------------
BEGIN;
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (1, 10, '2023-02-22 07:39:25', 1, 1, NULL, 0);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (4, 8, '2023-02-22 09:12:41', 1, 1, NULL, 0);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (5, 0, '2023-02-23 08:15:59', NULL, NULL, NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for Rights
-- ----------------------------
DROP TABLE IF EXISTS `Rights`;
CREATE TABLE `Rights` (
  `id` int NOT NULL AUTO_INCREMENT,
  `right_name` varchar(255) NOT NULL,
  `pid` int DEFAULT NULL,
  `is_menu` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `service_action` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Rights
-- ----------------------------
BEGIN;
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (1, '调休申请', 0, '/leave', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (2, '倒休管理', 0, '/record', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (3, '任务管理', 0, '/task', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (4, '用户管理', 0, '/user', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (5, '权限管理', 0, '/right', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (6, '角色管理', 0, '/role', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (7, '登陆', 0, NULL, 'userService', 'findUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (8, '添加用户', 4, NULL, 'userService', 'createUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (9, '修改用户', 4, NULL, 'userService', 'updateUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (10, '用户列表（无建制）', 4, '/userList', 'userService', 'getUsersList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (11, '删除用户', 4, NULL, 'userService', 'delUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (12, '角色列表', 6, '/roleList', 'roleService', 'getRolesList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (13, '添加角色', 6, NULL, 'roleService', 'addRole');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (14, '修改角色', 6, NULL, 'roleService', 'updateRole');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (15, '删除角色', 6, NULL, 'roleService', 'delRole');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (16, '权限列表', 5, '/rightList', 'rightService', 'getRightsList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (17, '添加权限', 5, NULL, 'rightService', 'addRight');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (18, '修改权限', 5, NULL, 'rightService', 'updateRight');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (19, '删除权限', 5, NULL, 'rightService', 'delRight');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (20, '查询单个角色', 6, NULL, 'roleService', 'getRole');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (21, '任务列表', 3, '/taskList', 'taskService', 'getTasksList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (22, '查询单个任务', 3, NULL, 'taskService', 'getTask');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (23, '添加任务', 3, NULL, 'taskService', 'addTask');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (24, '修改任务', 3, NULL, 'taskService', 'updateTask');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (25, '删除任务', 3, NULL, 'taskService', 'delTask');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (26, '用户列表（按中队）', 4, NULL, 'userService', 'getUsersListByDivision');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (27, '查看全员调休申请', 1, '/leaveListAll', 'leaveService', 'getLeavesList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (28, '查看分队调休申请', 1, '/leaveListDivision', 'leaveService', 'getLeavesListByDivision');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (29, '查看本人调休申请', 1, '/leaveListUser', 'leaveService', 'getLeavesListByUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (30, '获取单条调休申请', 1, NULL, 'leaveService', 'getLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (31, '申请个人调休', 1, NULL, 'leaveService', 'addLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (32, '为指定用户申请调休', 1, NULL, 'leaveService', 'addUserLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (33, '修改调休申请', 1, NULL, 'leaveService', 'updateLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (34, '删除调休申请', 1, NULL, 'leaveService', 'delLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (35, '审批调休', 1, NULL, 'leaveService', 'approveLeave');
COMMIT;

-- ----------------------------
-- Table structure for Roles
-- ----------------------------
DROP TABLE IF EXISTS `Roles`;
CREATE TABLE `Roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `right_list` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Roles
-- ----------------------------
BEGIN;
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (1, 'admin1', '1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (2, 'enginner', '1,2,3');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (4, 't', '1,2,3,4,6,8,9,10,11,12,13,14,15,16,20');
COMMIT;

-- ----------------------------
-- Table structure for Tasks
-- ----------------------------
DROP TABLE IF EXISTS `Tasks`;
CREATE TABLE `Tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(255) NOT NULL,
  `operator_list` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Tasks
-- ----------------------------
BEGIN;
INSERT INTO `Tasks` (`id`, `task_name`, `operator_list`) VALUES (1, 'test1', '1,13,1');
INSERT INTO `Tasks` (`id`, `task_name`, `operator_list`) VALUES (4, '1', '13,1');
INSERT INTO `Tasks` (`id`, `task_name`, `operator_list`) VALUES (7, '12', '13,1');
COMMIT;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `realname` varchar(255) NOT NULL,
  `catagory` int NOT NULL,
  `role_id` int DEFAULT NULL,
  `division_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `division_id` (`division_id`),
  CONSTRAINT `users_ibfk_10` FOREIGN KEY (`division_id`) REFERENCES `Divisions` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_9` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (1, 'admin', '123', 'dd', 0, 1, 2);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (13, 't', '123', 't', 0, 4, 1);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (14, '111', '123', '111', 0, 4, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
