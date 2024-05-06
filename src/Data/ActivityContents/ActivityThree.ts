import { ContentModel, ContentTypes } from "../../types/ContentCard";

export const ActivityThreeContentsData: ContentModel[] = [
    {
        id: 1,
        title: "Almacenaje, Memoria y Archivos",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/1.jpg") },
            { type: ContentTypes.Subtitle, content: "Introducción" },
            { type: ContentTypes.Text, content: `La funcionabilidad del almacenaje de información y archivos en cada Sistema Operativo trabajan de distinta manera, cada individuo usa el administrador de archivos según sea más optimo, cómodo y viable para el sistema operativo que esté utilizado. Entender cómo funciona el control de espacios en el mismo nos ayudará a la administración de estos mismos para un correcto funcionamiento. Todos estos sistemas son muy amigables con el usuario son fáciles de usar, así mismo son fáciles de llenar o modificar algo que no se debe. También debemos ser conscientes de los problemas más comunes en la administración de memoria.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/2.jpg") },
        ]
    },
    {
        id: 2,
        title: "Tipos de memorias y Sistemas Operativos",
        content: [
            { type: ContentTypes.Subtitle, content: "Windows y Linux utilizan dos tipos de memoria en común:" },
            { type: ContentTypes.Text, content: `•	Random Access Memory (RAM): almacena temporalmente datos y programas que están en uso activo en cierto periodo.
            `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/3.jpg") },
            { type: ContentTypes.Text, content: `•	Almacenamiento (HDD o SSD): principalmente referido a la unidad donde se instala el sistema operativo, se almacenan programas y datos y puede dividirse en particiones para una gestión más organizada.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/4.png") },
            
            { type: ContentTypes.Subtitle, content: "Mientras que Windows y IOS comparten estos dos tipos:" },
            { type: ContentTypes.Text, content: `•	Random Access Memory (RAM): almacena temporalmente datos y programas que están en ejecución. Mientras más RAM tenga un dispositivo IOS, más aplicaciones podrán ejecutarse simultáneamente y más rápido será el rendimiento del sistema.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/8.jpg") },
            { type: ContentTypes.Text, content: `•	Caché: utiliza una caché del sistema de archivos para almacenar metadatos y datos de archivos en la memoria RAM, lo que permite un acceso más rápido a estos datos. Esta caché ayuda a reducir la cantidad de acceso directo al disco, lo que mejora el rendimiento de lectura y escritura de archivos. iOS utiliza varios tipos de caché para mejorar el rendimiento del sistema y de las aplicaciones. Esto incluye cachés de disco para almacenar datos temporalmente, cachés de aplicaciones para almacenar datos específicos de la aplicación en la RAM, y cachés del sistema para almacenar datos comunes utilizados por el sistema operativo.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/5.png") },
            
            { type: ContentTypes.Subtitle, content: "Windows:" },
            { type: ContentTypes.Text, content: `•	Windows utiliza principalmente el sistema de archivos de nueva tecnología (NTFS) para el almacenamiento interno en dispositivos móviles como tabletas Surface. NTFS es un sistema de archivos maduro y altamente confiable que proporciona muchas funciones avanzadas para la administración de datos. Una de las características más notables de NTFS es su soporte para la compresión de archivos.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/12.jpg") },
            
            
            { type: ContentTypes.Subtitle, content: "Linux:" },
            { type: ContentTypes.Text, content: `•	Memoria de intercambio (swap): es utilizada como una extensión de la RAM cuando esta se encuentra llena. La memoria de intercambio se encuentra en el disco duro, pero solo es utilizada para almacenamiento temporal para datos no activos en la RAM.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/6.png") },
            { type: ContentTypes.Text, content: `•	X File System (XFS): sistema de archivos de alto rendimiento, capaz de manejar sistemas de archivos y archivos individuales de hasta 16 y 8 exabytes. XFS es flexible y cuenta con herramientas para administrar el espacio en disco de manera eficiente, lo que lo hace ideal para aplicaciones que requieren almacenamiento masivo y manejo eficiente de grandes volúmenes de datos`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/7.jpg") },
            
            
            
            { type: ContentTypes.Subtitle, content: "iOS:" },
            { type: ContentTypes.Text, content: `•	Memoria de almacenamiento (flash): se utiliza para almacenar de manera permanente el sistema operativo, las aplicaciones, los archivos y otros datos del usuario. Esta memoria es donde se guardan fotos, videos, música y otros archivos descargados o generados por el usuario.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/10.png") },
            { type: ContentTypes.Text, content: `•	Memoria de video (VRAM): se utiliza para almacenar temporalmente datos relacionados con la pantalla y los gráficos en dispositivos iOS. Esto incluye información sobre píxeles, texturas y otros elementos necesarios para renderizar imágenes y animaciones en la pantalla.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/9.png") },
            { type: ContentTypes.Text, content: `•	El sistema de archivos principal utilizado en dispositivos iOS es el Apple File System (APFS). APFS está optimizado para dispositivos de estado sólido, proporciona cifrado nativo, soporta instantáneas, espacios compartidos y clonaciones, y utiliza metadatos avanzados para mejorar la eficiencia en la gestión de archivos. Estas características hacen que APFS sea adecuado para los requisitos de almacenamiento y seguridad de dispositivos iOS.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/11.jpg") },
        ]
    },
    {
        id: 3,
        title: "Sistemas Operativos de Red",
        content: [
            { type: ContentTypes.Text, content: `Los sistemas operativos de red se pueden definir como aquellos equipos comunicados a través de un medio ya sea físico o no llamado servidor. Estos sistemas operativos están diseñados para facilitar la comunicación y el intercambio de datos entre dispositivos conectados en una red. Algunas de las funciones típicas de los sistemas operativos de red incluyen la gestión de conexiones de red, la asignación de recursos de red, la administración de seguridad y la implementación de protocolos de comunicación. `},
            { type: ContentTypes.Text, content: `Ejemplos de sistemas operativos de red incluyen Linux, Windows Server, macOS Server, entre otros. Estos sistemas operativos están optimizados para proporcionar servicios de red como el enrutamiento, la gestión de archivos compartidos, la impresión en red y la administración centralizada de usuarios y recursos.`},
            { type: ContentTypes.Subtitle, content: "Existen diferentes tipos de sistemas operativos de red, cada uno con sus propias características y aplicaciones:" },
            { type: ContentTypes.Text, content: `•	Sistemas operativos de red para pequeñas empresas (NOS para PYMES): Diseñados para redes pequeñas con menos de 50 usuarios. Suelen ser fáciles de usar y administrar, y ofrecen funciones básicas de seguridad y compartición de recursos.`},
            { type: ContentTypes.Text, content: `•	Sistemas operativos de red para empresas: Diseñados para redes más grandes con más de 50 usuarios. Ofrecen funciones más avanzadas de seguridad, administración y escalabilidad.`},
            { type: ContentTypes.Text, content: `•	Sistemas operativos de red de alto rendimiento: Diseñados para redes con requisitos de rendimiento exigentes, como redes de centros de datos. Ofrecen funciones de optimización del rendimiento y alta disponibilidad.`},
            
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/13.jpg") },
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/14.jpg") },
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/15.png") },
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/16.jpg") },
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/17.png") },
            
                        
        ]
    },


    {
        id: 4,
        title: "Importancia de la administración de memoria",
        content: [
            { type: ContentTypes.Text, content: `El NOS (Network Operative System) se trata realmente de un software necesario para integrar los componentes de red, como archivos, periféricos y recursos en un todo, al cual el usuario final tiene un cómodo acceso. Permite ver otros equipos conectados en red con sus SOs y usuarios para poder comunicarse con ellos e intercambiar información, ejecutar tareas, transferir archivos (principal función), etc.`},
            { type: ContentTypes.Text, content: `El administrador de memoria tiene como objetivos ubicar, reemplazar, cargar y descargar procesos en la memoria principal; proteger la memoria de acceso indeseados (accidentales o intencionados); y permitir el sharing de zonas de memoria (indispensable para lograr la cooperación de procesos).`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/18.jpg") },
                        
        ]
    },

    {
        id: 5,
        title: "Control de los espacios disponibles y ocupados en la memoria",
        content: [
            { type: ContentTypes.Text, content: `Para llevar un control preciso de los espacios disponibles y ocupados en la memoria, el sistema operativo implementa diversas estrategias:`},
            
            { type: ContentTypes.Subtitle, content: `1.	Estructuras de datos:`},
            { type: ContentTypes.Text, content: `Tablas de memoria, listas de memoria libre y mapas de bits.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/19.jpg") },
            
            
            { type: ContentTypes.Subtitle, content: `2.	Algoritmos de asignación de memoria:`},
            { type: ContentTypes.Text, content: `First fit, Best fit, Worst fit y Asignación por búferes.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/20.png") },
            
            { type: ContentTypes.Subtitle, content: `3.	Técnicas de compactación de memoria:`},
            { type: ContentTypes.Text, content: `Compactación de memoria contigua y compactación de memoria no contigua.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/21.png") },
            
            
            { type: ContentTypes.Subtitle, content: `4.	Gestión de memoria virtual:`},
            { type: ContentTypes.Text, content: `Paginación y Segmentación.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/22.jpg") },
            
            
            { type: ContentTypes.Subtitle, content: `5. Monitoreo y estadísticas:`},
            { type: ContentTypes.Text, content: `Registro de utilización de la memoria e Identificación de cuellos de botella.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/23.jpg") },
                        
        ]
    },

    {
        id: 6,
        title: "Problemas más frecuentes en la administración de memoria",
        content: [
            { type: ContentTypes.Text, content: `La pérdida de datos, bloqueo del sistema o un decremento en cuanto a su funcionamiento pueden ser algunos problemas del software. Entre los problemas relacionados al hardware se incluyen aquellos correspondientes a los módulos de memoria, los cuales pueden consistir en daños físicos o simple degradación por el tiempo. Por último, en cuanto a los errores humanos, la eliminación de archivos importantes o configuraciones, así como la aplicación de una configuración de memoria incorrecta.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/24.png") },
            
            { type: ContentTypes.Text, content: `Asimismo, la presencia de malware o virus también puede ocasionar este tipo de problemas, ya que estos causan por lo general el consumo de grandes cantidades de memoria y, por ende, ocasionar la inestabilidad del sistema.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-three/25.jpg") },
            
                        
        ]
    },
];


