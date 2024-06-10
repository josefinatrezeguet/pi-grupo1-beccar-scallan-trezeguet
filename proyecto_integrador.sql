-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-06-2024 a las 17:43:54
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_integrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_producto` int(10) UNSIGNED DEFAULT NULL,
  `id_usuario` int(10) UNSIGNED DEFAULT NULL,
  `texto` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_producto`, `id_usuario`, `texto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(7, 3, 2, '¡Me encanta el brillo y la sensación de hidratación que proporciona el Lifter Gloss de Maybelline! Es perfecto para un aspecto fresco y natural.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(8, 3, 3, '¡El Lifter Gloss de Maybelline es mi nuevo imprescindible! No es pegajoso y deja mis labios suaves y brillantes. ¡Lo recomiendo totalmente!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(9, 3, 4, '¡Este gloss es fantástico! Agrega un toque de color sutil y brillo a mis labios. ¡No puedo salir de casa sin él!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(10, 4, 5, 'La base Born This Way de Too Faced es mi favorita absoluta! Se funde perfectamente con mi piel, dejándola impecable y radiante.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(11, 4, 1, '¡Esta base es asombrosa! Su cobertura es increíble y se siente tan ligera. ¡No puedo dejar de recomendarla a todos mis amigos!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(12, 4, 2, '¡Me encanta cómo mi piel se ve con la base Born This Way de Too Faced! Es tan natural y duradera, ¡simplemente perfecta para mí!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(13, 5, 3, '¡La paleta Nude de Huda Beauty es una obra maestra! Los tonos son tan versátiles y pigmentados. ¡Amo cómo puedo crear looks desde naturales hasta glamorosos!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(14, 5, 4, '¡Esta paleta es impresionante! La pigmentación es increíble y la variedad de tonos me permite experimentar con diferentes looks. ¡Es mi paleta de sombras favorita!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(15, 5, 5, '¡Cada sombra de esta paleta es un sueño hecho realidad! La calidad es excepcional y los tonos se mezclan tan suavemente. ¡Me siento una verdadera artista cuando la uso!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(16, 6, 1, '¡Este highlighter de OFRA es mi nuevo favorito! Da un brillo increíble y se ve tan natural. ¡Lo amo! ✨', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(17, 6, 2, '¡No puedo creer lo radiante que me hace lucir este highlighter de OFRA! Es perfecto para resaltar mis pómulos y darle vida a mi rostro.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(18, 6, 3, '¡El highlighter de OFRA es la clave para un glow perfecto! Su fórmula es suave y fácil de aplicar, ¡me hace sentir como una estrella!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(19, 7, 4, 'La base Bare With Me de NYX es perfecta para mi rutina diaria! Su cobertura ligera y aspecto natural hacen que mi piel se vea impecable sin sentirme demasiado maquillada.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(20, 7, 5, 'Esta base es increíblemente ligera y cómoda de llevar! La fórmula de la base Bare With Me de NYX es ideal para mi piel sensible, ¡la amo!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(21, 7, 1, '¡La base Bare With Me de NYX es mi salvavidas! Su textura hidratante y su acabado luminoso hacen que mi piel se vea fresca y radiante todo el día.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(22, 8, 2, '¡La base Studio Fix Fluid de MAC es mi mejor aliada para un cutis impecable! Su cobertura es perfecta y dura todo el día sin necesidad de retoques.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(23, 8, 3, '¡Esta base es todo lo que necesito para lucir radiante! La base Studio Fix Fluid de MAC deja mi piel con un acabado mate y uniforme que me encanta.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(24, 8, 4, '¡No puedo dejar de amar esta base! La base Studio Fix Fluid de MAC cubre todas mis imperfecciones sin sentirme pesada en la piel. ¡Simplemente perfecta!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(25, 9, 5, '¡El Lip Glow Oil de Dior es una verdadera joya! Mantiene mis labios hidratados y les da un brillo sutil y hermoso. ¡Lo amo!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(26, 9, 1, '¡Este lip oil es increíblemente hidratante! El Lip Glow Oil de Dior deja mis labios suaves y con un toque de color natural. ¡Es mi nuevo imprescindible!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(27, 9, 2, '¡No puedo vivir sin este lip oil! El Lip Glow Oil de Dior es tan ligero y cómodo de llevar, ¡y el brillo que proporciona es simplemente hermoso!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(28, 10, 3, '¡El gloss de Rhode es simplemente magnífico! Le da a mis labios un brillo deslumbrante y una sensación suave y cómoda. ¡Me encanta!', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(29, 10, 4, '¡Este gloss es todo lo que necesito para destacar mis labios! El gloss de Rhode tiene una textura increíblemente suave y un brillo que no pasa desapercibido.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL),
(30, 10, 5, '¡No puedo dejar de usar este gloss! El gloss de Rhode es mi favorito absoluto, su fórmula no pegajosa y sus tonos son perfectos para cualquier ocasión.', '2024-06-03 19:37:47', '2024-06-03 19:37:47', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_usuario` int(10) UNSIGNED DEFAULT NULL,
  `imagen` varchar(200) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(350) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `id_usuario`, `imagen`, `nombre`, `descripcion`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(3, 2, 'https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//m/a/maybelline-lifter-gloss-hyaluronic-acid-lip-gloss-005-petal-5-4ml_1.png', 'Lifter Gloss - Maybelline', 'Los labios se ven más llenos y voluminosos después de aplicar este gloss vibrante y de alto brillo.', '2024-06-03 19:34:31', '2024-06-09 17:20:56', '2024-06-09 17:20:56'),
