-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: textrpgdb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `idcharacter` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `backstory` varchar(333) NOT NULL,
  `color` varchar(45) NOT NULL,
  PRIMARY KEY (`idcharacter`),
  KEY `playerid_idx` (`owner`),
  CONSTRAINT `ownerfk` FOREIGN KEY (`owner`) REFERENCES `players` (`idplayer`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,1,'Zephyr','Beady amber eyes, set lightly within their sockets, watch delightfully over the armies they\'ve protected for so long. A moustache and goatee elegantly compliments his hair and leaves an intriguing memory of his fortunate survival.','rgb(168, 173, 92)'),(2,1,'Hagwin','Brown, flowing hair slightly covers a long, radiant face. Smart sapphire eyes, set low within their sockets, watch guardedly over the mountains they\'ve disassociated with for so long. Soft skin seductively compliments his hair and leaves a compelling memory of his luck in battles.','rgb(121, 95, 62)'),(3,1,'Syldria','White, shoulder-length hair awkwardly hangs over a lean, lively face. Glistening hazel eyes, set thightly within their sockets, watch delightfully over the city they\'ve loved for so long. Soft skin alluringly compliments her eyes and and leaves an intriguing memory of her past.','rgb(78, 135, 168)'),(4,1,'Maverick','Gentle gray eyes, set wickedly within their sockets, watch cheerfully over the mountains they\'ve been isolated from for so long. Scars reaching from just under the right eye , first running towards his fairly big lips and ending under his right eye leaves a bittersweet memory of fortunate adventures','rgb(185, 72, 72)'),(5,1,'Merula','White, shoulder-length hair awkwardly hangs over a lean, lively face. Glistening hazel eyes, set thightly within their sockets, watch delightfully over the city they\'ve loved for so long. Soft skin alluringly compliments her eyes and and leaves an intriguing memory of her past.','rgb(90, 119, 71)'),(6,2,'Vankyo','Red, dreadlocks gently hangs over a lean, charming face. Green eyes watch warmly over the tribe they\'ve rarely felt at home at for so long. A gunshot left a mark reaching from the bottom of the left cheek , first running towards thin lips and ending on his chin.','rgb(173, 119, 47)'),(7,2,'Serulian','Brown, flowing hair slightly covers a long, radiant face. Smart sapphire eyes, set low within their sockets, watch guardedly over the mountains they\'ve disassociated with for so long. Soft skin seductively compliments his hair and leaves a compelling memory of his luck in battles.','rgb(165, 90, 199)'),(9,3,'SussyBaka','idk man','rgb(185, 72, 72)');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-09 19:05:30
