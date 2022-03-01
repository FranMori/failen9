-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: us-cdbr-east-05.cleardb.net    Database: heroku_ea22d88b65468a6
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `otf1s`
--

use heroku_f15694e4d3d9e2c;

DROP TABLE IF EXISTS `otf1s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `otf1s` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstDrake` varchar(255) DEFAULT NULL,
  `firstHerald` varchar(255) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `enemyTeam` varchar(255) DEFAULT NULL,
  `Side` varchar(255) DEFAULT NULL,
  `Duration` varchar(255) DEFAULT NULL,
  `Result` varchar(255) DEFAULT NULL,
  `Ban1` varchar(255) DEFAULT NULL,
  `Ban2` varchar(255) DEFAULT NULL,
  `Ban3` varchar(255) DEFAULT NULL,
  `Ban4` varchar(255) DEFAULT NULL,
  `Ban5` varchar(255) DEFAULT NULL,
  `Pick1` varchar(255) DEFAULT NULL,
  `Pick2` varchar(255) DEFAULT NULL,
  `Pick3` varchar(255) DEFAULT NULL,
  `Pick4` varchar(255) DEFAULT NULL,
  `Pick5` varchar(255) DEFAULT NULL,
  `KDA1` varchar(255) DEFAULT NULL,
  `KDA2` varchar(255) DEFAULT NULL,
  `KDA3` varchar(255) DEFAULT NULL,
  `KDA4` varchar(255) DEFAULT NULL,
  `KDA5` varchar(255) DEFAULT NULL,
  `CS1` int(11) DEFAULT NULL,
  `CS2` int(11) DEFAULT NULL,
  `CS3` int(11) DEFAULT NULL,
  `CS4` int(11) DEFAULT NULL,
  `CS5` int(11) DEFAULT NULL,
  `Degat1` int(11) DEFAULT NULL,
  `Degat2` int(11) DEFAULT NULL,
  `Degat3` int(11) DEFAULT NULL,
  `Degat4` int(11) DEFAULT NULL,
  `Degat5` int(11) DEFAULT NULL,
  `Gold1` int(11) DEFAULT NULL,
  `Gold2` int(11) DEFAULT NULL,
  `Gold3` int(11) DEFAULT NULL,
  `Gold4` int(11) DEFAULT NULL,
  `Gold5` int(11) DEFAULT NULL,
  `GoldDiff1` varchar(255) DEFAULT NULL,
  `GoldDiff2` varchar(255) DEFAULT NULL,
  `GoldDiff3` varchar(255) DEFAULT NULL,
  `GoldDiff4` varchar(255) DEFAULT NULL,
  `GoldDiff5` varchar(255) DEFAULT NULL,
  `Pink1` int(11) DEFAULT NULL,
  `Pink2` int(11) DEFAULT NULL,
  `Pink3` int(11) DEFAULT NULL,
  `Pink4` int(11) DEFAULT NULL,
  `Pink5` int(11) DEFAULT NULL,
  `Vision1` int(11) DEFAULT NULL,
  `Vision2` int(11) DEFAULT NULL,
  `Vision3` int(11) DEFAULT NULL,
  `Vision4` int(11) DEFAULT NULL,
  `Vision5` int(11) DEFAULT NULL,
  `EPick1` varchar(255) DEFAULT NULL,
  `EPick2` varchar(255) DEFAULT NULL,
  `EPick3` varchar(255) DEFAULT NULL,
  `EPick4` varchar(255) DEFAULT NULL,
  `EPick5` varchar(255) DEFAULT NULL,
  `EBan1` varchar(255) DEFAULT NULL,
  `EBan2` varchar(255) DEFAULT NULL,
  `EBan3` varchar(255) DEFAULT NULL,
  `EBan4` varchar(255) DEFAULT NULL,
  `EBan5` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otf1s`
--

LOCK TABLES `otf1s` WRITE;
/*!40000 ALTER TABLE `otf1s` DISABLE KEYS */;
/*!40000 ALTER TABLE `otf1s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prepaotf2s`
--

DROP TABLE IF EXISTS `prepaotf2s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `prepaotf2s` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstDrake` varchar(255) DEFAULT NULL,
  `firstHerald` varchar(255) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `enemyTeam` varchar(255) DEFAULT NULL,
  `Side` varchar(255) DEFAULT NULL,
  `Duration` varchar(255) DEFAULT NULL,
  `Result` varchar(255) DEFAULT NULL,
  `Draft` varchar(255) DEFAULT NULL,
  `Ban1` varchar(255) DEFAULT NULL,
  `Ban2` varchar(255) DEFAULT NULL,
  `Ban3` varchar(255) DEFAULT NULL,
  `Ban4` varchar(255) DEFAULT NULL,
  `Ban5` varchar(255) DEFAULT NULL,
  `Pick1` varchar(255) DEFAULT NULL,
  `Pick2` varchar(255) DEFAULT NULL,
  `Pick3` varchar(255) DEFAULT NULL,
  `Pick4` varchar(255) DEFAULT NULL,
  `Pick5` varchar(255) DEFAULT NULL,
  `KDA1` varchar(255) DEFAULT NULL,
  `KDA2` varchar(255) DEFAULT NULL,
  `KDA3` varchar(255) DEFAULT NULL,
  `KDA4` varchar(255) DEFAULT NULL,
  `KDA5` varchar(255) DEFAULT NULL,
  `CS1` int(11) DEFAULT NULL,
  `CS2` int(11) DEFAULT NULL,
  `CS3` int(11) DEFAULT NULL,
  `CS4` int(11) DEFAULT NULL,
  `CS5` int(11) DEFAULT NULL,
  `Degat1` int(11) DEFAULT NULL,
  `Degat2` int(11) DEFAULT NULL,
  `Degat3` int(11) DEFAULT NULL,
  `Degat4` int(11) DEFAULT NULL,
  `Degat5` int(11) DEFAULT NULL,
  `Gold1` int(11) DEFAULT NULL,
  `Gold2` int(11) DEFAULT NULL,
  `Gold3` int(11) DEFAULT NULL,
  `Gold4` int(11) DEFAULT NULL,
  `Gold5` int(11) DEFAULT NULL,
  `GoldDiff1_8` varchar(255) DEFAULT NULL,
  `GoldDiff2_8` varchar(255) DEFAULT NULL,
  `GoldDiff3_8` varchar(255) DEFAULT NULL,
  `GoldDiff4_8` varchar(255) DEFAULT NULL,
  `GoldDiff5_8` varchar(255) DEFAULT NULL,
  `GoldDiff1_14` varchar(255) DEFAULT NULL,
  `GoldDiff2_14` varchar(255) DEFAULT NULL,
  `GoldDiff3_14` varchar(255) DEFAULT NULL,
  `GoldDiff4_14` varchar(255) DEFAULT NULL,
  `GoldDiff5_14` varchar(255) DEFAULT NULL,
  `GoldDiff1_22` varchar(255) DEFAULT NULL,
  `GoldDiff2_22` varchar(255) DEFAULT NULL,
  `GoldDiff3_22` varchar(255) DEFAULT NULL,
  `GoldDiff4_22` varchar(255) DEFAULT NULL,
  `GoldDiff5_22` varchar(255) DEFAULT NULL,
  `GoldDiff1` varchar(255) DEFAULT NULL,
  `GoldDiff2` varchar(255) DEFAULT NULL,
  `GoldDiff3` varchar(255) DEFAULT NULL,
  `GoldDiff4` varchar(255) DEFAULT NULL,
  `GoldDiff5` varchar(255) DEFAULT NULL,
  `Pink1` int(11) DEFAULT NULL,
  `Pink2` int(11) DEFAULT NULL,
  `Pink3` int(11) DEFAULT NULL,
  `Pink4` int(11) DEFAULT NULL,
  `Pink5` int(11) DEFAULT NULL,
  `Vision1` int(11) DEFAULT NULL,
  `Vision2` int(11) DEFAULT NULL,
  `Vision3` int(11) DEFAULT NULL,
  `Vision4` int(11) DEFAULT NULL,
  `Vision5` int(11) DEFAULT NULL,
  `EPick1` varchar(255) DEFAULT NULL,
  `EPick2` varchar(255) DEFAULT NULL,
  `EPick3` varchar(255) DEFAULT NULL,
  `EPick4` varchar(255) DEFAULT NULL,
  `EPick5` varchar(255) DEFAULT NULL,
  `EBan1` varchar(255) DEFAULT NULL,
  `EBan2` varchar(255) DEFAULT NULL,
  `EBan3` varchar(255) DEFAULT NULL,
  `EBan4` varchar(255) DEFAULT NULL,
  `EBan5` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prepaotf2s`
