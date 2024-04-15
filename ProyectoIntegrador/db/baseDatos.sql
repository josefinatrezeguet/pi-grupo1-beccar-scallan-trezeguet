create schema proyecto_integrador;

use proyecto_integrador;

CREATE TABLE usuarios (

/*  Columna 	        Tipo de dato 	    Restricciones */

    id 			        INT 		        UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    mail 		        VARCHAR(250) 	    NOT NULL,
    contrasenia 	    VARCHAR(1000) 	    NOT NULL,
    fecha 	            DATE 		        NOT NULL,
    dni 	            INT 		        NOT NULL, UNIQUE,
    fotoPerfil 	        VARCHAR(250) 	    NOT NULL,

    createdAt 		    TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ,
    updatedAt 		    TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt		    TIMESTAMP           NULL ON UPDATE CURRENT_TIMESTAMP, 
);

CREATE TABLE productos (

/*  Columna 	        Tipo de dato 	    Restricciones */

    id 			        INT 		        UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario          INT			        UNSIGNED,
    imagen              VARCHAR(250) 	    NOT NULL,
    nombre              VARCHAR(250) 	    NOT NULL,
    descripcion         VARCHAR(350) 	    NOT NULL,

    createdAt 		    TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ,
    updatedAt 	    	TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt	    	TIMESTAMP           NULL ON UPDATE CURRENT_TIMESTAMP, 

    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
);

CREATE TABLE comentarios (

/*  Columna         Tipo de dato 	    Restricciones */

    id 			    INT 		        UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto		INT		            UNSIGNED,
    id_usuario		INT		            UNSIGNED,
    texto 		    VARCHAR(500) 	    NOT NULL,

    createdAt 		TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ,
    updatedAt 		TIMESTAMP 	        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt		TIMESTAMP           NULL ON UPDATE CURRENT_TIMESTAMP, 

    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id),

);

-- USUARIOS al menos 5 --
INSERT INTO usuarios (id,       mail,                    contrasenia,  fecha,         dni,         fotoPerfil,      createdAt,      updatedAt,     deletedAt )
VALUES               (default,  'laliespo@gmail.com',    '123456',     '2024/10/20',  '46442824',  'images/users/1.png',default, default, null );
                     (default,  'tinitini@hotmail.com',  '123456',     '2023/10/20',  '45442824',  'images/users/2.png',default, default, null );
                     (default,  'antorocuzzo@gmail.com', '123456',     '2022/10/20',  '44442824',  'images/users/3.png', default, default, null);
                     (default,  'orisabatini@gmail.com', '123456',     '2021/10/20',  '43442824',  'images/users/4.png', default, default, null);
                     (default,  'natiperez@gmail.com',   '123456',     '2020/10/20',  '42442824',  'images/users/5.png', default, default, null);


-- PRODUCTOS al menos 10 --
INSERT INTO productos (id,      id_usuario, imagen,                         nombre,                             descripcion,                                createdAt,        updatedAt,   deletedAt)
VALUES                (default, 1,          'images/products/rare.png',     'Blush Líquido - Rare Beauty',     'Un rubor ligero y duradero que se mezcla y se construye maravillosamente para un acabado suave y saludable.', default, default, null);
                      (default, 1,          'images/products/sky.png',      'Sky High - Maybelline',           'Máscara de pestañas acondicionadora con una fórmula que espesa, alarga y bloquea los rizos para obtener pestañas dramáticas con un volumen extremo.',default, default, null );
                      (default, 2,          'images/products/lifter.png',   'Lifter Gloss - Maybelline',       'Los labios se ven más llenos y voluminosos después de aplicar este gloss vibrante y de alto brillo.', default, default, null );
                      (default, 2,          'images/products/toofaced.png', 'Born This Way - Too Faced',       'Una base ligera sin aceite que difumina magistralmente la línea entre el maquillaje y la piel para una cobertura impecable.', default, default, null );
                      (default, 3,          'images/products/huda.png',     'Paleta de sombras - Huda Beauty', 'Una paleta que te permite jugar y crear looks de maquillaje con 18 tonos rosados y terrosos en cinco texturas diferentes.',default, default, null );
                      (default, 3,          'images/products/ofra.png',     'Highlighter - OFRA',              'Un iluminador en polvo que destaca instantáneamente la tez y aumenta su brillo natural.', default, default, null );
                      (default, 4,          'images/products/nyx.png',      'Bare With Me - NYX',              'Un corrector que contiene un 90 por ciento de ingredientes de origen natural para iluminar visiblemente las ojeras y minimizar las líneas finas.',default, default, null );
                      (default, 4,          'images/products/mac.png',      'Base - MAC Studio',               'Una base transpirable y luminosa que se construye y combina sin esfuerzo para iluminar la tez con una cobertura personalizable y de larga duración.',default, default, null );
                      (default, 5,          'images/products/dior.png',     'Lip Oil - Dior',                  'Un aceite labial nutritivo y brillante que protege y mejora los labios, resaltando su color natural.', default, default, null);
                      (default, 5,          'images/products/rhode.png',    'Lip Gloss - Rhode',               'Un brillo labial antiadherente y de larga duración, con una fórmula clara y ligera que ayuda a nutrir y suavizar los labios.', default, default, null);


