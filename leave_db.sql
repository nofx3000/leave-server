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

 Date: 02/03/2023 10:24:06
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
  `length` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT '2023-02-28 00:47:42',
  `user_id` int DEFAULT NULL,
  `task_id` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `leaves_ibfk_10` FOREIGN KEY (`task_id`) REFERENCES `Tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `leaves_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Leaves
-- ----------------------------
BEGIN;
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (18, 0.5, '2023-02-27 02:33:27', 1, 1, NULL, 0);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (20, 0.5, '2023-02-27 07:01:47', 1, 1, NULL, 1);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (21, 0.5, '2023-02-27 07:01:47', 1, 1, NULL, 1);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (43, 0.5, '2023-02-27 07:25:37', 1, NULL, NULL, 1);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (49, 3.5, '2023-02-27 07:25:37', 14, 1, NULL, 1);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (65, 1, '2023-02-27 07:25:37', 15, 1, NULL, 1);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (66, 0.5, '2023-02-27 07:25:37', 15, 4, NULL, 0);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (67, 1.5, '2023-02-28 02:09:07', 15, 1, NULL, 0);
INSERT INTO `Leaves` (`id`, `length`, `created_at`, `user_id`, `task_id`, `comment`, `approved`) VALUES (68, 1, '2023-02-28 02:09:07', 14, 1, NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for Records
-- ----------------------------
DROP TABLE IF EXISTS `Records`;
CREATE TABLE `Records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `length` float NOT NULL,
  `leave_at` datetime NOT NULL DEFAULT '2023-02-28 00:47:42',
  `user_id` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `records_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Records
-- ----------------------------
BEGIN;
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (1, 1, '2023-02-28 00:47:42', 1, NULL);
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (2, 2, '2023-01-31 16:03:00', 15, NULL);
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (5, 4, '2023-02-15 02:10:12', 1, NULL);
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (7, 4, '2023-02-27 16:03:00', 15, NULL);
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (8, 4, '2023-02-09 03:03:02', 15, NULL);
INSERT INTO `Records` (`id`, `length`, `leave_at`, `user_id`, `comment`) VALUES (9, 4, '2023-02-09 03:03:15', 14, NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (31, '申请多人调休', 1, NULL, 'leaveService', 'addLeaves');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (32, '为指定用户申请调休', 1, NULL, 'leaveService', 'addUserLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (33, '修改调休申请', 1, NULL, 'leaveService', 'updateLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (34, '删除调休申请', 1, NULL, 'leaveService', 'delLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (35, '审批调休', 1, NULL, 'leaveService', 'approveLeave');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (36, '查看全员倒休记录', 2, '/recordListAll', 'recordService', 'getRecordsList');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (37, '查看本中队倒休记录', 2, '/recordListDivision', 'recordService', 'getRecordsListByDivision');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (38, '查看本人倒休记录', 2, '/recordListUser', 'recordService', 'getRecordsListByUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (39, '添加倒休记录', 2, NULL, 'recordService', 'addRecords');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (40, '修改倒休记录', 2, NULL, 'recordService', 'updateRecord');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (41, '删除倒休记录', 2, NULL, 'recordService', 'delRecord');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (42, '获取单条倒休记录', 2, NULL, 'recordService', 'getRecord');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (43, '为指定用户添加倒休记录', 2, NULL, 'recordService', 'addRecord');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (44, '数据展示', 0, '/show', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (45, '可调休记录展示', 44, '/showLeave', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (46, '获取所有用户的倒休和申请记录', 4, NULL, 'userService', 'getUsersLeaveAndRecord');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Roles
-- ----------------------------
BEGIN;
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (1, 'admin', '1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (2, '工程师', '1,2,3,10,12,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (4, '作业员', '1,2,10,12,16,20,21,22,26,29,30,31,32,33,38,42');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (5, '中队长', '1,2,10,12,16,20,21,22,26,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43');
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
  CONSTRAINT `users_ibfk_13` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_14` FOREIGN KEY (`division_id`) REFERENCES `Divisions` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (1, 'admin', '123', 'donghang', 0, 1, 2);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (13, 't', '123', 't', 0, 4, 1);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (14, 'operator', '123', '111', 0, 4, 1);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (15, 'team', '123', 'ss', 0, 5, 1);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (16, 'engineer', '123', '123', 0, 2, 1);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (17, '1', '123', '1', 0, 4, NULL);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (18, '2', '123', '2', 0, 4, NULL);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (19, '3', '123', '3', 0, 4, NULL);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (20, '4', '123', '4', 0, 4, NULL);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (21, '5', '123', '5', 0, 4, NULL);
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`, `division_id`) VALUES (22, '6', '123', '6', 0, 4, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