--

LOCK TABLES `prepaotf2s` WRITE;
/*!40000 ALTER TABLE `prepaotf2s` DISABLE KEYS */;
/*!40000 ALTER TABLE `prepaotf2s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scrims`
--

DROP TABLE IF EXISTS `scrims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `scrims` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstDrake` varchar(255) DEFAULT NULL,
  `firstHerald` varchar(255) DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `enemyTeam` varchar(255) DEFAULT NULL,
  `Side` varchar(255) DEFAULT NULL,
  `Duration` varchar(255) DEFAULT NULL,
  `Result` varchar(255) DEFAULT NULL,
  `Ban1` varchar(255) DEFAULT NULL,
  `Ban2` varchar(255) DEFAULT NULL,
  `Ban3` varchar(255) DEFAULT NULL,
  `Ban4` varchar(255) DEFAULT NULL,
  `Ban5` varchar(255) DEFAULT NULL,
  `Pick1` varchar(255) DEFAULT NULL,
  `Pick2` varchar(255) DEFAULT NULL,
  `Pick3` varchar(255) DEFAULT NULL,
  `Pick4` varchar(255) DEFAULT NULL,
  `Pick5` varchar(255) DEFAULT NULL,
  `KDA1` varchar(255) DEFAULT NULL,
  `KDA2` varchar(255) DEFAULT NULL,
  `KDA3` varchar(255) DEFAULT NULL,
  `KDA4` varchar(255) DEFAULT NULL,
  `KDA5` varchar(255) DEFAULT NULL,
  `CS1` int(11) DEFAULT NULL,
  `CS2` int(11) DEFAULT NULL,
  `CS3` int(11) DEFAULT NULL,
  `CS4` int(11) DEFAULT NULL,
  `CS5` int(11) DEFAULT NULL,
  `Degat1` int(11) DEFAULT NULL,
  `Degat2` int(11) DEFAULT NULL,
  `Degat3` int(11) DEFAULT NULL,
  `Degat4` int(11) DEFAULT NULL,
  `Degat5` int(11) DEFAULT NULL,
  `Gold1` int(11) DEFAULT NULL,
  `Gold2` int(11) DEFAULT NULL,
  `Gold3` int(11) DEFAULT NULL,
  `Gold4` int(11) DEFAULT NULL,
  `Gold5` int(11) DEFAULT NULL,
  `GoldDiff1_8` varchar(255) DEFAULT NULL,
  `GoldDiff2_8` varchar(255) DEFAULT NULL,
  `GoldDiff3_8` varchar(255) DEFAULT NULL,
  `GoldDiff4_8` varchar(255) DEFAULT NULL,
  `GoldDiff5_8` varchar(255) DEFAULT NULL,
  `GoldDiff1_14` varchar(255) DEFAULT NULL,
  `GoldDiff2_14` varchar(255) DEFAULT NULL,
  `GoldDiff3_14` varchar(255) DEFAULT NULL,
  `GoldDiff4_14` varchar(255) DEFAULT NULL,
  `GoldDiff5_14` varchar(255) DEFAULT NULL,
  `GoldDiff1_22` varchar(255) DEFAULT NULL,
  `GoldDiff2_22` varchar(255) DEFAULT NULL,
  `GoldDiff3_22` varchar(255) DEFAULT NULL,
  `GoldDiff4_22` varchar(255) DEFAULT NULL,
  `GoldDiff5_22` varchar(255) DEFAULT NULL,
  `GoldDiff1` varchar(255) DEFAULT NULL,
  `GoldDiff2` varchar(255) DEFAULT NULL,
  `GoldDiff3` varchar(255) DEFAULT NULL,
  `GoldDiff4` varchar(255) DEFAULT NULL,
  `GoldDiff5` varchar(255) DEFAULT NULL,
  `Pink1` int(11) DEFAULT NULL,
  `Pink2` int(11) DEFAULT NULL,
  `Pink3` int(11) DEFAULT NULL,
  `Pink4` int(11) DEFAULT NULL,
  `Pink5` int(11) DEFAULT NULL,
  `EPick1` varchar(255) DEFAULT NULL,
  `EPick2` varchar(255) DEFAULT NULL,
  `EPick3` varchar(255) DEFAULT NULL,
  `EPick4` varchar(255) DEFAULT NULL,
  `EPick5` varchar(255) DEFAULT NULL,
  `EBan1` varchar(255) DEFAULT NULL,
  `EBan2` varchar(255) DEFAULT NULL,
  `EBan3` varchar(255) DEFAULT NULL,
  `EBan4` varchar(255) DEFAULT NULL,
  `EBan5` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrims`
--

LOCK TABLES `scrims` WRITE;
/*!40000 ALTER TABLE `scrims` DISABLE KEYS */;
/*!40000 ALTER TABLE `scrims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `staff` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-01 10:42:37
