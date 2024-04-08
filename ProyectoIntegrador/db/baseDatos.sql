create schema proyecto_integrador;
use proyecto_integrador;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(50) not null,
contrasenia varchar(1000) not null,
fecha date not null,
dni int not null UNIQUE,
fotoPerfil varchar(200),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

create table productos(
id int unsigned primary key auto_increment,
id_usuario int unsigned,
imagen varchar(200) not null,
nombre varchar(100) not null,
descripcion varchar(350) not null,
foreign key (id_usuario) REFERENCES usuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleteAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(

id int unsigned primary key auto_increment,
id_producto INT UNSIGNED,
id_usuario INT UNSIGNED,
texto varchar(500) not null,

foreign key (id_usuario) REFERENCES usuarios(id),
foreign key (id_producto) REFERENCES productos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);


-- al menos 5 --
INSERT INTO usuarios(id, email, contrasenia, fecha, dni, fotoPerfil, createdAt, updatedAt, deletedAt)
VALUES (default, 'matias.bunge@gmail.com', 'mbunge11', '1995-12-04' ,'43879652', 'imagenes', ''),
(default,'marcosrocca@hotmail.com', 'Rocamarcos12', '2005-04-08', 'imagenes',''),
(default,'macarenaperez@gmail.com', 'Maca1234', 'macarena', '2001-11-13',43522951,'imagenes', '', '43522951'),
(default,'lolaindi@gmail.com', 'lolopepe', '2001-06-11','43684100 ','/', '',''),
(default,'Lorenagone@gmail.com', 'l', 'isabella','imagen', '1945-10-04','11605018', '');

-- al menos 10 --
INSERT INTO productos(id, id_usuario, imagen, nombre, descripcion, createdAt, updatedAt, deletedAt)
VALUES (default, 1, 'imagen', 'producto', 'descripcion', ''),
(default, 2, 'imagen', 'producto', 'descripcion', ''),
(default, 3, 'imagen', 'producto', 'descripcion', ''),
(default, 4, 'imagen', 'producto', 'descripcion', ''),
(default, 5, 'imagen', 'producto', 'descripcion', ''),
(default, 1, 'imagen', 'producto', 'descripcion', ''),
(default, 2, 'imagen', 'producto', 'descripcion', ''),
(default, 3, 'imagen', 'producto', 'descripcion', ''),
(default, 4, 'imagen', 'producto', 'descripcion', ''),
(default, 5, 'imagen', 'producto', 'descripcion', '')

-- al menos 30 --
INSERT INTO comentarios(id, id_producto, id_usuario, texto, createdAt, updatedAt, deletedAt)
VALUES 