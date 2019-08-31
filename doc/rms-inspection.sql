/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : rms-inspection

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2019-08-31 18:10:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('1', '11', 'winston');
INSERT INTO `company` VALUES ('2', '5', 'winston');
INSERT INTO `company` VALUES ('3', '52', 'winston2');
INSERT INTO `company` VALUES ('4', '51', 'winston23');
