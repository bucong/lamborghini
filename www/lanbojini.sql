/*
Navicat MySQL Data Transfer

Source Server         : bc
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : lanbojini

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-02-27 13:03:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminname` varchar(255) DEFAULT NULL,
  `adminpass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'admin');
INSERT INTO `admin` VALUES ('2', 'bucong', 'bucong5733');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `displacement` varchar(255) DEFAULT NULL,
  `oil` varchar(255) DEFAULT NULL,
  `speed` varchar(255) DEFAULT NULL,
  `car` varchar(255) DEFAULT NULL,
  `loveNum` int(11) DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `weight` int(255) DEFAULT NULL,
  `maxspeed` int(255) DEFAULT NULL,
  `cylinder` int(10) DEFAULT NULL,
  `structure` varchar(255) DEFAULT NULL,
  `v2012` int(255) DEFAULT NULL,
  `v2013` int(255) DEFAULT NULL,
  `v2014` int(255) DEFAULT NULL,
  `v2015` int(255) DEFAULT NULL,
  `v2016` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('1', '2015款 LP 750-4 Superveloce', '799.89', '6.5', '17.2', '自动', '三厢', '472', '2700', '1805', '350', '12', '2门2座', '456', '324', '565', '345', '654');
INSERT INTO `car` VALUES ('2', '2013款 LP 700-4 Roadster', '668.88', '6.5', '17.5', '自动', '三厢', '491', '2700', '1730', '330', '12', '2门3座', '345', '287', '267', '321', '333');
INSERT INTO `car` VALUES ('3', '2011款 LP700-4', '520', '5.2', '17.5', '自动', '三厢', '643', '2650', '2020', '360', '10', '2门2座', '564', '312', '545', '356', '535');
INSERT INTO `car` VALUES ('4', '2017款 LP580-2 敞篷版', '300', '5.5', '14.5', '自动', '三厢', '890', '2580', '1800', '300', '10', '2门2座', '765', '432', '765', '345', '656');
INSERT INTO `car` VALUES ('5', '2015款 LP600-4 中', '345', '5.2', '12.5', '双离合', '三厢', '472', '2860', '1870', '360', '12', '2门3座', '745', '684', '653', '765', '466');
INSERT INTO `car` VALUES ('6', '2014款 LP610-4', '410', '5.2', '12.5', '双离合', '三厢', '776', '2690', '1720', '340', '12', '2门2座', '543', '545', '645', '643', '432');
INSERT INTO `car` VALUES ('7', '2017款 基本型', '673.97', '6.2', '14.5', '自动', '三厢', '283', '2880', '1930', '330', '12', '2门2座', '546', '876', '820', '765', '742');
INSERT INTO `car` VALUES ('8', 'Roadster', '943.45', '7.5', '16.2', '自动', '三厢', '875', '2600', '1930', '380', '12', '2门3座', '763', '432', '345', '726', '792');
INSERT INTO `car` VALUES ('9', 'LP770-4', '749', '6.4', '14.8', '自动', '三厢', '397', '2800', '2108', '340', '10', '2门2座', '829', '1045', '876', '1204', '985');
INSERT INTO `car` VALUES ('10', '2013款 基本型', '466', '4.8', '10.8', '自动', '三厢', '530', '2680', '1748', '350', '12', '2门2座', '765', '543', '765', '546', '876');
INSERT INTO `car` VALUES ('11', 'Concept', '860', '7.2', '18.6', '自动', '三厢', '886', '2700', '1648', '336', '10', '4门4座', '876', '766', '543', '765', '876');
INSERT INTO `car` VALUES ('12', 'LPI 910-4 concept', '754', '5.2', '11.8', '双离合', '三厢', '472', '2830', '1795', '348', '10', '2门2座', '433', '546', '758', '435', '876');
INSERT INTO `car` VALUES ('13', '2013款 Concept', '640', '4.6', '9.5', '自动', '三厢', '649', '2760', '1864', '352', '10', '2门2座', '876', '677', '865', '875', '674');
INSERT INTO `car` VALUES ('14', '2013款 LP 700-5 Roadste', '563', '7.4', '16', '自动', '三厢', '666', '2604', '1780', '338', '12', '2门2座', '754', '743', '876', '546', '867');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `acountNumber` varchar(255) DEFAULT NULL,
  `userpass` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `try` varchar(255) DEFAULT NULL,
  `isAccept` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', 'bc', '18752426235', 'bucong5733', '江苏省淮安市', 'Concept', '是');
INSERT INTO `user` VALUES ('3', 'buweichao', '13505239305', 'buweichao', '江苏省淮安市', 'LP770-4', '否');
INSERT INTO `user` VALUES ('4', 'bucong', '18707270267', 'bucong5733', '河南省商丘市', '2011款 LP700-4', '否');
