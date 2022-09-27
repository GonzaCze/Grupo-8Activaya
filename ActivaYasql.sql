-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: activaya2
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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cerveza'),(2,'Vinos'),(3,'Destilados'),(4,'Gaseosas'),(5,'Snacks');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
  `pdtImage` varchar(255) DEFAULT NULL,
  `brands_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `CategoryId` int DEFAULT NULL,
  PRIMARY KEY (`pdtID`),
  KEY `CategoryId` (`CategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cerveza Antares Honey Beer','La cerveza de Miel Antares es suave, seca y refrescante, con sublimes tonos de miel en el aroma y post-gusto',500,450,'1664240933639-img.png',NULL,1,1),(2,'Cerveza Antares Barley Wine','Nuestra cerveza de mayor graduación alcohólica. Una hermandad de malta y licor, con rasgos de nuez, caramelo y dulce de leche. Barley Wine, cuando la vid se vuelve cebada',500,450,'1664241049036-img.png',NULL,1,1),(3,'Cerveza Antares Caravana','Es una IPA de baja graduación alcohólica por lo que se deja beber con bastante facilidad. Una cerveza volcada hacia el amargor y con muy bajo alcohol convierte a la caravana en una cerveza liviana y refrescante',475,500,'1664241097646-img.png',NULL,1,1),(4,'Cerveza Antares Catalina','Catalina  es la cerveza más fuerte de Antares, si la medimos por intensidad y complejidad de sabores.',500,450,'1664241156933-img.png',NULL,1,1),(5,'Cerveza Antares Centinela','Cerveza artesanal añejada en barricas con tradición. El roble tiene una larga historia acompañando las bebidas.',500,450,'1664241201762-img.png',NULL,1,1),(6,'Whisky Jack Daniels Tennesse','Suave y con mucho cuerpo presenta un color ámbar cálido y un aroma de vainilla dulce con notas de naranja, azúcar moreno y especias, así como un final largo e intenso. Con la receta original desde hace más de 150 años sale este Tennessee Whiskey.',750,9000,'1664241426204-img.png',NULL,3,3),(7,'Whisky Old Parr 12 años','una mezcla de whiskies de malta de las destilerías Cragganmore y whiskies de grano más jóvenes, y es envejecido en barricas de roble durante un mínimo de 12 años. ',750,12000,'1664241528293-img.png',NULL,3,3),(8,'Whisky Jhonnie Walker Red Label','Johnnie Walker Red Label se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados',750,9000,'1664241601341-img.png',NULL,3,3),(9,'Whisky Jhonnie Walker BlackLabel','Es rico, complejo y bien balanceado, un blend con notas a frutos del bosque, vainilla y tierra ahumada. Mezclado exclusivamente con whiskies madurados por al menos 12 años.',750,12000,'1664241676846-img.png',NULL,3,3),(10,'Vodka Smirnoff','El Vodka Smirnoff  con su grado alcohólico de sólo 37.5% es uno de los vodkas más suaves.',750,5000,'1664241740383-img.png',NULL,3,3),(12,'Vodka Grey Goose','El Vodka Grey Goose es un licor de calidad premium, originalmente hecho en Francia y llevado al mercado estadounidense; es uno de los mejores vodkas franceses, con un toque único que no posee otro licor',750,15000,'1664242028381-img.png',NULL,1,1),(14,'Gin Tanqueray','Receta galardonada y se elabora con los cuatro ingredientes botánicos clásicos de la ginebra: enebro con aroma a pino, cilantro especiado, angélica aromática y regaliz dulce',750,14000,'1664242181404-img.png',NULL,3,3),(15,'Gin Bombay','Ginebra Bombay Sapphire es una ginebra de 40º de alcohol elaborado con el exclusivo alambique de cobre Carterhead',750,13000,'1664242233358-img.png',NULL,3,3),(23,'Gaseosa Coca Cola','Es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras en más de doscientos países o territorios',375,250,'1664243374966-img.png',NULL,4,4),(24,'Gaseosa Sprite ','Sprite es un refresco hecho a base de agua carbonatada con sabor a lima o limón, incolora y sin cafeína, creada por la empresa \"The Coca-Cola Company',375,250,'1664243484685-img.png',NULL,4,4),(25,'Gaseosa Pepsi Wild Cherry','La gaseosa se compone de: agua carbonatada, jarabe de maíz de alta fructosa, color de caramelo, ácido fosfórico, cafeína, ácido cítrico, sabores naturales, azúcar, vainilla, aceites, pepsina, y granos de nuez de cola',375,200,'1664243674526-img.png',NULL,4,4),(26,'Gaseosa Dr Pepe','Con un intenso sabor a caramelo, se diferencia de otras bebidas similares como la Coca Cola en que no es “cola”, sino soda.',375,200,'1664243978455-img.png',NULL,4,4),(28,'Vino ST Henry Shiraz','Un Vino tinto de South Australia, Australia. Este vino tiene 1795 menciones de notas de fruta negra',750,6000,'1664245004904-img.png',NULL,2,2),(29,'Vino Menage a Trois','naturaleza audaz del sabor de las moras y frambuesas, su color rosa se muestra en las atrevidas frutas rojas con las que está hecho',750,11000,'1664245070856-img.png',NULL,2,2),(32,'Vino Petalos','En vista se presenta con un color de tonos rubíes e intensidad media. Inspirado en un vino joven, en el que se destacan fundamentalmente los aromas a frutas frescas',750,8000,'1664245331712-img.png',NULL,2,2),(33,'Snack Doritos','Un aperitivo hecho de maíz con forma de nacho. Aunque Doritos® nos sorprende con diferentes sabores, el de mayor éxito es sin duda el Tex-Mex',175,420,'1664245837368-img.png',NULL,5,5),(34,'Papas Fritas Pringles','Pringles es la marca de un aperitivo con forma de papa frita. Está compuesto por patata deshidratada, almidón de trigo y harinas (papa, maíz y arroz) mezcladas con aceite vegetal',190,410,'1664246679624-img.png',NULL,5,5),(35,'Cheetos Picantes','Un sabor picante y especiado en un bocadillo crocante y con queso',150,390,'1664246746121-img.png',NULL,5,5),(36,'Cheetos Colmillos','Es una deliciosa opción hecha de cereal de maíz con el sabor a queso que tanto te gusta',210,480,'1664246804442-img.png',NULL,5,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userLastN` varchar(255) DEFAULT NULL,
  `userEmail` varchar(255) DEFAULT NULL,
  `userPass` varchar(255) DEFAULT NULL,
  `userCategory` varchar(255) DEFAULT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ignacio','Pegels','ignaciopegels@gmail.com','$2a$10$HzhxdDagNFV4N/svI.HNnexS5UIPK9czR0qvadZgXOMYjvw1q51j.','User','1664248682601-img.jpg'),(2,'Gonzalo','Czerevin','gonzaloczerevin@gmail.com','$2a$10$ju1Q40dCa3E5FfScx5U5iuMaygskCoT3gbkVrDqq.qaDZBSiXbEXa','Admin','1664249401587-img.JPG'),(3,'Sergio','D\'Angelo','SergioDAngelo@gmail.com','$2a$10$ztj7SC3DxEAoeuRbdjSM5e.kC/qNfkCxq5XfAVOFToRhwHlxBBpB2','Admin','1664249473700-img.JPG');
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

-- Dump completed on 2022-09-27 13:34:50