(4, 2, 'https://m.toofaced.com/media/export/cms/products/1000x1000/2f_sku_94150_1000x1000_0.jpg', 'Born This Way - Too Faced', 'Una base ligera sin aceite que difumina magistralmente la línea entre el maquillaje y la piel para una cobertura impecable.', '2024-06-03 19:34:31', '2024-06-09 17:21:27', '2024-06-09 17:21:27'),
(5, 3, 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1116585/zCbATXV9Km-1116585_1.jpg', 'Paleta de sombras - Huda Beauty', 'Una paleta que te permite jugar y crear looks de maquillaje con 18 tonos rosados y terrosos en cinco texturas diferentes.', '2024-06-03 19:34:31', '2024-06-09 17:22:00', '2024-06-09 17:22:00'),
(6, 3, 'https://houseofbeauty.co.uk/public/files/productphoto/org/highlighterspacebabyfeatured_9e40846e57e0492aaeaf7858f4d30f6f_600x600.png', 'Highlighter - OFRA', 'Un iluminador en polvo que destaca instantáneamente la tez y aumenta su brillo natural.', '2024-06-03 19:34:31', '2024-06-09 17:22:43', '2024-06-09 17:22:43'),
(7, 4, 'https://i.pinimg.com/originals/ea/dc/21/eadc21b8864fe2a68ede85b2217a0d0a.png', 'Bare With Me - NYX', 'Un corrector que contiene un 90 por ciento de ingredientes de origen natural para iluminar visiblemente las ojeras y minimizar las líneas finas.', '2024-06-03 19:34:31', '2024-06-09 21:10:57', '2024-06-09 21:10:57'),
(8, 4, 'https://images-cdn.ubuy.co.in/64ecdfa34f3c64345d7d0f57-mac-studio-fix-fluid-spf-15-nw15-1-oz.jpg', 'Base - MAC Studio', 'Una base transpirable y luminosa que se construye y combina sin esfuerzo para iluminar la tez con una cobertura personalizable y de larga duración.', '2024-06-03 19:34:31', '2024-06-09 20:54:33', '2024-06-09 20:54:33'),
(9, 5, 'https://acdn.mitiendanube.com/stores/001/680/124/products/lip-oil-dior-pink1-e6654be083c0b0eeb716770753448730-1024-1024.png', 'Lip Oil - Dior', 'Un aceite labial nutritivo y brillante que protege y mejora los labios, resaltando su color natural.', '2024-06-03 19:34:31', '2024-06-09 21:10:57', '2024-06-09 21:10:57'),
(10, 5, 'https://www.rhodeskin.com/cdn/shop/files/esp-flatlay-square_1024x1024.png?v=1695254066', 'Lip Gloss - Rhode', 'Un brillo labial antiadherente y de larga duración, con una fórmula clara y ligera que ayuda a nutrir y suavizar los labios.', '2024-06-03 19:34:31', '2024-06-09 17:27:44', '2024-06-09 17:27:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `mail` varchar(50) NOT NULL,
  `contrasenia` varchar(1000) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `fotoPerfil` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `usuario` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `mail`, `contrasenia`, `fecha`, `dni`, `fotoPerfil`, `createdAt`, `updatedAt`, `deletedAt`, `usuario`) VALUES
(1, 'laliespo@gmail.com', '123456', '2024-10-20', 46442824, 'https://images.squarespace-cdn.com/content/v1/57ce0ca029687fcc42c5e007/1563854331365-7XI0H2XLI8VQ8HABU9MD/pink+heart.png', '2024-06-03 19:32:37', '2024-06-09 21:22:48', '2024-06-09 21:22:48', ''),
(2, 'tinitini@hotmail.com', '123456', '2023-10-20', 45442824, 'https://images.squarespace-cdn.com/content/v1/57ce0ca029687fcc42c5e007/1563854331365-7XI0H2XLI8VQ8HABU9MD/pink+heart.png', '2024-06-03 19:32:37', '2024-06-09 21:22:48', '2024-06-09 21:22:48', ''),
(3, 'antorocuzzo@gmail.com', '123456', '2022-10-20', 44442824, 'https://images.squarespace-cdn.com/content/v1/57ce0ca029687fcc42c5e007/1563854331365-7XI0H2XLI8VQ8HABU9MD/pink+heart.png', '2024-06-03 19:32:37', '2024-06-09 21:22:48', '2024-06-09 21:22:48', ''),
(4, 'orisabatini@gmail.com', '123456', '2021-10-20', 43442824, 'https://images.squarespace-cdn.com/content/v1/57ce0ca029687fcc42c5e007/1563854331365-7XI0H2XLI8VQ8HABU9MD/pink+heart.png', '2024-06-03 19:32:37', '2024-06-09 21:22:48', '2024-06-09 21:22:48', ''),
(5, 'natiperez@gmail.com', '123456', '2020-10-20', 42442824, 'https://images.squarespace-cdn.com/content/v1/57ce0ca029687fcc42c5e007/1563854331365-7XI0H2XLI8VQ8HABU9MD/pink+heart.png', '2024-06-03 19:32:37', '2024-06-09 21:22:48', '2024-06-09 21:22:48', ''),
(8, 'cscallan@udesa.edu.ar', '$2a$10$cy/cTUBucOVsOkuxOoepfe2rxijkb.1fOgbsI8PNCmtPq0Z2lJGGi', '2005-01-24', 24190099, 'https://static.vecteezy.com/system/resources/previews/010/892/347/non_2x/heart-transparent-free-png.png', '2024-06-08 16:11:45', '2024-06-09 20:26:19', '2024-06-09 20:26:19', 'catascallan'),
(9, 'catuscallan@gmail.com', '$2a$10$8L2zAy7tTeEFUcGSFR45G.A7MT9f8DqOd.kjA90hztrlsFMI6aznm', '2005-01-24', 45443678, 'https://www.pngall.com/wp-content/uploads/14/Cute-PNG-Cutout.png', '2024-06-09 20:01:08', '2024-06-09 21:34:05', '2024-06-09 21:34:05', 'prueba123'),
(10, 'catitascallan@gmail.com', '$2a$10$eUaYo.xtio9LLTfIWt.cx.D3uVzl5vodrXlGoAZV8CYDm1mN3P6pq', '2005-01-24', 46442827, 'https://static.vecteezy.com/system/resources/previews/010/892/347/non_2x/heart-transparent-free-png.png', '2024-06-09 20:04:21', '2024-06-09 20:25:23', '2024-06-09 20:25:23', 'prueba2_');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
