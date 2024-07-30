# Super Ticketing Frontend 

## Índice 📝

- [Descripción](#descripción-)
- [Developers](#developers-)
- [Tecnologías empleadas](#tecnologías-empleadas-en-el-front-)
- [Instalación](#instalación-)
  - [Requisitos previos](#requisitos-previos)
  - [Instalación del proyecto](#instalación-del-proyecto)
- [Como ejecutar en local](#como-ejecutar-en-local️)
- [Estructura del proyecto](#estructura-del-proyecto-)

- [Contribución](#contribución-)
  - [Convenciones del proyecto](#convención-de-codificaciónen-ticketing)

- [Distribución y seguimiento de tareas con metodologías ágiles](#distribución-y-seguimiento-de-tareas-con-metodologías-ágiles-)
- [Mockup y capturas del proyecto](#mockup-y-capturas-de-pantalla-)
- [Despliegue del Proyecto](#Despliegue-del-Proyect-)
- [Pendientes para futuros sprints](#Pendientes-para-futuros-Sprints-)
- [Special Thanks](#special-thanks-)

## Descripción 💡

Este proyecto tiene como objetivo desarrollar una aplicación web para monitorear y gestionar tickets, diseñada específicamente para el equipo de IT encargado del soporte técnico, proporcionando una solución eficiente y organizada.

- <b>Funcionalidades Principales:</b>
Comunicación Directa entre Frontend y Backend: La aplicación estará diseñada con una arquitectura donde el frontend y el backend se comunican directamente. El frontend interactuará con el backend para la creación, visualización, actualización y eliminación de tickets sin depender de APIs externas.

- <b>CRUD Completo:</b> Implementará un sistema completo de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar tickets de soporte técnico. Los usuarios podrán crear nuevos tickets, visualizar y buscar tickets existentes, editar detalles de tickets y eliminar aquellos que ya no sean necesarios.
- <b>Frontend y Backend Independientes: </b>El proyecto contará con una interfaz de usuario intuitiva y fácil de usar, y un backend robusto que manejará la lógica del negocio y el almacenamiento de datos. Ambos componentes estarán diseñados para operar de manera eficiente y comunicarse eficazmente a través de métodos internos de interacción.

- <b>Tests Unitarios:</b>Se realizarán pruebas unitarias para asegurar la calidad y el correcto funcionamiento de la aplicación. Esto incluirá pruebas para verificar el desempeño y la integridad de los componentes tanto del frontend como del backend, garantizando que cada parte del sistema funcione correctamente.

<b>Objetivo del Proyecto:</b>
El objetivo de este proyecto es proporcionar al equipo de soporte técnico una herramienta web completa para la gestión eficiente de tickets. La aplicación permitirá una gestión centralizada y optimizada de los tickets de soporte, facilitando la resolución de problemas, mejorando la comunicación interna y acelerando el tiempo de respuesta. Al implementar esta solución, buscamos mejorar la eficiencia del equipo de soporte técnico y la satisfacción de los usuarios finales al proporcionar una plataforma organizada y accesible para el seguimiento y resolución de tickets.




## Developers 👩‍💻


[<img src="https://avatars.githubusercontent.com/u/47445852?v=4" width=115><br><sub>Alex Morell</sub>](https://github.com/alexmrtc) |  [<img src="https://avatars.githubusercontent.com/u/162144774?v=4" width=115><br><sub>Laura Benavides</sub>](https://github.com/LauraBenavides33) |  [<img src="https://avatars.githubusercontent.com/u/171134273?v=4" width=115><br><sub>Roger Esteve</sub>](https://github.com/alejandria1899) |
| :---: | :---: | :---: |
[<img src="https://avatars.githubusercontent.com/u/146776685?v=4" width=115><br><sub>Michely Paredes</sub>](https://github.com/Michely05) |  [<img src="https://avatars.githubusercontent.com/u/162126428?v=4" width=115><br><sub>Iván Vallejos</sub>](https://github.com/MegaDraconius) |  [<img src="https://avatars.githubusercontent.com/u/162146662?v=4" width=115><br><sub>Sara Jorja</sub>](https://github.com/SaraJoLo) |


## Tecnologías empleadas en el Frontend 🔬

- IDE para el proyecto:

  - [![VSC - VSC](https://img.shields.io/static/v1?label=Visual+Studio+Code&message=Visual+Studio+Code&color=%2324adf3&logo=visual+studio)](https://code.visualstudio.com/)

- Gestor de paquetes:
  - [![Node JS - Node JS](https://img.shields.io/static/v1?label=Node+JS&message=Node+JS&color=%233f8a3e&logo=node)](https://nodejs.org/en)

- Tecnologías empleadas para el desarrollo del programa:

  - [![html 5 - html 5](https://img.shields.io/static/v1?label=html+5&message=html+5&color=%23e4552e&logo=html5)](https://developer.mozilla.org/es/docs/Glossary/HTML5)
  - [![Sass - Sass](https://img.shields.io/static/v1?label=Sass&message=Sass&color=%23bf4080&logo=sass)](https://sass-lang.com/)
  - [![TypeScript - TypeScript](https://img.shields.io/static/v1?label=TypeScript&message=TypeScript&color=%233178c6&logo=typescript)](https://www.typescriptlang.org/)
  - [![Angular - Angular](https://img.shields.io/badge/Angular-Angular-red?logo=angular)](https://angular.dev/)

- Tecnologías para realizar testing:

  - [![jest - jest](https://img.shields.io/static/v1?label=jest&message=jest&color=%23c7431e&logo=jest)](https://jestjs.io/es-ES/)
 

- Otras tecnologías utilizadas:

  - [![Angular Material - Angular Material](https://img.shields.io/static/v1?label=Angular+Material&message=Angular+Material&color=%23fdb14b&logo=angular+material)](https://material.angular.io/)



## Enlaces a los repositorios 📦

Enlace al Repositorio del Frontend:
https://github.com/MegaDraconius/super-ticketing-frontend

Enlace al Repositorio del Backend:
https://github.com/MegaDraconius/super-ticketing-backend


## Instalación 💾

### Requisitos previos

Instalar Node.js:
[Descargar Node.js](https://nodejs.org/)

### Instalación del proyecto

1. Clonar el repositorio:

```bash
 git clone https://github.com/MegaDraconius/super-ticketing-frontend
```

2. Instalar dependencias:

```bash
 pnpm install
```
## Como ejecutar en local⌨️

Para visualizar el proyecto en Local:

1. Ejecuta el servidor de desarrollo:

```bash
   ng serve 
```
```bash
   pnpm start
```

## Estructura del proyecto 📐

```plaintext
/
├── public
|   ├── images.jpg
|   └── images2.jpg
├── src
|   ├── app
|   |    ├── Components
|   |    |     ├── empty-ticket
|   |    |     ├── language-button
|   |    |     ├── layout
|   |    |     |     ├── header
|   |    |     |     └── layout
|   |    |     ├── report-button
|   |    |     ├── Table
|   |    |     |     ├── admin-table
|   |    |     |     └── user-table
|   |    |     └── ticketsForm
|   |    |           └── ticket-form
|   |    ├── Core
|   |    ├── Pages
|   |    |     ├── empty-ticket
|   |    |     ├── language-button
|   |    |     ├── layout
|   |    |     ├── empty-ticket
|   |    |     ├── language-button
|   |    |     ├── layout
|   |    |     └── ticketsForm
|   |    ├── Services
|   |    └── Shared
|   |        ├── Interfaces
|   |        └── Services
|   ├── environments
|   |    ├── environment.development.ts
|   |    └── environment.ts
│   ├── index.html
|   ├── style.scss
│   └── main.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.app.json
└── tsconfig.spec.json

```

- **public/:** Contiene los recursos estáticos del proyecto como imágenes, iconos y fuentes.
- **src/:** Contiene los archivos fuente de la aplicación.
  - **_components/:_** Contiene los componentes reutilizables de React.
  - **_config/:_** Contiene el arcihvo urls.js, que nos ayuda a dinamizar la llamada a la API.
  - **layout:** Carpeta que contiene las rutas de los dos layouts principales (homepage y tracker) de la aplicación.
  - **_pages:_** Carpeta que contiene las rutas a las páginas dinámicas de la aplicación.
  - **_routes:_** Dentro del que se encuentra index.jsx, que contiene la lógica de rutas de la aplicación.
  - **_services:_** Dentro del que se encuentra useApi.jsx con la llamada a la API reutilizada en todos los apartados de la aplicación.

## Contribución 💻


1. Haz fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature-name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature-name`.
5. Haz un pull request.

### Convención de codificación en Ticketing

# Visual Studio Code 🖥️

A la hora de crear código en nuestro editor de código tenemos  en cuenta los siguientes enunciados para un código legible, estructurado y ordenado tanto para los miembros del equipo como personal externo o apasionados de la programación:

- Naming en inglés.

```jsx
const myHeading = document.querySelector("h1");
```

- Usar Cammel Case. Ejemplo:

```jsx
const toCammelCase ()=>{
...
}
toCammelCase();
```

- Nombre de variables descriptivas y fáciles de leer.

```jsx
export class MenuComponent implements OnInit {
  private menuService = inject(MenuService);
  menu = this.menuService.menu;
  ...
  }
```

- Los métodos o funciones deben tener nombres de verbos o frases verbales como ‘*postPayment’, ‘deletePage’* o ‘*save*’.
- Las clases y objetos deben tener un nombre de un sustantivo o una frase nominal como *‘Customer’, ‘WikiPage’, ‘Account’* o ‘*AddressParser*’.
- Evitar palabras como *‘Manager’, ‘Processor’, ‘Data’* o *‘Info’* en el nombre de la clase. Un nombre de clase no debería ser un verbo.


## Distribución y seguimiento de tareas con metodologías ágiles 👩‍💻

Para la gestión de nuestro proyecto, hemos utilizado Trello como nuestra herramienta principal, siguiendo la metodología Kanban para la distribución eficiente de tareas. Este enfoque nos ha permitido visualizar el flujo de trabajo, limitar la cantidad de trabajo en progreso y maximizar la eficiencia. Además, hemos seguido una serie de convenciones y mejores prácticas para garantizar la coherencia y la calidad en todo nuestro trabajo. Creemos que este enfoque estructurado y disciplinado ha sido fundamental para nuestro éxito hasta ahora y continuará guiándonos en nuestras futuras iniciativas

Incluyo un enlace a nuestro tablero de Trello para que puedan ver nuestra organización y gestión de tareas.[Trello Super Ticketing](https://trello.com/b/MYcpBsGx/super-ticketing)

## Mockup y Capturas de Pantalla 📸

Para poder realizar el proyecto nos basamos en el mockup realizado utilizando el método Brainstorming, en la que cada miembro del equipo pudo aportar sus conocimientos y poder sacar adelante una idea sencilla y práctica a la hora de llevar a cabo las tares que ofrece cada vista, como poder ver con claridad las futuras funcionalidas que implica.

El diseño se realizó utilizando Figma, una potente herramienta para diseñar páginas web y aplicaciones.

- Enlace a nuestro diseño con vistas tanto Desktop como movil. [Click para ver el diseño de Super Ticketing](https://www.figma.com/design/2cyVaHXcdHYMV2qA2jTqCn/TICKETING?node-id=0-1&t=heJXVE013X3I2MgA-0)


- Version Desktop 

![Vista del programa sin tickets emitidos](/public/demo1.png)
![Vista para reportar una incidencia mediante formulario](/public/demo2.png)
![Vista del programa desde la vista Administrador para gestionar los tickets](/public/demo3.png)

- Version Mobile


![Vista del programa sin tickets emitidos](/public/mobileLogin.png)
![Vista del programa sin tickets emitidos](/public/mobile1.png)
![Vista para reportar una incidencia mediante formulario](/public/mobile2.png)
![Vista del programa desde la vista Administrador para gestionar los tickets](/public/mobile3.png)


## Despliegue del Proyecto 📽️

Desplegamos nuestra página usando Netlify, lo que nos ofrece hosting gratuito, integración continua, soporte para dominios personalizados y una fácil configuración directamente desde nuestros repositorios.

Además de las ventajas técnicas que ofrece Netlify, también lo seleccionamos por su compromiso con la sostenibilidad. Al ser una plataforma de alojamiento web ecológica, nos permite contribuir a la conservación del medio ambiente mientras desarrollamos y desplegamos nuestra página

- Enlace a la pagina de  [Ticketing]()



## Pendientes para futuros Sprints

Reconocemos que nuestro proyecto actual tiene un gran potencial para crecer y evolucionar. Aunque hemos logrado mucho, sabemos que hay características adicionales que podríamos implementar para mejorar aún más nuestro producto. Estas mejoras no se han realizado hasta ahora debido a limitaciones de tiempo y conocimientos técnicos. Sin embargo, estamos comprometidos con la mejora continua y planeamos adquirir las habilidades necesarias para implementar estas características en el futuro.


- [ ] Implementación de histórico en la vista detalle para la consulta de problemas pasados a la hora de responder al usuario.
- [ ] Realizar testing con más cobertura en los componentes, tanto unitarios como de integración.
- [ ] Mejorar el diseñor responsivo de algunos componentes.
- [ ] Añadir las funcionalidades de GitHub Actions para controlar el flujo de trabajo de forma óptima y siguiendo un patrón de trabajo estandarizado.
- [ ] Añadir un generador de plantillas para errores.
- [ ] Añadir las funcionalidades y la vista para poder generar informes y análisis de las incidencias obtenidas.
- [ ] Poder generar nuevos formularios personalizados acorde a las necesidades del administrador.
- [ ] Refactorización del código y la arquitectura para una vista más sencilla para los desarrolladores tanto para su mantenibilidad como para su funcionamiento.

## Special thanks 👥


- A nuestros compañeros, gracias por los momentos compartidos, por su dedicación y por el espíritu de equipo que nos llevó a superar cada desafío.

- A nuestros profesores, gracias por su guía, paciencia y sabiduría. Sin su apoyo, este proyecto no habría sido posible.
