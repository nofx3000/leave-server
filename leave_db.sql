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

 Date: 20/02/2023 17:13:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Rights
-- ----------------------------
BEGIN;
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (1, '调休申请管理', 0, '/leave', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (2, '倒休管理', 0, '/record', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (3, '任务管理', 0, '/task', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (4, '用户管理', 0, '/user', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (5, '权限管理', 0, '/right', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (6, '角色管理', 0, '/role', NULL, NULL);
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (7, '登陆', 0, NULL, 'userService', 'findUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (8, '添加用户', 4, NULL, 'userService', 'createUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (9, '修改用户', 4, NULL, 'userService', 'updateUser');
INSERT INTO `Rights` (`id`, `right_name`, `pid`, `is_menu`, `service_name`, `service_action`) VALUES (10, '用户列表', 4, '/userList', 'userService', 'getUsersList');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Roles
-- ----------------------------
BEGIN;
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (1, 'admin1', '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20');
INSERT INTO `Roles` (`id`, `role_name`, `right_list`) VALUES (2, 'enginner', '1,2,3');
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
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` (`id`, `username`, `password`, `realname`, `catagory`, `role_id`) VALUES (1, 'admin', '123', 'dh', 0, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
