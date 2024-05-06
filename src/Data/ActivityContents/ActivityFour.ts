import { ContentModel, ContentTypes } from "../../types/ContentCard";

export const ActivityFourContentsData: ContentModel[] = [
    {
        id: 19,
        title: "Redes y Seguridad, Sistemas Distribuidos",
        content: [
            { type: ContentTypes.Subtitle, content: `Introducción`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/4.png") },
            { type: ContentTypes.Text, content: `Es importante conocer los temas de seguridad en redes y malwares, con el fin de poder evitar el ataque de estos, además de enfrentar este tipo de virus desde la posición de un usuario, una red o una empresa, ya que para cada individuo se plantea un riesgo diferente.`},
            { type: ContentTypes.Subtitle, content: `Tipos de Virus`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/1.png") },
            { type: ContentTypes.Text, content: `Existe la duda sobre la diferencia entre un virus y el malware La diferencia es que el malware es un término genérico para una variedad de amenazas online, incluidos virus, spyware, adware, ransomware y otros tipos de software malicioso Un virus informático es solo un tipo de malware`},
            { type: ContentTypes.Text, content: `El malware puede acceder a una red mediante phishing, archivos adjuntos maliciosos, descargas maliciosas, ingeniería social o unidades flash En esta descripción general, veremos los tipos de malware comunes`},
            
            { type: ContentTypes.Text, content: `•	Adware: una contracción de “advertising supported software” (software con publicidad), muestra anuncios no deseados y a veces maliciosos en la pantalla del ordenador o dispositivo móvil, redirige los resultados de las búsquedas a sitios web de publicidad y recopila los datos de los usuarios para venderlos a anunciantes sin su consentimiento.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/5.jpg") },
            
            { type: ContentTypes.Text, content: `•	Spyware: se oculta en el dispositivo, controla tu actividad y roba información confidencial como datos financieros, información de cuentas, etc. El spyware puede propagarse al explotar vulnerabilidades de software o puede incluirse con programas legítimos o en troyanos.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/7.png") },
            
            { type: ContentTypes.Text, content: `•	Ransomware: diseñado para bloquear el acceso de los usuarios a su sistema o denegar el acceso a los datos hasta que se pague un rescate antes de una fecha específica a menudo, este debe hacerse a través de una criptomoneda, como el Bitcoin.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/6.jpg") },
            
            
            { type: ContentTypes.Text, content: `•	Troyanos: (o caballo de Troya) se oculta como software legítimo con el fin de engañarte. Como parece legítimo, los usuarios lo descargan y, sin darse cuenta, permiten que el malware entre en su dispositivo eliminando, modificando o capturando datos, recolectando tu dispositivo como parte de un botnet u obtener acceso a tu red.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/8.jpg") },
            
            { type: ContentTypes.Text, content: `•	Gusanos: Un gusano es un programa independiente que se replica para infectar otros equipos sin requerir la acción de nadie. Dado que se pueden propagar rápido, los gusanos suelen utilizarse para ejecutar una carga (un fragmento de código creado para dañar un sistema). Las cargas pueden eliminar archivos en un sistema host, cifrar datos para un ataque de ransomware, robar información, eliminar archivos y crear botnets. `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/9.png") },
            
            { type: ContentTypes.Text, content: `•	Virus: es un fragmento de código que se inserta en una aplicación y se ejecuta cuando se abre. Un virus puede robar datos confidenciales, ejecutar ataques DDoS o llevar a cabo ataques de ransomware. Suele propagarse en sitios web infectados, transferencias o descargas de archivos adjuntos de correos electrónicos; permanecerá inactivo hasta que el archivo o programa infectado se active y el virus puede replicarse y propagarse en sus sistemas.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/2.png") },
            
            { type: ContentTypes.Text, content: `•	Keyloggers: tipo de spyware que vigila la actividad del usuario. Los keyloggers se pueden utilizar en una familia para realizar un seguimiento de la actividad de sus hijos en Internet o una organización para supervisar la actividad de los empleados. Sin embargo, cuando se instalan con fines maliciosos, pueden usarse para robar contraseñas, información bancaria y otra información confidencial. Los keyloggers pueden entrar en un sistema a través de phishing, ingeniería social o descargas maliciosas.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/10.png") },
            
            { type: ContentTypes.Text, content: `•	PUP: Los PUP, cuya sigla significa “programas potencialmente no deseados” en inglés, son programas que pueden incluir anuncios, barras de herramientas y ventanas emergentes que no están relacionados con el software que descarga el usuario. Los PUP suelen estar incluidos con otros programas más legítimos. La mayoría de las personas instalan un PUP porque han descargado un programa nuevo y no han leído la letra pequeña al instalarlo. De este modo, no se dieron cuenta de que estaban añadiendo.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/11.png") },
            
            
        ]
    },
    
    {
        id: 20,
        title: "Seguridad Informática",
        content:[
            { type: ContentTypes.Text, content: `La seguridad informática se refiere al conjunto de medidas, políticas, procedimientos y herramientas diseñadas para proteger la integridad, la confidencialidad y la disponibilidad de los sistemas de información y los datos que contienen.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/12.png") },
        ]
    },
    {
        id: 21,
        title: "Amenazas del malware contra el sistema ",
        content:[
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/3.jpg") },
            { type: ContentTypes.Text, content: `
            
                •	Pérdida de datos
                •	Robo de identidad
                •	Daño a la reputación
                •	Interrupción de servicios
                •	Pérdidas financieras
                •	Daño a la infraestructura crítica
                •	Espionaje y sabotaje
                
                `},
            { type: ContentTypes.Text, content: `Estas son solo algunas de las muchas amenazas que pueden surgir debido al malware. El impacto dependerá mucho a que individuo o empresa se infecte con el malware puede resultar para una empresa en pérdidas millonarias.`},
        ]
    },
    {
        id: 22,
        title: "Intrusos informáticos",
        content:[
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/14.jpg") },
            { type: ContentTypes.Text, content: `Un intruso informático es aquel que intenta acceder a un sistema informático sin autorización. Existen diferentes tipos de intrusos informáticos:`},
            { type: ContentTypes.Text, content: `•	Hacker: destaca por su gran experiencia en programación y electrónica. Por lo regular, es un profesional certificado, con valores y ayudando a la comunidad de seguridad informática. Existen tres tipos:`},
            { type: ContentTypes.Text, content: `•	White Hats: también conocidos como hackers éticos, usa sus habilidades para mejorar los sistemas en cuanto a términos de seguridad.`},
            { type: ContentTypes.Text, content: `•	Grey Hats: tienen una ética ambigua, ya que suelen buscar vulnerabilidades por métodos poco aprobados éticamente, para después venderlas a quien esté dispuesto a pagar por ellas.`},
            { type: ContentTypes.Text, content: `•	Black Hats: en pocas palabras, utilizan sus conocimientos para realizar actividades ilegales, por lo general con ánimo de lucro o por reputación.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/15.png") },
            { type: ContentTypes.Text, content: `•	Cracker: Son expertos en romper sistemas de seguridad o programas en general, y suele tener intenciones ilegales como robar información o realizar fraudes. Viola cualquiera de las leyes de seguridad informática y roba información con fines de lucro.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/13.1.jpg") },
            { type: ContentTypes.Text, content: `•	Script kiddies: Tienen conocimiento limitado de hacking y utilizan códigos y herramientas preconfiguradas para sus ataques. A menudo actúan por diversión o por reputación.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/13.jpg") },
            { type: ContentTypes.Text, content: `•	Intrusos internos: Personas que tienen acceso legítimo al sistema o red, a la vez que utilizan su privilegio para llevar a cabo acciones maliciosas.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/16.png") },
            { type: ContentTypes.Text, content: `•	Phisers: No necesariamente tienen conocimientos de hacking, más bien utilizan técnicas de ingeniería social para engañar a los usuarios y obtener sus credenciales.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/17.png") },
        ]
    },
    {
        id: 23,
        title: "Niveles de Seguridad en Sistemas Operativos",
        content:[
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/18.jpg") },
            
            { type: ContentTypes.Subtitle, content: "Seguridad Física:"},
            { type: ContentTypes.Text, content: `•	Control de acceso físico: Restringir el acceso físico a los dispositivos y servidores donde se ejecuta el sistema operativo.`},
            { type: ContentTypes.Text, content: `•	Protección del hardware: Utilizar cerraduras, cámaras de vigilancia y sistemas de alarma para proteger el hardware contra robos o daños.`},
            
            { type: ContentTypes.Subtitle, content: "Seguridad de acceso:"},
            { type: ContentTypes.Text, content: `•	Autenticación de usuario: Verificar la identidad del usuario mediante contraseñas, autenticación de dos factores (2FA), biometría u otros métodos.`},
            { type: ContentTypes.Text, content: `•	Autorización: Determinar qué recursos y acciones están permitidos para cada usuario o grupo de usuarios.`},
            { type: ContentTypes.Text, content: `•	Políticas de contraseñas: Establecer requisitos para la complejidad y el cambio regular de contraseñas.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/19.png") },
            
            { type: ContentTypes.Subtitle, content: "Seguridad de Red:"},
            { type: ContentTypes.Text, content: `•	Firewalls: Filtrar el tráfico de red para prevenir accesos no autorizados y ataques.`},
            { type: ContentTypes.Text, content: `•	Cifrado de datos: Proteger la información transmitida a través de la red mediante protocolos como SSL/TLS.`},
            { type: ContentTypes.Text, content: `•	Detección y prevención de intrusiones (IDS/IPS): Monitorear la red en busca de actividad sospechosa y tomar medidas para prevenir o mitigar intrusiones.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/20.png") },
            
            { type: ContentTypes.Subtitle, content: "Seguridad de datos:"},
            { type: ContentTypes.Text, content: `•	Cifrado de archivos y discos: Proteger los datos almacenados mediante el cifrado para evitar accesos no autorizados.`},
            { type: ContentTypes.Text, content: `•	Copias de seguridad: Realizar copias de seguridad regulares de los datos para protegerlos contra pérdidas o daños.`},
            { type: ContentTypes.Text, content: `•	Gestión de parches y actualizaciones: Mantener el sistema operativo actualizado con los últimos parches de seguridad para corregir vulnerabilidades conocidas.`},
            { type: ContentTypes.Text, content: `•	Auditoría y registro: Registrar eventos de seguridad y actividades del sistema para su posterior revisión y análisis.`},
            { type: ContentTypes.Text, content: `•	Monitorización de la integridad del sistema: Supervisar los archivos del sistema y otros componentes para detectar cambios no autorizados.`},
            { type: ContentTypes.Text, content: `•	Políticas de seguridad: Establecer políticas y procedimientos de seguridad que regulen el uso del sistema operativo y los recursos del sistema.`},
            { type: ContentTypes.Text, content: `•	Capacitación del usuario: Educar a los usuarios sobre las mejores prácticas de seguridad y concienciar sobre las amenazas potenciales.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/21.png") },
        ]
    },
    {
        id: 24,
        title: "Tipos de autenticadores en los sistemas operativos",
        content:[
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/22.png") },
            { type: ContentTypes.Text, content: `•	Contraseñas: Son la forma más común de autenticación y suelen requerir que el usuario ingrese una combinación de letras, números y caracteres especiales.`},
            { type: ContentTypes.Text, content: `•	Tarjetas inteligentes: Son dispositivos físicos que contienen información de autenticación y que se insertan en un lector para verificar la identidad del usuario.`},
            { type: ContentTypes.Text, content: `•	Biometría: Utiliza características físicas únicas del usuario, como huellas dactilares, iris o voz, para autenticar su identidad.`},
            { type: ContentTypes.Text, content: `•	Tokens de autenticación: Son dispositivos físicos o aplicaciones móviles que generan códigos temporales o únicos que el usuario debe proporcionar junto con su contraseña para autenticarse.`},
            { type: ContentTypes.Text, content: `•	Certificados digitales: Se utilizan para verificar la identidad de un usuario o dispositivo mediante la firma digital de un tercero de confianza.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-four/23.jpg") },
        ]
    },
];


