[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JJmef63O)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20166451)

Contexto del Proyecto: E-commerce de Componentes de PC

Integrantes: Valentina Fuenzalida y Tomás González

Contexto del proyecto
La compra de componentes de PC puede ser muy complicada para personas que no estén
familiarizadas con el tema, ya que la compatibilidad entre las piezas es muy importante para
el correcto funcionamiento de un computador. Está claro que sería útil para muchas
personas poder informarse, visualizar y validar la compatibilidad de su futuro PC antes de
comprarlo, asegurando una compra que cumpla con las necesidades y requerimientos de
cada usuario.

Solución tecnológica
Nuestra solución es un sitio de e-commerce, que tendría funcionalidades básicas
como catálogo, carrito de compras, y pasarela de pagos. 
El proyecto se realizará con HTML, CSS, y JavaScript. Y para visualizar la compatibilidad de componentes 
utilizaremos un configurador Interactivo (2D): La interfaz permitirá al usuario seleccionar componentes
de una lista y verlos representados en un diseño plano, como si fuera un esquema o una tarjeta de producto.
Cuando el usuario elija un componente, el sistema llamará al microservicio de compatibilidad y,
basándose en la respuesta, actualizará la interfaz para informar sobre el estado de la compatibilidad.

Arquitectura del proyecto
La arquitectura de microservicios se dividirá en las siguientes áreas para optimizar el
rendimiento y la gestión:

● Microservicio de Productos: Almacenará y gestionará el catálogo de productos,
incluyendo detalles, precios, y la información necesaria para el configurador.

● Microservicio de Compatibilidad: Este servicio es clave. Recibirá la selección de
componentes del usuario y, basándose en reglas predefinidas, validará si son
compatibles, devolviendo un resultado positivo o una alerta.

● Microservicio de Carrito y Pagos: Manejará la funcionalidad del carrito de
compras, el cálculo de totales y la integración con una pasarela de pagos simulada.

● Microservicio de Autenticación/Perfil de Usuario: Permitirá a los usuarios guardar
sus configuraciones de PC, ver su historial de compras y gestionar su información
personal.

El despliegue en la nube se podría realizar utilizando contenedores Docker para cada
microservicio, orquestados por Kubernetes en Amazon Elastic Kubernetes Service (EKS). Esto facilita la
gestión de la carga y el escalado horizontal.
