import { ContentModel, ContentTypes } from "../../types/ContentCard";

export const ActivityOneContentsData: ContentModel[] = [
    {
        id: 1,
        title: "¿Qué es un sistema operativo?",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img1.png") },
            { type: ContentTypes.Text, content: `Un sistema operativo consiste en un programa que controla la ejecución de aplicaciones y programas y que actúa como interfaz entre las aplicaciones y el hardware del computador.`},
            { type: ContentTypes.Text, content: `El sistema operativo tiene como objetivo cumplir los siguientes objetivos:`},
            { type: ContentTypes.Text, content: `•	Facilidad de uso: Facilita el uso de un computador.`},
            { type: ContentTypes.Text, content: `•	Eficiencia: Permite que los recursos de un sistema de computación se puedan utilizar de una manera eficiente.`},
            { type: ContentTypes.Text, content: `•	Capacidad para evolucionar: Se pueden desarrollar, probar e introducir nuevas funciones en el sistema sin interferir con su servicio.`},
            
        ]
    },
    {
        id: 2,
        title: "¿Cuáles son los componentes de los sistemas operativos?",
        content: [
            { type: ContentTypes.Text, content: `En su sentido más abstracto, un sistema operativo (SO) está compuesto de controlador E/S (Entrada y salida), procesador, Software del SO, programas y datos del usuario y el almacenamiento. Para una mejor ilustración se puede basar en la siguiente imagen:`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img2.png") },
            { type: ContentTypes.Text, content: `•	 Controlador E/S: Es el sistema de entrada/salida, representa el intercambio de información entre el procesador y los dispositivos periféricos.`},
            { type: ContentTypes.Text, content: `•	 Procesador: Se encarga de leer y escribir datos en memoria, procesar órdenes, interpretar datos, decidir qué programar podrá hacer uso de un determinado recurso y durante cuánto tiempo.`},
            { type: ContentTypes.Text, content: `•	 Software del SO: Este es un programa que reúne programas que realizan las tareas del sistema estos son: manipulación y modificación de archivos, información del estado del sistema, soporte a lenguajes de programación y comunicaciones.`},
            { type: ContentTypes.Text, content: `•	 Memoria: El SO determina en la memoria cuantos espacios están siendo utilizados y decidiendo qué procesos se cargarán en memoria cuando haya espacio disponible, asignando y reclamando espacio de memoria.`},
            { type: ContentTypes.Text, content: `•	 Almacenamiento: Es una gran tabla de parámetros o bytes donde se almacenan datos de rápido acceso y que es compartida con la CPU y los dispositivos de E/S.`},
            
            
        ]
    },

    {
        id: 3,
        title: "Responsabilidades de un SO",
        content: [
            { type: ContentTypes.Text, content: `Una responsabilidad clave de los sistemas operativos es la gestión de varios recursos disponibles para ellos (espacio de memoria principal, dispositivos de E/S, procesadores) y para planificar su uso por parte de los distintos procesos activos. `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img3.jpg") },
            { type: ContentTypes.Text, content: `Por otro lado, la administración de datos es parte esencial en el funcionamiento de un SO, la cual, para su procesamiento, se ayuda de distintas técnicas para un manejo más efectivo y optimizado. A continuación, se describen dichas técnicas:`},
            
            
            
            { type: ContentTypes.Text, content: `•	 Cola a corto plazo: se compone por procesos que se encuentran en memoria principal (o al menos una porción mínima esencial de cada uno de ellos está en la memoria principal) y están listos para ejecutarse siempre que el procesador está disponible. Cualquiera de estos procesos podrá usar el procesador, mas es responsabilidad del planificador a corto plazo, también conocido como dispatcher, elegir uno de ellos.`},
            { type: ContentTypes.Text, content: `•	 Asignar Prioridades: Es una estrategia común el asignar en orden a cada proceso de la cola un intervalo de tiempo; esta técnica se conoce como round-robin o turno rotatorio.`},
            { type: ContentTypes.Text, content: `•	 Cola a largo plazo: Es una lista de nuevos trabajos esperando a utilizar el procesador. El sistema operativo añade trabajos al sistema transfiriendo un proceso desde la cola a largo plazo hasta la cola a corto plazo. En este punto, se debe asignar una porción de memoria principal al proceso entrante. Por tanto, el sistema operativo debe estar seguro de que no sobrecarga la memoria o el tiempo de procesador admitiendo demasiados procesos en el sistema.`},
            { type: ContentTypes.Text, content: `•	 Manejador de interrupción: Su ejecución depende de si hay suficiente espacio de estado de hardware para asegurarse de que el sistema puede restaurar el contexto de la hebra después de que se haya completado el manejador de interrupción. Los manejadores de interrupción recién invocados experimentan todos los retrasos del movimiento hacia arriba de la jerarquía de hardware (excepto los errores de página).`},
            
            
            { type: ContentTypes.Subtitle, content: `•	Cada una de estas técnicas trabajan simultáneamente para el funcionamiento del SO. Esto se ilustra mejor en la siguiente imagen.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img4.png") },
            
        ]
    },

    {
        id: 4,
        title: "Clasificaciones de SO",
        content: [
            { type: ContentTypes.Text, content: `Los sistemas operativos pueden desarrollarse con distintos objetivos en mente, y dentro de cada objetivo se dividen según su caso. Algunos objetivos son los siguientes:`},
            
            
            { type: ContentTypes.Subtitle, content: `•	Número de usuarios.`},
            { type: ContentTypes.Text, content: `•	Monousuario: Solo capta las instrucciones de un solo, al igual que no difiere entre usuarios ya que todos tienen el mismo valor. `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img5.png") },
            { type: ContentTypes.Text, content: `•	Multiusuario: Son capaces de dar servicio a más de un usuario a la vez, ya sea por medio de varias terminales conectadas a la computadora o por medio de sesiones remotas en una red de comunicaciones.`},
            
            
            { type: ContentTypes.Subtitle, content: `•	Capacidad de procesamiento.`},
            { type: ContentTypes.Text, content: `•	Monotarea: Solamente puede ejecutar un proceso del programa de computación a la vez.`},
            { type: ContentTypes.Text, content: `•	Multitarea: Divide el tiempo de procesador disponible entre los procesos o subprocesos que lo necesitan.`},
            
            
            { type: ContentTypes.Subtitle, content: `•	 Responsabilidades y medio de ejecución.`},
            { type: ContentTypes.Text, content: `•	Computadora: Es utilizado por usuarios con diferentes capacidades, profesiones, experiencias y necesidades, por lo que requiere presentar una GUI intuitiva y compatible con una gran mayoría de aplicaciones de terceros.`},
            { type: ContentTypes.Text, content: `•	Móvil: Si bien es similar al de una computadora, requiere de presentar sus funciones de una forma más compacta.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img6.jpg") },
            { type: ContentTypes.Text, content: `•	Redes: se encarga de una administración con un alcance más extenso, ya que requiere gestionar recursos de más de un computador, router, switch y demás.`},
            
            
            
        ]
    },


    {
        id: 5,
        title: "Linux y sus características.",
        content: [
            { type: ContentTypes.Text, content: `Los sistemas operativos pueden desarrollarse con distintos objetivos en mente, y dentro de cada objetivo se dividen según su caso. Algunos objetivos son los siguientes:`},
            
            
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-one/img7.png") },
            { type: ContentTypes.Text, content: `Linux es un sistema operativo versátil, potente y de código abierto que se utiliza en una amplia gama de dispositivos y escenarios, desde sistemas personales hasta infraestructuras de servidores críticas. Su flexibilidad y comunidad activa de desarrolladores lo convierten en una opción popular tanto para usuarios avanzados como para empresas.`},
            { type: ContentTypes.Subtitle, content: `Tipo de sistema operativo`},
            { type: ContentTypes.Text, content: `Unix-like: Linux es un sistema operativo de tipo Unix-like, lo que significa que sigue principios y estándares similares a Unix, pero no comparte su código base directamente.`},
            
            
            { type: ContentTypes.Subtitle, content: `Clasificaciones`},
            { type: ContentTypes.Text, content: `•	Kernel Linux: El núcleo de Linux (Linux Kernel) es la parte central del sistema operativo que gestiona recursos como la CPU, la memoria y los dispositivos de entrada/salida.`},
            { type: ContentTypes.Text, content: `•	Distribuciones Linux: Aunque Linux es técnicamente solo el kernel, se distribuye en combinación con software adicional (como bibliotecas, herramientas y aplicaciones) para formar distribuciones completas de sistemas operativos, como Ubuntu, Fedora, Debian, y muchas otras.`},
            
            { type: ContentTypes.Subtitle, content: `Componentes principales`},
            { type: ContentTypes.Text, content: `•	Kernel: El kernel de Linux es responsable de la gestión de recursos del sistema, como la memoria, los procesos y el acceso a hardware.`},
            { type: ContentTypes.Text, content: `•	Shell: Linux tiene un intérprete de comandos (shell) que permite a los usuarios interactuar con el sistema mediante líneas de comando.`},
            { type: ContentTypes.Text, content: `•	Sistema de archivos: Utiliza un sistema de archivos jerárquico (como ext4) para organizar y gestionar datos en el disco.`},
            { type: ContentTypes.Text, content: `•	Bibliotecas y utilidades: Incluye una variedad de bibliotecas y utilidades estándar que proporcionan funciones esenciales para los programas y el mantenimiento del sistema.`},
            
            
            { type: ContentTypes.Subtitle, content: ` Capacidades`},
            { type: ContentTypes.Text, content: `•	Multiusuario: Linux permite que múltiples usuarios accedan al sistema simultáneamente, cada uno con sus propios entornos y permisos.`},
            { type: ContentTypes.Text, content: `•	Multiplataforma Puede ejecutarse en una amplia variedad de arquitecturas de hardware, desde computadoras personales hasta servidores, dispositivos integrados y supercomputadoras.`},
            { type: ContentTypes.Text, content: `•	Seguridad: Ofrece un robusto conjunto de herramientas de seguridad y controles de acceso para proteger el sistema y los datos.`},
            { type: ContentTypes.Text, content: `•	Personalización: Linux es altamente personalizable y configurable, lo que permite a los usuarios adaptar el sistema a sus necesidades específicas.`},
            { type: ContentTypes.Text, content: `•	Estabilidad y rendimiento: Es conocido por su estabilidad y capacidad para manejar cargas de trabajo intensivas de manera eficiente, lo que lo hace popular en servidores y sistemas embebidos.`},
            
            
            { type: ContentTypes.Text, content: `Linux es un sistema operativo versátil, potente y de código abierto que se utiliza en una amplia gama de dispositivos y escenarios, desde sistemas personales hasta infraestructuras de servidores críticas. Su flexibilidad y comunidad activa de desarrolladores lo convierten en una opción popular tanto para usuarios avanzados como para empresas.`},
            
            
            
        ]
    },

];


