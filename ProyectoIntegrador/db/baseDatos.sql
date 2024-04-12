create schema proyecto_integrador;
use proyecto_integrador;

create table usuarios(
id int unsigned primary key auto_increment,
mail varchar(250) not null,
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
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleteAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
foreign key (id_usuario) REFERENCES usuarios(id),
);

create table comentarios(

id int unsigned primary key auto_increment,
id_producto INT UNSIGNED,
id_usuario INT UNSIGNED,
texto varchar(500) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
foreign key (id_usuario) REFERENCES usuarios(id),
foreign key (id_producto) REFERENCES productos(id),
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
VALUES (default, 1, 'images/products/rare.png', 'Blush Líquido - Rare Beauty', 'Un rubor ligero y duradero que se mezcla y se construye maravillosamente para un acabado suave y saludable', ''),
        (default, 2, 'images/products/sky.png', 'Sky High - Maybelline', 'Máscara de pestañas acondicionadora con una fórmula que espesa, alarga y bloquea los rizos para obtener pestañas dramáticas con un volumen extremo', ''),
        (default, 3, 'images/products/lifter.png', 'Lifter Gloss - Maybelline', 'Los labios se ven más llenos y voluminosos después de aplicar este gloss vibrante y de alto brillo.', ''),
        (default, 4, 'images/products/toofaced.png', 'Born This Way - Too Faced', 'Una base ligera sin aceite que difumina magistralmente la línea entre el maquillaje y la piel para una cobertura impecable.', ''),
        (default, 5, 'images/products/huda.png', 'Paleta de sombras - Huda Beauty', 'Una paleta que te permite jugar y crear looks de maquillaje con 18 tonos rosados y terrosos en cinco texturas diferentes.', ''),
        (default, 6, 'images/products/ofra.png', 'Highlighter - OFRA', 'Un iluminador en polvo que destaca instantáneamente la tez y aumenta su brillo natural'),
        (default, 7, 'images/products/nyx.png', 'Bare With Me - NYX', 'Un corrector que contiene un 90 por ciento de ingredientes de origen natural para iluminar visiblemente las ojeras y minimizar las líneas finas.'),
        (default, 8, 'images/products/mac.png', 'Base - MAC Studio', 'Una base transpirable y luminosa que se construye y combina sin esfuerzo para iluminar la tez con una cobertura personalizable y de larga duración'),
        (default, 9, 'images/products/dior.png', 'Lip Oil - Dior', 'Un aceite labial nutritivo y brillante que protege y mejora los labios, resaltando su color natural'),
        (default, 10, 'images/products/rhode.png', 'Lip Gloss - Rhode', 'Un brillo labial antiadherente y de larga duración, con una fórmula clara y ligera que ayuda a nutrir y suavizar los labios.')

-- al menos 30 --
INSERT INTO comentarios(id, id_producto, id_usuario, texto, createdAt, updatedAt, deletedAt)
VALUES (default,1,'laliesposito','Este blush líquido es ideal para un look natural y fresco! Me encanta cómo se mezcla sin esfuerzo en mi piel. 💕' )
        (default,1,'tinitini','¡Increíble! Este blush líquido de Rare Beauty es tan fácil de aplicar y el acabado es impecable. Definitivamente se ha convertido en mi nuevo favorito. 😊' )
        (default,1,'antorocuzzo','¡El blush líquido de Rare Beauty es una verdadera joya! La pigmentación es excelente y el color se ve tan natural. ¡Me encanta! ✨')
        (default,1,'emiatiasok','¡No puedo dejar de usar este blush líquido! Es perfecto para un look diario o para algo más glamoroso. ¡Lo recomiendo altamente! 👍')
        (default,1,'lachinasuarez','¡Wow! Este blush líquido de Rare Beauty realmente ilumina mi rostro. Es tan ligero y se siente como si ni siquiera estuviera usando maquillaje. ✨')
        (default,2,'orisabatini','¡Esta máscara de pestañas es increíble! Mis pestañas se ven más largas y con volumen, ¡como si estuviera usando pestañas postizas! 💖')
        (default,2,'natiperez','¡Me encanta cómo esta máscara de pestañas Maybelline Sky High hace que mis ojos se vean más grandes y despiertos! ¡Es mi nueva favorita! 😍')
        (default,2,'lajoaqui','¡La máscara de pestañas Sky High de Maybelline es la mejor que he probado! No se aglutina y se mantiene durante todo el día. ¡Mis pestañas parecen interminables! ✨')
        (default,2,'leomessi','¡Esta máscara de pestañas es un juego cambiador! Mis pestañas se mantienen levantadas todo el día y se ven más llenas. ¡Totalmente recomendada! 👀')
        (default,2,'paulodybala','¡No puedo creer lo bien que funciona esta máscara de pestañas! Mis pestañas se ven súper largas y definidas. ¡Estoy enamorada! 💕')
        (default,3,'juanatinelli','¡Me encanta el brillo y la sensación de hidratación que proporciona el Lifter Gloss de Maybelline! Es perfecto para un aspecto fresco y natural. 💋')
        (default,3,'pampitaok','¡El Lifter Gloss de Maybelline es mi nuevo imprescindible! No es pegajoso y deja mis labios suaves y brillantes. ¡Lo recomiendo totalmente! 💄')
        (default,3,'mariabecerra','¡Este gloss es fantástico! Agrega un toque de color sutil y brillo a mis labios. ¡No puedo salir de casa sin él! ✨')
        (default,3,'francomassini','¡El Lifter Gloss de Maybelline es genial! Me encanta la variedad de tonos disponibles y lo bien que se siente en mis labios. ¡Definitivamente un must-have! 💖')
        (default,3,'jimebaron','¡Me siento glamorosa cada vez que uso el Lifter Gloss de Maybelline! Es cómodo de llevar y hace que mis labios se vean más llenos y bonitos. 😍')
        (default,4,'angelatorres','La base Born This Way de Too Faced es mi favorita absoluta! Se funde perfectamente con mi piel, dejándola impecable y radiante. ✨')
        (default,4,'yanilatorre','¡Esta base es asombrosa! Su cobertura es increíble y se siente tan ligera. ¡No puedo dejar de recomendarla a todos mis amigos! 💁‍♂️')
        (default,4,'mirthalegrand','¡Me encanta cómo mi piel se ve con la base Born This Way de Too Faced! Es tan natural y duradera, ¡simplemente perfecta para mí! 💕')
        (default,4,'sugimenez','¡No puedo creer lo bien que cubre esta base! Es como si hubiera nacido así. Definitivamente la mejor que he probado hasta ahora. 💖')
        (default,4,'moriacasan','¡Mi secreto para una piel impecable es la base Born This Way de Too Faced! Su fórmula hidratante deja mi piel suave y radiante todo el día. 😊')
        (default,5,'lauritafernandez','¡La paleta Nude de Huda Beauty es una obra maestra! Los tonos son tan versátiles y pigmentados. ¡Amo cómo puedo crear looks desde naturales hasta glamorosos! 💖')
        (default,5,'cachetesierra','¡Esta paleta es impresionante! La pigmentación es increíble y la variedad de tonos me permite experimentar con diferentes looks. ¡Es mi paleta de sombras favorita! 😍')
        (default,5,'anitta','¡Cada sombra de esta paleta es un sueño hecho realidad! La calidad es excepcional y los tonos se mezclan tan suavemente. ¡Me siento una verdadera artista cuando la uso! ✨')
        (default,5,'pesopluma','¡La paleta Nude de Huda Beauty es un must-have en mi colección de maquillaje! Los tonos neutros son perfectos para cualquier ocasión, ¡y la pigmentación es alucinante! 💄')
        (default,5,'nickinicole','¡No puedo dejar de amar esta paleta! Los tonos son tan elegantes y se pueden usar para crear looks tanto de día como de noche. ¡Esencial en mi rutina diaria de maquillaje! 😊')
        (default,6,'trueno','¡Este highlighter de OFRA es mi nuevo favorito! Da un brillo increíble y se ve tan natural. ¡Lo amo! ✨')
        (default,6,'enzofernandez','¡No puedo creer lo radiante que me hace lucir este highlighter de OFRA! Es perfecto para resaltar mis pómulos y darle vida a mi rostro. 💖')
        (default,6,'noeliapompa','¡El highlighter de OFRA es la clave para un glow perfecto! Su fórmula es suave y fácil de aplicar, ¡me hace sentir como una estrella! 🌟')
        (default,6,'florjazminp','¡Este highlighter de OFRA es impresionante! La intensidad del brillo es justo lo que estaba buscando. ¡No puedo dejar de usarlo! 😍')
        (default,6,'momigiardina','El highlighter de OFRA es un verdadero tesoro en mi colección de maquillaje! Me encanta cómo ilumina mi piel y le da un aspecto saludable. 💫')
        (default,7,'laocchiato','La base Bare With Me de NYX es perfecta para mi rutina diaria! Su cobertura ligera y aspecto natural hacen que mi piel se vea impecable sin sentirme demasiado maquillada. 💖')
        (default,7,'martibenza','Esta base es increíblemente ligera y cómoda de llevar! La fórmula de la base Bare With Me de NYX es ideal para mi piel sensible, ¡la amo! 😊')
        (default,7,'luligonzales','¡La base Bare With Me de NYX es mi salvavidas! Su textura hidratante y su acabado luminoso hacen que mi piel se vea fresca y radiante todo el día. ✨')
        (default,7,'valenchait','¡Esta base se siente como una segunda piel! La base Bare With Me de NYX es tan liviana y transpirable, ¡perfecta para los días de calor!')
        (default,7,'tiagopzk','¡Me encanta la cobertura natural que proporciona esta base! La base Bare With Me de NYX es mi opción diaria para un aspecto fresco y sin esfuerzo. 💁‍♀️')
        (default,8,'enzoperez','¡La base Studio Fix Fluid de MAC es mi mejor aliada para un cutis impecable! Su cobertura es perfecta y dura todo el día sin necesidad de retoques. 💖')
        (default,8,'fideodimaria','¡Esta base es todo lo que necesito para lucir radiante! La base Studio Fix Fluid de MAC deja mi piel con un acabado mate y uniforme que me encanta. 😊')
        (default,8,'stephiedemner','¡No puedo dejar de amar esta base! La base Studio Fix Fluid de MAC cubre todas mis imperfecciones sin sentirme pesada en la piel. ¡Simplemente perfecta! ✨')
        (default,8,'carocalvagni','¡La base Studio Fix Fluid de MAC es un imprescindible en mi rutina de maquillaje! Su fórmula de larga duración me da la confianza de lucir un cutis impecable todo el día. 👍')
        (default,8,'leoponzio','¡Esta base es una maravilla! La base Studio Fix Fluid de MAC se mezcla a la perfección con mi piel, dejándola con un aspecto suave y natural. ¡La recomiendo totalmente! 💄')
        (default,9,'muniecogallardo','¡El Lip Glow Oil de Dior es una verdadera joya! Mantiene mis labios hidratados y les da un brillo sutil y hermoso. ¡Lo amo! 💋')
        (default,9,'gilda','¡Este lip oil es increíblemente hidratante! El Lip Glow Oil de Dior deja mis labios suaves y con un toque de color natural. ¡Es mi nuevo imprescindible! 😍')
        (default,9,'edsheeran','¡No puedo vivir sin este lip oil! El Lip Glow Oil de Dior es tan ligero y cómodo de llevar, ¡y el brillo que proporciona es simplemente hermoso! ✨')
        (default,9,'taylorswift','¡El Lip Glow Oil de Dior es la definición de lujo para los labios! Su fórmula no pegajosa y su aroma delicado lo hacen perfecto para llevar en cualquier ocasión. 💄')
        (default,9,'valenzenere','¡Me encanta cómo este lip oil transforma mis labios! El Lip Glow Oil de Dior los deja suaves, hidratados y con un brillo irresistible. ¡Totalmente recomendado! 😊')
        (default,10,'chinodarin','¡El gloss de Rhode es simplemente magnífico! Le da a mis labios un brillo deslumbrante y una sensación suave y cómoda. ¡Me encanta! 💋')
        (default,10,'julipoggio','¡Este gloss es todo lo que necesito para destacar mis labios! El gloss de Rhode tiene una textura increíblemente suave y un brillo que no pasa desapercibido. 😍')
        (default,10,'natioreiro','¡No puedo dejar de usar este gloss! El gloss de Rhode es mi favorito absoluto, su fórmula no pegajosa y sus tonos son perfectos para cualquier ocasión. ✨')
        (default,10,'gimeaccardi','¡El gloss de Rhode es una verdadera maravilla! Su aplicador es tan preciso y su textura es tan ligera que olvidarás que lo estás usando. 💄')
        (default,10,'candevetrano','¡Este gloss es mi nuevo imprescindible! El gloss de Rhode deja mis labios con un brillo increíble y una sensación hidratante que dura horas. ¡Simplemente perfecto! 😊')