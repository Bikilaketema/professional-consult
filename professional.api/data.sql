-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: professional
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admins`
--

DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `username_31` (`username`),
  UNIQUE KEY `username_32` (`username`),
  UNIQUE KEY `username_33` (`username`),
  UNIQUE KEY `username_34` (`username`),
  UNIQUE KEY `username_35` (`username`),
  UNIQUE KEY `username_36` (`username`),
  UNIQUE KEY `username_37` (`username`),
  UNIQUE KEY `username_38` (`username`),
  UNIQUE KEY `username_39` (`username`),
  UNIQUE KEY `username_40` (`username`),
  UNIQUE KEY `username_41` (`username`),
  UNIQUE KEY `username_42` (`username`),
  UNIQUE KEY `username_43` (`username`),
  UNIQUE KEY `username_44` (`username`),
  UNIQUE KEY `username_45` (`username`),
  UNIQUE KEY `username_46` (`username`),
  UNIQUE KEY `username_47` (`username`),
  UNIQUE KEY `username_48` (`username`),
  UNIQUE KEY `username_49` (`username`),
  UNIQUE KEY `username_50` (`username`),
  UNIQUE KEY `username_51` (`username`),
  UNIQUE KEY `username_52` (`username`),
  UNIQUE KEY `username_53` (`username`),
  UNIQUE KEY `username_54` (`username`),
  UNIQUE KEY `username_55` (`username`),
  UNIQUE KEY `username_56` (`username`),
  UNIQUE KEY `username_57` (`username`),
  UNIQUE KEY `username_58` (`username`),
  UNIQUE KEY `username_59` (`username`),
  UNIQUE KEY `username_60` (`username`),
  UNIQUE KEY `username_61` (`username`),
  UNIQUE KEY `username_62` (`username`),
  UNIQUE KEY `username_63` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
INSERT INTO `Admins` VALUES (1,'bikila','$2b$10$1u08nCkvm4pIB7gPZZw5QOkl7Z1Iu4tIEMyG1T0oAmTusNh/8vope','2025-03-19 13:45:15','2025-03-19 13:45:15');
/*!40000 ALTER TABLE `Admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Schools`
--

DROP TABLE IF EXISTS `Schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Schools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `schoolName` varchar(255) NOT NULL,
  `gradeLevel` varchar(255) NOT NULL,
  `subjectsNeeded` json NOT NULL,
  `numberOfTeachersNeeded` varchar(255) NOT NULL,
  `trainingType` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Schools`
--

LOCK TABLES `Schools` WRITE;
/*!40000 ALTER TABLE `Schools` DISABLE KEYS */;
INSERT INTO `Schools` VALUES (4,'Green Valley High Updated','High School','[\"Math\", \"Science\", \"English\", \"History\"]','12','Online','987-654-3210','2025-03-19 13:55:18','2025-03-19 14:04:12'),(5,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 13:58:52','2025-03-19 13:58:52'),(6,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:23:49','2025-03-19 14:23:49'),(7,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:23:50','2025-03-19 14:23:50'),(8,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:25:27','2025-03-19 14:25:27'),(9,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:25:29','2025-03-19 14:25:29'),(10,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:23','2025-03-19 14:26:23'),(11,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:24','2025-03-19 14:26:24'),(12,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:24','2025-03-19 14:26:24'),(13,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(14,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(15,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(16,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(17,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(18,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:25','2025-03-19 14:26:25'),(19,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:26','2025-03-19 14:26:26'),(20,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:26','2025-03-19 14:26:26'),(21,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:26','2025-03-19 14:26:26'),(22,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:26','2025-03-19 14:26:26'),(23,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:27','2025-03-19 14:26:27'),(24,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:27','2025-03-19 14:26:27'),(25,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:27','2025-03-19 14:26:27'),(26,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:27','2025-03-19 14:26:27'),(27,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(28,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(29,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(30,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(31,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(32,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:28','2025-03-19 14:26:28'),(33,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:29','2025-03-19 14:26:29'),(34,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:29','2025-03-19 14:26:29'),(35,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:29','2025-03-19 14:26:29'),(36,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:29','2025-03-19 14:26:29'),(37,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:29','2025-03-19 14:26:29'),(38,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:30','2025-03-19 14:26:30'),(39,'Green Valley High','High School','[\"Math\", \"Science\", \"English\"]','10','In-person','0942932231','2025-03-19 14:26:30','2025-03-19 14:26:30'),(40,'dsededed','deded','[\"eded\"]','20','deded','0913783453','2025-03-30 19:57:06','2025-03-30 19:57:06'),(41,'swsws','2','[\"swdwd\", \"dwdede\"]','3','dewded','0913783453','2025-03-30 20:05:34','2025-03-30 20:05:34'),(42,'Bieded','3','[\"swdwd\", \"dwdede\"]','3','dede','0913783453','2025-03-30 20:06:32','2025-03-30 20:06:32'),(43,'deded','Grade 10','[\"dededed\", \"dded\"]','3','deded','0913783453','2025-03-30 20:08:26','2025-03-30 20:08:26'),(44,'deded','KG 3','[\"dedde\", \"ded\"]','33','deded','0913783453','2025-03-30 20:12:21','2025-03-30 20:12:21'),(45,'dededed','Grade 11','[\"deded\"]','44','frefrf','0913783453','2025-03-30 21:32:12','2025-03-30 21:32:12');
/*!40000 ALTER TABLE `Schools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teachers`
--

DROP TABLE IF EXISTS `Teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `zone` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teachers`
--

LOCK TABLES `Teachers` WRITE;
/*!40000 ALTER TABLE `Teachers` DISABLE KEYS */;
INSERT INTO `Teachers` VALUES (2,'John Updated','Doe Updated','Smith Updated','Physics','Zone 2','New Townsville','987-654-3210','2025-03-19 14:02:33','2025-03-19 14:04:51'),(3,'John Updated','Doe Updated','Smith Updated','Physics','Zone 2','New Townsville','987-654-3210','2025-03-19 14:04:49','2025-03-19 14:07:00'),(4,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:06:12','2025-03-19 14:06:12'),(5,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:06:46','2025-03-19 14:06:46'),(6,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:06:53','2025-03-19 14:06:53'),(7,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:06:54','2025-03-19 14:06:54'),(8,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:20','2025-03-19 14:28:20'),(9,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:20','2025-03-19 14:28:20'),(10,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(11,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(12,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(13,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(14,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(15,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(16,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(17,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:21','2025-03-19 14:28:21'),(18,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(19,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(20,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(21,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(22,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(23,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:22','2025-03-19 14:28:22'),(24,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(25,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(26,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(27,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(28,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(29,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:23','2025-03-19 14:28:23'),(30,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(31,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(32,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(33,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(34,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(35,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:24','2025-03-19 14:28:24'),(36,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:25','2025-03-19 14:28:25'),(37,'John','Doe','Smith','Mathematics','Zone 1','Townsville','0942932231','2025-03-19 14:28:25','2025-03-19 14:28:25'),(38,'dededed','ededed','ededed','ededed','edededed','deded','0913783453','2025-03-30 20:37:02','2025-03-30 20:37:02'),(39,'xsxsx','sxsxsx','sxsxsx','sxsxsx','sxsxsx','sxsxsx','0913783453','2025-03-30 20:37:24','2025-03-30 20:37:24'),(40,'dededed','deded','eded','deded','ded','deded','0913783453','2025-03-30 21:32:00','2025-03-30 21:32:00');
/*!40000 ALTER TABLE `Teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tokens`
--

DROP TABLE IF EXISTS `Tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adminId` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `adminId` (`adminId`),
  CONSTRAINT `Tokens_ibfk_1` FOREIGN KEY (`adminId`) REFERENCES `Admins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tokens`
--

LOCK TABLES `Tokens` WRITE;
/*!40000 ALTER TABLE `Tokens` DISABLE KEYS */;
INSERT INTO `Tokens` VALUES (10,1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQzMzcwMzU5LCJleHAiOjE3NDMzNzM5NTl9.DnpS14xe-xjIgi1F3uk-OittfZG70AWBDHWYx3KN0VE','2025-03-30 21:32:40','2025-03-30 21:32:40');
/*!40000 ALTER TABLE `Tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-31  0:53:02
