import { ContentModel, ContentTypes } from "../../types/ContentCard";

export const ActivityTwoContentsData: ContentModel[] = [
    {
        id: 18,
        title: "Concurrencia y sus variantes.",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img1.png") },
            { type: ContentTypes.Text, content: `La concurrencia se puede definir como la ejecución simultánea de múltiples tareas las cuales pueden ejecutarse o no al mismo tiempo, pero éstas son independientes. Es decir que a diferencia de otros procesos secuenciales en donde no se puede progresar a menos que se haya ejecutado por completo la primera instrucción, en la concurrencia se pueden realizar múltiples tareas o procesos que sean independientes.`},
            
            { type: ContentTypes.Text, content: `•	Concurrencia física: Ocurre cuando se encuentra más de un procesador y múltiples unidades (hilos) de un mismo programa se ejecutan totalmente de forma simultánea.`},
            { type: ContentTypes.Text, content: `•	Concurrencia lógica: En este caso se asume la existencia de varios procesadores, aunque no estos existan físicamente. El implementador de tareas del lenguaje se encargará de “mapear” la concurrencia lógica sobre el hardware realmente disponible. Esta es la más general, pues el diseño del programa no está condicionado por los recursos de computación disponibles.`},
            
        ]
    },
    {
        id: 19,
        title: "Modelos de programación concurrente.",
        content: [
            { type: ContentTypes.Text, content: `Los modelos de programación concurrente son enfoques utilizados en la programación de software para manejar la ejecución simultánea de múltiples tareas o procesos dentro de un mismo sistema computacional. Estos modelos abordan los desafíos asociados con la concurrencia, como la sincronización de recursos compartidos y la comunicación entre procesos.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img2.png") },
            
            { type: ContentTypes.Text, content: `Modelo de hilos: Se basa en la idea de ejecutar múltiples subprocesos dentro de un mismo proceso. Cada hilo representa una secuencia de ejecución independiente dentro del proceso principal. `},
            { type: ContentTypes.Text, content: `•	 Características:
            •	Los hilos comparten el mismo espacio de direcciones de memoria y recursos del proceso principal.
            •	Los hilos pueden ejecutar tareas concurrentemente y compartir datos de manera más eficiente que los procesos separados.
            •	Requieren sincronización explícita para evitar problemas como las condiciones de carrera y el acceso concurrente a datos compartidos.
            `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img3.png") },
            { type: ContentTypes.Text, content: `Modelo de actores: En el modelo de actores, las entidades de ejecución (actores) son unidades independientes de procesamiento que interactúan entre sí enviándose mensajes. `},
            { type: ContentTypes.Text, content: `•	Características:
            •	Cada actor tiene su propio estado interno y puede comunicarse con otros actores solo enviando mensajes.
            •	Los actores pueden procesar mensajes de forma asíncrona y gestionar su propio estado interno de manera segura.
            •	Este modelo promueve el diseño desacoplado y escalable, donde los actores pueden ser distribuidos en múltiples nodos de forma transparente.
            `},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img4.png") },
            { type: ContentTypes.Text, content: `Modelo de productores y consumidores: Se centra en la colaboración entre dos tipos de procesos: los productores, que generan datos, y los consumidores, que utilizan esos datos. `},
            { type: ContentTypes.Text, content: `•	Características:
            •	Los productores y consumidores trabajan de forma concurrente y suelen compartir una estructura de datos intermedia, como una cola.
            •	Los productores añaden datos a la estructura de datos compartida, mientras que los consumidores extraen y procesan estos datos.
            •	Este modelo se utiliza para diseñar sistemas donde las tareas de producción y consumo deben manejarse de manera eficiente y sincronizada.
            `},
            
            
        ]
    },

    {
        id: 20,
        title: "Ventajas de la concurrencia.",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img5.png") },
            { type: ContentTypes.Text, content: `•	Aprovechamiento de recursos: Permite la utilización eficiente y económica de recursos al realizar operaciones de I/O mientras otras tareas están en espera, evitando que los recursos se subutilicen y se disminuya el tiempo de CPU.`},
            { type: ContentTypes.Text, content: `•	Entornos Multinúcleo: En estos casos, la concurrencia facilita la ejecución paralela de tareas, lo que contribuye en la mejora significativa del rendimiento.`},
            { type: ContentTypes.Text, content: `Mejor capacidad de respuesta: Reduce el tiempo de respuesta al ejecutar varias tareas a la vez y permitir el procesamiento en segundo plano de tareas secundarias sin afectar negativamente la experiencia del usuario principal.`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img6.png") },
            { type: ContentTypes.Text, content: `•	 Mejor tolerancia de fallos: Logra el aislamiento de errores, debido a que los fallos en tareas o procesos específicos no afectan necesariamente a demás tareas, de igual manera mejorando la robustez del sistema.`},
            { type: ContentTypes.Text, content: `•	 Modularidad y mantenimiento del código: Simplifica el desarrollo y mantenimiento debido a que facilita la división de tareas en unidades más pequeñas, permitiendo a su vez las actualizaciones y mejoras en partes específicas del sistema sin afectar el resto.`},
            { type: ContentTypes.Text, content: `•	 Escalabilidad: Permite el manejo de cargas elevadas gracias a su distribución del trabajo en sistemas grandes.`},
            
            
        ]
    },

    {
        id: 21,
        title: "Interacciones entre procesos dentro de la concurrencia.",
        content: [
            
            { type: ContentTypes.Text, content: `Comunicación directa: aquí los procesos pueden intercambiar información de forma directa sin la necesidad de un intermediario. Esto se logra típicamente a través de variables compartidas en la memoria o mediante llamadas de procedimiento entre procesos.`},
            { type: ContentTypes.Text, content: `Comunicación indirecta: Aquí los procesos se comunican a través de un intermediario. Esto puede ser un sistema de mensajes, un gestor de eventos o cualquier otro mecanismo que facilite la transferencia de información entre procesos`},
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img7.png") },
            { type: ContentTypes.Text, content: `•	Sincronización: Se coordina el orden de ejecución entre procesos y garantizar la consistencia de los datos compartidos. Se utilizan diversos mecanismos de sincronización, como semáforos, mutex (exclusión mutua), barreras y variables de condición, para evitar condiciones de carrera y garantizar la integridad de los datos compartidos.`},
            { type: ContentTypes.Text, content: `•	Compartición de recursos: Los procesos pueden compartir recursos como memoria, archivos o dispositivos de E/S. Sin embargo, es fundamental gestionar el acceso concurrente a estos recursos para evitar conflictos y corrupción de datos.`},
            { type: ContentTypes.Text, content: `•	Cooperación: Aquí los procesos colaboran para lograr un objetivo común. Esto puede implicar dividir una tarea en subprocesos que se ejecutan de manera concurrente y se coordinan entre sí para completar la tarea de manera eficiente.`},
            
            
        ]
    },

    {
        id: 22,
        title: "Modelo de Programación Concurrente en Linux",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img8.png") },
            { type: ContentTypes.Text, content: `•	Modelo de Hilos (Threads): Linux soporta hilos de ejecución como parte de su modelo de programación concurrente. Los hilos permiten la ejecución concurrente dentro de un proceso, compartiendo recursos como la memoria y el espacio de direcciones.`},
            { type: ContentTypes.Text, content: `•	Modelo de Actores: Si bien Linux en sí mismo no implementa directamente el modelo de actores, es posible desarrollar aplicaciones basadas en actores utilizando bibliotecas y herramientas disponibles en Linux, como libevent, libuv o Akka.`},
        ]
    },

    {
        id: 23,
        title: "Ventajas de la Concurrencia en Linux",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img8.png") },
            { type: ContentTypes.Text, content: `•	Mejora del Rendimiento: Linux aprovecha eficientemente los recursos de hardware multi-núcleo y multiprocesador, lo que permite una mejor utilización de la capacidad de procesamiento y, por lo tanto, un rendimiento mejorado.`},
            { type: ContentTypes.Text, content: `•	Aumento de la Capacidad de Respuesta: La concurrencia en Linux permite que múltiples tareas se ejecuten simultáneamente, lo que contribuye a una mayor capacidad de respuesta del sistema ante las solicitudes de los usuarios.`},
            { type: ContentTypes.Text, content: `•	Mejor Utilización de Recursos: Linux gestiona eficientemente la concurrencia, permitiendo la ejecución concurrente de múltiples aplicaciones y servicios sin comprometer el rendimiento ni la estabilidad del sistema.`},
        ]
    },

    {
        id: 24,
        title: "Tipos de Interacciones entre Procesos en Linux",
        content: [
            { type: ContentTypes.Image, content: require("../../assets/activities/activity-two/img8.png") },
            { type: ContentTypes.Text, content: `•	Comunicación Directa: Linux ofrece mecanismos para la comunicación directa entre procesos, como pipes, sockets (por ejemplo, TCP/IP y UDP), señales, y colas de mensajes. Estos permiten a los procesos intercambiar información de manera explícita.`},
            { type: ContentTypes.Text, content: `•	Comunicación Indirecta: La compartición de memoria en Linux permite la comunicación indirecta entre procesos a través de estructuras de datos compartidas en memoria, como memoria compartida (shared memory), archivos mapeados en memoria (memory-mapped files), y variables globales.`},
            { type: ContentTypes.Text, content: `•	Sincronización: Linux proporciona mecanismos de sincronización como semáforos, mutex (exclusión mutua), variables de condición y locks para garantizar un acceso seguro y ordenado a recursos compartidos entre procesos.`},
            { type: ContentTypes.Text, content: `•	Compartición de Recursos: En Linux, los procesos pueden compartir recursos como archivos, dispositivos de E/S y segmentos de memoria. La compartición de recursos se gestiona cuidadosamente a través de mecanismos de sincronización para evitar condiciones de carrera y garantizar la integridad de los datos.`},
            { type: ContentTypes.Text, content: `•	Cooperación: Los procesos en Linux cooperan entre sí para realizar tareas complejas divididas en unidades más pequeñas. Pueden comunicarse, sincronizarse y compartir recursos para lograr objetivos comunes de manera eficiente.`},
            
        ]
    },
];