-- COMENTARIOS al menos 30 --
INSERT INTO comentarios (id,      id_producto, id_usuario, texto, createdAt,    updatedAt,     deletedAt)
VALUES                  (default, 1,           1,          'Este blush líquido es ideal para un look natural y fresco! Me encanta cómo se mezcla sin esfuerzo en mi piel. 💕',default, default, null );
                        (default, 1,           2,          '¡Increíble! Este blush líquido de Rare Beauty es tan fácil de aplicar y el acabado es impecable. Definitivamente se ha convertido en mi nuevo favorito. 😊', default, default, null);
                        (default, 1,           3,          '¡El blush líquido de Rare Beauty es una verdadera joya! La pigmentación es excelente y el color se ve tan natural. ¡Me encanta! ✨',default, default, null );
                        
                        (default, 2,           4,          '¡Esta máscara de pestañas es increíble! Mis pestañas se ven más largas y con volumen, ¡como si estuviera usando pestañas postizas! 💖',default, default, null );
                        (default, 2,           5,          '¡Me encanta cómo esta máscara de pestañas Maybelline Sky High hace que mis ojos se vean más grandes y despiertos! ¡Es mi nueva favorita! 😍',default, default, null );
                        (default, 2,           1,          '¡La máscara de pestañas Sky High de Maybelline es la mejor que he probado! No se aglutina y se mantiene durante todo el día. ¡Mis pestañas parecen interminables! ✨',default, default, null );
                        
                        (default, 3,           2,          '¡Me encanta el brillo y la sensación de hidratación que proporciona el Lifter Gloss de Maybelline! Es perfecto para un aspecto fresco y natural. 💋', default, default, null );
                        (default, 3,           3,          '¡El Lifter Gloss de Maybelline es mi nuevo imprescindible! No es pegajoso y deja mis labios suaves y brillantes. ¡Lo recomiendo totalmente! 💄', default, default, null );
                        (default, 3,           4,          '¡Este gloss es fantástico! Agrega un toque de color sutil y brillo a mis labios. ¡No puedo salir de casa sin él! ✨',default, default, null);
                        
                        (default, 4,           5,          'La base Born This Way de Too Faced es mi favorita absoluta! Se funde perfectamente con mi piel, dejándola impecable y radiante. ✨',default, default, null );
                        (default, 4,           1,          '¡Esta base es asombrosa! Su cobertura es increíble y se siente tan ligera. ¡No puedo dejar de recomendarla a todos mis amigos! 💁‍♂️', default, default, null );
                        (default, 4,           2,          '¡Me encanta cómo mi piel se ve con la base Born This Way de Too Faced! Es tan natural y duradera, ¡simplemente perfecta para mí! 💕', default, default, null );
                       
                        (default, 5,           3,          '¡La paleta Nude de Huda Beauty es una obra maestra! Los tonos son tan versátiles y pigmentados. ¡Amo cómo puedo crear looks desde naturales hasta glamorosos! 💖', default, default, null );
                        (default, 5,           4,          '¡Esta paleta es impresionante! La pigmentación es increíble y la variedad de tonos me permite experimentar con diferentes looks. ¡Es mi paleta de sombras favorita! 😍', default, default, null );
                        (default, 5,           5,          '¡Cada sombra de esta paleta es un sueño hecho realidad! La calidad es excepcional y los tonos se mezclan tan suavemente. ¡Me siento una verdadera artista cuando la uso! ✨',default, default, null );
                        
                        (default, 6,           1,          '¡Este highlighter de OFRA es mi nuevo favorito! Da un brillo increíble y se ve tan natural. ¡Lo amo! ✨',default, default, null);
                        (default, 6,           2,          '¡No puedo creer lo radiante que me hace lucir este highlighter de OFRA! Es perfecto para resaltar mis pómulos y darle vida a mi rostro. 💖',default, default, null );
                        (default, 6,           3,          '¡El highlighter de OFRA es la clave para un glow perfecto! Su fórmula es suave y fácil de aplicar, ¡me hace sentir como una estrella! 🌟',default, default, null );
                        
                        (default, 7,           4,          'La base Bare With Me de NYX es perfecta para mi rutina diaria! Su cobertura ligera y aspecto natural hacen que mi piel se vea impecable sin sentirme demasiado maquillada. 💖',default, default, null );
                        (default, 7,           5,          'Esta base es increíblemente ligera y cómoda de llevar! La fórmula de la base Bare With Me de NYX es ideal para mi piel sensible, ¡la amo! 😊',default, default, null );
                        (default, 7,           1,          '¡La base Bare With Me de NYX es mi salvavidas! Su textura hidratante y su acabado luminoso hacen que mi piel se vea fresca y radiante todo el día. ✨',default, default, null );
                        
                        (default, 8,           2,          '¡La base Studio Fix Fluid de MAC es mi mejor aliada para un cutis impecable! Su cobertura es perfecta y dura todo el día sin necesidad de retoques. 💖',default, default, null );
                        (default, 8,           3,          '¡Esta base es todo lo que necesito para lucir radiante! La base Studio Fix Fluid de MAC deja mi piel con un acabado mate y uniforme que me encanta. 😊',default, default, null );
                        (default, 8,           4,          '¡No puedo dejar de amar esta base! La base Studio Fix Fluid de MAC cubre todas mis imperfecciones sin sentirme pesada en la piel. ¡Simplemente perfecta! ✨', default, default, null);
                        
                        (default, 9,           5,          '¡El Lip Glow Oil de Dior es una verdadera joya! Mantiene mis labios hidratados y les da un brillo sutil y hermoso. ¡Lo amo! 💋', default, default, null );
                        (default, 9,           1,          '¡Este lip oil es increíblemente hidratante! El Lip Glow Oil de Dior deja mis labios suaves y con un toque de color natural. ¡Es mi nuevo imprescindible! 😍',default, default, null );
                        (default, 9,           2,          '¡No puedo vivir sin este lip oil! El Lip Glow Oil de Dior es tan ligero y cómodo de llevar, ¡y el brillo que proporciona es simplemente hermoso! ✨',default, default, null );
                        
                        (default, 10,          3,          '¡El gloss de Rhode es simplemente magnífico! Le da a mis labios un brillo deslumbrante y una sensación suave y cómoda. ¡Me encanta! 💋',default, default, null);
                        (default, 10,          4,          '¡Este gloss es todo lo que necesito para destacar mis labios! El gloss de Rhode tiene una textura increíblemente suave y un brillo que no pasa desapercibido. 😍',default, default, null );
                        (default, 10,          5,          '¡No puedo dejar de usar este gloss! El gloss de Rhode es mi favorito absoluto, su fórmula no pegajosa y sus tonos son perfectos para cualquier ocasión. ✨',default, default, null );
    