-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: activaya3
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Antares'),(2,'Heineken'),(3,'Quilmes'),(4,'Budweiser'),(5,'Bramha'),(6,'Rutini'),(7,'San Felipe'),(8,'Coca Cola'),(9,'Pepsi'),(10,'Sprite'),(11,'Lay\'s'),(12,'Cheetos'),(13,'Krachitos');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cerveza'),(2,'Vino'),(3,'Destilados'),(4,'Gaseosa'),(5,'Snacks');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pdtID` int NOT NULL AUTO_INCREMENT,
  `pdtName` varchar(255) NOT NULL,
  `pdtDescription` varchar(255) NOT NULL,
  `pdtCapacity` int NOT NULL,
  `pdtPrice` decimal(10,0) NOT NULL,
  `pdtImage` blob NOT NULL,
  `brands_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`pdtID`),
  KEY `Brands_id_idx` (`brands_id`),
  KEY `Categorie_id_idx` (`category_id`),
  CONSTRAINT `Brands_id` FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `pdtID` int NOT NULL AUTO_INCREMENT,
  `pdtName` varchar(255) DEFAULT NULL,
  `pdtDescription` varchar(255) DEFAULT NULL,
  `pdtCapacity` int DEFAULT NULL,
  `pdtPrice` decimal(10,0) DEFAULT NULL,
  `pdtImage` blob,
  `brands_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `CategoryId` int DEFAULT NULL,
  PRIMARY KEY (`pdtID`),
  KEY `CategoryId` (`CategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (20,'Antares Honey Beer','Nuestra Honey Beer recoge la historia que dio origen a “la luna de miel” y lo celebra con notas mento-ladas y frutales. Y, por supuesto, una inmersión de miel pura para abrir los corazones.',500,450,_binary '1663618672766-img.png',NULL,1,1),(22,'Antares Caravana','Es una IPA de baja graduación alcohólica por lo que se deja beber con bastante facilidad. Una cerveza volcada hacia el amargor y con muy bajo alcohol convierte a la caravana en una cerveza liviana y refrescante.',473,450,_binary '1663618880312-img.png',NULL,1,1),(23,'Antares Catalina','Catalina La Grande es la cerveza más fuerte de Antares, si la medimos por intensidad y complejidad de sabores. Es una Imperial Stout de más de 11º grados, añejada en barricas de roble, muy cargada de carácter de malta, café y chocolate',500,450,_binary '1663618951617-img.png',NULL,1,1),(24,'Antares Cuatro Tres','Una cerveza cobriza intensa en maltas, con carácter sedoso y la dosis de lúpulo justa para redondear su personalidad.',500,450,_binary '1663619033623-img.png',NULL,1,1),(25,'Antares El Centinela','Cerveza artesanal añejada en barricas con tradición. El roble tiene una larga historia acompañando las bebidas. Cerveza, vino, whisky y otros destilados fueron guardados en barricas de Roble hasta la llegada del acero inoxidable',500,450,_binary '1663619120456-img.png',NULL,1,1),(26,'Antares Imperial Staut','Cerveza negra y tostada, empapada de alcohol y pasas, amarga y ahumada',500,450,_binary '1663619178705-img.png',NULL,1,1),(27,'Antares Kolsch','Es una cerveza dorada, fresca en aroma, con un acabado seco del lúpulo final.',500,450,_binary '1663619273016-img.png',NULL,1,1),(42,'Casa de Campo Tinto','Breve descripcion del producto',750,3000,_binary '1663628068404-img.png',NULL,2,2),(43,'Di Montefalco','El Sagrantino di Montefalco es, sin ninguna duda, el mejor vino tinto italiano de la región italiana de Umbría',750,17000,_binary '1663629660877-img.png',NULL,2,2),(44,'Menage Trois','Descripción del Producto. Menage a Trois California Red Blend expone la fruta fresca, madura y parecida a una mermelada que es la tarjeta de presentación del vino de California.',750,15000,_binary '1663631675458-img.png',NULL,2,2),(45,'ST Henry Shiraz','Un Vino tinto de South Australia, Australia. Este vino tiene 1779 menciones de notas de fruta negra (ciruela, mora, fruta negra).',750,12000,_binary '1663631774799-img.png',NULL,2,2),(46,'Jack Daniel 150 Aniversary','Descripción. Jack Daniel\'s 150 años Aniversario es la edición limitada recíén producida para conmemorar los 150 años y celebrar la historia de Jack Daniel\'s.',700,45000,_binary '1663631985468-img.png',NULL,3,3),(47,'Grand Old Parr 12 años','En nariz es limpio, ligero y fresco, con un toque de hojas verdes y flores, y notas de roble y tierra recién removida. Boca: En boca, sabor de fruta madura, melocotones y frambuesas. Posee un final limpio y suave. ',750,35000,_binary '1663632081685-img.png',NULL,3,3),(48,'Johnnie Walker Red Label','Johnnie Walker Red Label se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados',750,8000,_binary '1663632163327-img.png',NULL,3,3),(49,'Johnnie Walker Black Label','Johnnie Walker Black Label es rico, complejo y bien balanceado, un blend con notas a frutos del bosque, vainilla y tierra ahumada',750,15000,_binary '1663632261264-img.png',NULL,3,3),(50,'Smirnoff ','Smirnoff es un tipo de vodka de origen ruso. Elaborado en la destilería homónima, fundada por Piotr Arsenieyevich Smirnov en 1864, es el vodka premium de mayor venta en el mundo. MARIDAJE: Perfecto para cócteles',750,4000,_binary '1663632353735-img.png',NULL,3,3),(51,'Abosult Vodka','Absolut es, de hecho, tan puro como puede ser el vodka. Aún así, la pureza tiene un sabor: rico, con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas',750,6000,_binary '1663632403110-img.png',NULL,3,3),(52,'Grey Goose Vodka','Vodka con un elegante aroma floral acentuado por una sutil nota a cítricos. De rica consistencia y con un delicioso sabor que permanece en el paladar',750,8000,_binary '1663632481206-img.png',NULL,3,3),(53,'Vodka Russian Bear','Es un vodka ruso, de 40,0 % alc./vol., obtenido por cuádruple destilación del alcohol de trigo y centeno de Yambov, y filtrado por arena de cuarzo, carbón de leña activado y tejido de paño',750,11000,_binary '1663632585190-img.png',NULL,3,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping`
--

DROP TABLE IF EXISTS `shopping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Products_pdtID` int NOT NULL,
  `Shopping_cart_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Shopping_Shopping_cart1_idx` (`Shopping_cart_id`),
  KEY `Products_pdtID_idx` (`Products_pdtID`),
  CONSTRAINT `Products_pdtID` FOREIGN KEY (`Products_pdtID`) REFERENCES `product` (`pdtID`),
  CONSTRAINT `Shopping_cart_id` FOREIGN KEY (`Shopping_cart_id`) REFERENCES `shopping_cart` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping`
--

LOCK TABLES `shopping` WRITE;
/*!40000 ALTER TABLE `shopping` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Usuarios_userID` int NOT NULL,
  `Total` decimal(7,2) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Shopping_cart_Usuarios1_idx` (`Usuarios_userID`),
  CONSTRAINT `fk_Shopping_cart_Usuarios1` FOREIGN KEY (`Usuarios_userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `userLastN` varchar(45) NOT NULL,
  `userEmail` varchar(60) NOT NULL,
  `userPass` varchar(255) NOT NULL,
  `userCategory` varchar(45) DEFAULT NULL,
  `userImage` blob NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Ignacio','Pegels','ignaciopegels@gmail.com','$2a$10$PREj/hUUaJj2CDzcPi1i0.O07KlLns.DsAe2JM2uXOLfPR7spvqW6','User',_binary '1660620830034-img.JPG'),(8,'Gonzalo','Czerevin','gonzaloczerevin@gmail.com','$2a$10$9YHO/4iJ7QNi799IWj1fnel0KtfiayNZJlgyXJ6IyP7XrMfrWo2y6','Admin',_binary '1660619331495-img.jpeg'),(9,'Sergio','D\'angelo','sergiodangelo@gmail.com','$2a$10$4zgTtazNFYXCN/dliH9fAuMkqEi/boCcVbdhjyc0OXCHZdUM6RS56','Admin',_binary '1660619369574-img.jpeg'),(10,'Cristian','Schmidt','cristianschmidt@gmail.com','$2a$10$OJXLveQtko/XX8pgKfXh/.7fHQuJQYU6eyAR/kAP1L.vh2zDL1X5e','Admin',_binary '1660619407981-img.jpeg');
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

-- Dump completed on 2022-09-19 21:20:57
