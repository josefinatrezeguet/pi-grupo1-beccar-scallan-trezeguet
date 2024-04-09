const db = {
    usuario: {
        email:"emiliamernes@gmail.com",
        usuario: "emimernes",  
        contrasenia: "Duki123",
        nacimiento: "29/10/1996",
        dni: "46442824",
        fotoPerfil: ""
    },

    productos: [
        {
            imagen: "images/products/rare.png",
            nombre: "Blush Líquido - Rare Beauty",
            descripcion: "Un rubor ligero y duradero que se mezcla y se construye maravillosamente para un acabado suave y saludable.",
            comentarios: [
                {
                    usuario: "laliesposito",
                    coment: "¡Este blush líquido es ideal para un look natural y fresco! Me encanta cómo se mezcla sin esfuerzo en mi piel. 💕",
                    foto: "",
                    },
                    {
                    usuario: "tinitini",
                    coment: "¡Increíble! Este blush líquido de Rare Beauty es tan fácil de aplicar y el acabado es impecable. Definitivamente se ha convertido en mi nuevo favorito. 😊",
                    foto: "",
                    },
                    {
                    usuario: "antorocuzzo",
                    coment: "¡El blush líquido de Rare Beauty es una verdadera joya! La pigmentación es excelente y el color se ve tan natural. ¡Me encanta! ✨",
                    foto: "",
                    },
                    {
                    usuario: "emiatiasok",
                    coment: "¡No puedo dejar de usar este blush líquido! Es perfecto para un look diario o para algo más glamoroso. ¡Lo recomiendo altamente! 👍",
                    foto: "",
                    },
                    {
                    usuario: "lachinasuarez",
                    coment: "¡Wow! Este blush líquido de Rare Beauty realmente ilumina mi rostro. Es tan ligero y se siente como si ni siquiera estuviera usando maquillaje. ✨",
                    foto: "",
                    },
            ]
        },
 
        {
            imagen: "images/products/sky.png",
            nombre: "Sky High - Maybelline",
            descripcion: "Máscara de pestañas acondicionadora con una fórmula que espesa, alarga y bloquea los rizos para obtener pestañas dramáticas con un volumen extremo.",
            comentarios: [
                {
                    usuario: "orisabatini",
                    coment: "¡Esta máscara de pestañas es increíble! Mis pestañas se ven más largas y con volumen, ¡como si estuviera usando pestañas postizas! 💖",
                    foto: "",
                    },
                    {
                    usuario: "natiperez",
                    coment: "¡Me encanta cómo esta máscara de pestañas Maybelline Sky High hace que mis ojos se vean más grandes y despiertos! ¡Es mi nueva favorita! 😍",
                    foto: "",
                    },
                    {
                    usuario: "lajoaqui",
                    coment: "¡La máscara de pestañas Sky High de Maybelline es la mejor que he probado! No se aglutina y se mantiene durante todo el día. ¡Mis pestañas parecen interminables! ✨",
                    foto: "",
                    },
                    {
                    usuario: "leomessi",
                    coment: "¡Esta máscara de pestañas es un juego cambiador! Mis pestañas se mantienen levantadas todo el día y se ven más llenas. ¡Totalmente recomendada! 👀",
                    foto: "",
                    },
                    {
                    usuario: "paulodybala",
                    coment: "¡No puedo creer lo bien que funciona esta máscara de pestañas! Mis pestañas se ven súper largas y definidas. ¡Estoy enamorada! 💕",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/lifter.png",
            nombre: "Lifter Gloss - Maybelline",
            descripcion: "Los labios se ven más llenos y voluminosos después de aplicar este gloss vibrante y de alto brillo.",
            comentarios: [
                {
                    usuario: "juanatinelli",
                    coment: "¡Me encanta el brillo y la sensación de hidratación que proporciona el Lifter Gloss de Maybelline! Es perfecto para un aspecto fresco y natural. 💋",
                    foto: "",
                    },
                    {
                    usuario: "pampitaok",
                    coment: "¡El Lifter Gloss de Maybelline es mi nuevo imprescindible! No es pegajoso y deja mis labios suaves y brillantes. ¡Lo recomiendo totalmente! 💄",
                    foto: "",
                    },
                    {
                    usuario: "mariabecerra",
                    coment: "¡Este gloss es fantástico! Agrega un toque de color sutil y brillo a mis labios. ¡No puedo salir de casa sin él! ✨",
                    foto: "",
                    },
                    {
                    usuario: "francomassini",
                    coment: "¡El Lifter Gloss de Maybelline es genial! Me encanta la variedad de tonos disponibles y lo bien que se siente en mis labios. ¡Definitivamente un must-have! 💖",
                    foto: "",
                    },
                    {
                    usuario: "jimebaron",
                    coment: "¡Me siento glamorosa cada vez que uso el Lifter Gloss de Maybelline! Es cómodo de llevar y hace que mis labios se vean más llenos y bonitos. 😍",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/toofaced.png",
            nombre: "Born This Way - Too Faced",
            descripcion: "Una base ligera sin aceite que difumina magistralmente la línea entre el maquillaje y la piel para una cobertura impecable.",
            comentarios: [
                {
                    usuario: "angelatorres",
                    coment: "¡La base Born This Way de Too Faced es mi favorita absoluta! Se funde perfectamente con mi piel, dejándola impecable y radiante. ✨",
                    foto: "",
                    },
                    {
                    usuario: "yanilatorre",
                    coment: "¡Esta base es asombrosa! Su cobertura es increíble y se siente tan ligera. ¡No puedo dejar de recomendarla a todos mis amigos! 💁‍♂️",
                    foto: "",
                    },
                    {
                    usuario: "mirthalegrand",
                    coment: "¡Me encanta cómo mi piel se ve con la base Born This Way de Too Faced! Es tan natural y duradera, ¡simplemente perfecta para mí! 💕",
                    foto: "",
                    },
                    {
                    usuario: "sugimenez",
                    coment: "¡No puedo creer lo bien que cubre esta base! Es como si hubiera nacido así. Definitivamente la mejor que he probado hasta ahora. 💖",
                    foto: "",
                    },
                    {
                    usuario: "moriacasan",
                    coment: "¡Mi secreto para una piel impecable es la base Born This Way de Too Faced! Su fórmula hidratante deja mi piel suave y radiante todo el día. 😊",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/huda.png",
            nombre: "Paleta de sombras - Huda Beauty",
            descripcion: "Una paleta que te permite jugar y crear looks de maquillaje con 18 tonos rosados y terrosos en cinco texturas diferentes.",
            comentarios: [
                {
                    usuario: "lauritafernandez",
                    coment: "¡La paleta Nude de Huda Beauty es una obra maestra! Los tonos son tan versátiles y pigmentados. ¡Amo cómo puedo crear looks desde naturales hasta glamorosos! 💖",
                    foto: "",
                    },
                    {
                    usuario: "cachetesierra",
                    coment: "¡Esta paleta es impresionante! La pigmentación es increíble y la variedad de tonos me permite experimentar con diferentes looks. ¡Es mi paleta de sombras favorita! 😍",
                    foto: "",
                    },
                    {
                    usuario: "anitta",
                    coment: "¡Cada sombra de esta paleta es un sueño hecho realidad! La calidad es excepcional y los tonos se mezclan tan suavemente. ¡Me siento una verdadera artista cuando la uso! ✨",
                    foto: "",
                    },
                    {
                    usuario: "pesopluma",
                    coment: "¡La paleta Nude de Huda Beauty es un must-have en mi colección de maquillaje! Los tonos neutros son perfectos para cualquier ocasión, ¡y la pigmentación es alucinante! 💄",
                    foto: "",
                    },
                    {
                    usuario: "nickinicole",
                    coment: "¡No puedo dejar de amar esta paleta! Los tonos son tan elegantes y se pueden usar para crear looks tanto de día como de noche. ¡Esencial en mi rutina diaria de maquillaje! 😊",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/ofra.png",
            nombre: "Highlighter - OFRA",
            descripcion: "Un iluminador en polvo que destaca instantáneamente la tez y aumenta su brillo natural.",
            comentarios: [
                {
                    usuario: "trueno",
                    coment: "¡Este highlighter de OFRA es mi nuevo favorito! Da un brillo increíble y se ve tan natural. ¡Lo amo! ✨",
                    foto: "",
                    },
                    {
                    usuario: "enzofernandez",
                    coment: "¡No puedo creer lo radiante que me hace lucir este highlighter de OFRA! Es perfecto para resaltar mis pómulos y darle vida a mi rostro. 💖",
                    foto: "",
                    },
                    {
                    usuario: "noeliapompa",
                    coment: "¡El highlighter de OFRA es la clave para un glow perfecto! Su fórmula es suave y fácil de aplicar, ¡me hace sentir como una estrella! 🌟",
                    foto: "",
                    },
                    {
                    usuario: "florjazminp",
                    coment: "¡Este highlighter de OFRA es impresionante! La intensidad del brillo es justo lo que estaba buscando. ¡No puedo dejar de usarlo! 😍",
                    foto: "",
                    },
                    {
                    usuario: "momigiardina",
                    coment: "¡El highlighter de OFRA es un verdadero tesoro en mi colección de maquillaje! Me encanta cómo ilumina mi piel y le da un aspecto saludable. 💫",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/nyx.png",
            nombre: "Bare With Me - NYX",
            descripcion: "Un corrector que contiene un 90 por ciento de ingredientes de origen natural para iluminar visiblemente las ojeras y minimizar las líneas finas.",
            comentarios: [
                {
                    usuario: "laocchiato",
                    coment: "¡La base Bare With Me de NYX es perfecta para mi rutina diaria! Su cobertura ligera y aspecto natural hacen que mi piel se vea impecable sin sentirme demasiado maquillada. 💖",
                    foto: "",
                    },
                    {
                    usuario: "martibenza",
                    coment: "¡Esta base es increíblemente ligera y cómoda de llevar! La fórmula de la base Bare With Me de NYX es ideal para mi piel sensible, ¡la amo! 😊",
                    foto: "",
                    },
                    {
                    usuario: "luligonzales",
                    coment: "¡La base Bare With Me de NYX es mi salvavidas! Su textura hidratante y su acabado luminoso hacen que mi piel se vea fresca y radiante todo el día. ✨",
                    foto: "",
                    },
                    {
                    usuario: "valenchait",
                    coment: "¡Esta base se siente como una segunda piel! La base Bare With Me de NYX es tan liviana y transpirable, ¡perfecta para los días de calor! ☀️",
                    foto: "",
                    },
                    {
                    usuario: "tiagopzk",
                    coment: "¡Me encanta la cobertura natural que proporciona esta base! La base Bare With Me de NYX es mi opción diaria para un aspecto fresco y sin esfuerzo. 💁‍♀️",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/mac.png",
            nombre: "Base - MAC Studio",
            descripcion: "Una base transpirable y luminosa que se construye y combina sin esfuerzo para iluminar la tez con una cobertura personalizable y de larga duración.",
            comentarios: [
                {
                    usuario: "enzoperez",
                    coment: "¡La base Studio Fix Fluid de MAC es mi mejor aliada para un cutis impecable! Su cobertura es perfecta y dura todo el día sin necesidad de retoques. 💖",
                    foto: "",
                    },
                    {
                    usuario: "fideodimaria",
                    coment: "¡Esta base es todo lo que necesito para lucir radiante! La base Studio Fix Fluid de MAC deja mi piel con un acabado mate y uniforme que me encanta. 😊",
                    foto: "",
                    },
                    {
                    usuario: "stephiedemner",
                    coment: "¡No puedo dejar de amar esta base! La base Studio Fix Fluid de MAC cubre todas mis imperfecciones sin sentirme pesada en la piel. ¡Simplemente perfecta! ✨",
                    foto: "",
                    },
                    {
                    usuario: "carocalvagni",
                    coment: "¡La base Studio Fix Fluid de MAC es un imprescindible en mi rutina de maquillaje! Su fórmula de larga duración me da la confianza de lucir un cutis impecable todo el día. 👍",
                    foto: "",
                    },
                    {
                    usuario: "leoponzio",
                    coment: "¡Esta base es una maravilla! La base Studio Fix Fluid de MAC se mezcla a la perfección con mi piel, dejándola con un aspecto suave y natural. ¡La recomiendo totalmente! 💄",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/dior.png",
            nombre: "Lip Oil - Dior",
            descripcion: "Un aceite labial nutritivo y brillante que protege y mejora los labios, resaltando su color natural.",
            comentarios: [
                {
                    usuario: "muniecogallardo",
                    coment: "¡El Lip Glow Oil de Dior es una verdadera joya! Mantiene mis labios hidratados y les da un brillo sutil y hermoso. ¡Lo amo! 💋",
                    foto: "",
                    },
                    {
                    usuario: "gilda",
                    coment: "¡Este lip oil es increíblemente hidratante! El Lip Glow Oil de Dior deja mis labios suaves y con un toque de color natural. ¡Es mi nuevo imprescindible! 😍",
                    foto: "",
                    },
                    {
                    usuario: "edsheeran",
                    coment: "¡No puedo vivir sin este lip oil! El Lip Glow Oil de Dior es tan ligero y cómodo de llevar, ¡y el brillo que proporciona es simplemente hermoso! ✨",
                    foto: "",
                    },
                    {
                    usuario: "taylorswift",
                    coment: "¡El Lip Glow Oil de Dior es la definición de lujo para los labios! Su fórmula no pegajosa y su aroma delicado lo hacen perfecto para llevar en cualquier ocasión. 💄",
                    foto: "",
                    },
                    {
                    usuario: "valenzenere",
                    coment: "¡Me encanta cómo este lip oil transforma mis labios! El Lip Glow Oil de Dior los deja suaves, hidratados y con un brillo irresistible. ¡Totalmente recomendado! 😊",
                    foto: "",
                    },
            ]
        },
        {
            imagen: "images/products/rhode.png",
            nombre: "Lip Gloss - Rhode",
            descripcion: "Un brillo labial antiadherente y de larga duración, con una fórmula clara y ligera que ayuda a nutrir y suavizar los labios.",
            comentarios: [
                {
                    usuario: "chinodarin",
                    coment: "¡El gloss de Rhode es simplemente magnífico! Le da a mis labios un brillo deslumbrante y una sensación suave y cómoda. ¡Me encanta! 💋",
                    foto: "",
                    },
                    {
                    usuario: "julipoggio",
                    coment: "¡Este gloss es todo lo que necesito para destacar mis labios! El gloss de Rhode tiene una textura increíblemente suave y un brillo que no pasa desapercibido. 😍",
                    foto: "",
                    },
                    {
                    usuario: "natioreiro",
                    coment: "¡No puedo dejar de usar este gloss! El gloss de Rhode es mi favorito absoluto, su fórmula no pegajosa y sus tonos son perfectos para cualquier ocasión. ✨",
                    foto: "",
                    },
                    {
                    usuario: "gimeaccardi",
                    coment: "¡El gloss de Rhode es una verdadera maravilla! Su aplicador es tan preciso y su textura es tan ligera que olvidarás que lo estás usando. 💄",
                    foto: "",
                    },
                    {
                    usuario: "candevetrano",
                    coment: "¡Este gloss es mi nuevo imprescindible! El gloss de Rhode deja mis labios con un brillo increíble y una sensación hidratante que dura horas. ¡Simplemente perfecto! 😊",
                    foto: "",
                    },
            ]
        },
    ],    
};


module.exports = db;