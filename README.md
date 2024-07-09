# Super Ticketing Frontend 

## Índice 📝

- [Descripción](#descripción-)
- [Instalación](#instalación-)
  - [Requisitos previos](#requisitos-previos)
  - [Instalación del proyecto](#instalación-del-proyecto)
- [Uso](#uso-)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías-)
- [Contribuición](#contribuición-)
  - [Convenciones del proyecto](#convenciones-del-proyecto)
- [Developers](#developers-)
- [Capturas de pantalla](#capturas-de-pantalla)
- [Despliegue del Proyecto](#Despliegue-del-Proyecto)

## Descripción 💡

Este proyecto tiene como objetivo desarrollar una aplicación web para monitorear y gestionar el estado de sequía en las Cuencas Internas de Cataluña. Basándose en una API pública, la aplicación permitirá obtener datos sobre el estado hidrológico y pluviométrico de las unidades de explotación y municipios, indicando las fechas en las que se han realizado cambios en estos estados.

<b>Funcionalidades Principales</b>:

-<b>Integración de API Pública</b>: Obtención de datos actualizados sobre sequía y almacenamiento en una base de datos interna.

-<b>CRUD Completo</b>: Creación, visualización, edición y eliminación de registros relacionados con los estados de sequía.

-<b>Frontend y Backend Independientes</b>: Desarrollo de una interfaz de usuario intuitiva y un backend robusto que se comuniquen eficazmente.
Tests Unitarios: Implementación de tests para asegurar la calidad y correcto funcionamiento de la aplicación.

<b>Objetivo del Proyecto</b>:
<br>
A través de este proyecto, buscamos contribuir a la conservación del medio ambiente y al bienestar social, proporcionando una herramienta útil y accesible para la gestión de recursos hídricos en Cataluña. La aplicación está diseñada para ser utilizada por autoridades locales, investigadores y ciudadanos interesados en el seguimiento de las condiciones de sequía, ayudando a tomar decisiones informadas y a promover la sostenibilidad.consumo de APIs.

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
## Uso ⌨️

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
├── src
|   ├── assets
│   ├── components/
│   │   ├── common
│   │   └── layout 
│   ├── config
│   ├── pages
│   ├── routes
│   ├── services
│   ├── App.css
│   ├── App.jsx
│   ├── home.jsx
│   ├── index.css
│   └── main.jsx
├── eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── jsconfig.json
├── tailwind.config.js
└── vite.config.js

```

- **public/:** Contiene los recursos estáticos del proyecto como imágenes, iconos y fuentes.
- **src/:** Contiene los archivos fuente de la aplicación.
  - **_components/:_** Contiene los componentes reutilizables de React.
  - **_config/:_** Contiene el arcihvo urls.js, que nos ayuda a dinamizar la llamada a la API.
  - **layout:** Carpeta que contiene las rutas de los dos layouts principales (homepage y tracker) de la aplicación.
  - **_pages:_** Carpeta que contiene las rutas a las páginas dinámicas de la aplicación.
  - **_routes:_** Dentro del que se encuentra index.jsx, que contiene la lógica de rutas de la aplicación.
  - **_services:_** Dentro del que se encuentra useApi.jsx con la llamada a la API reutilizada en todos los apartados de la aplicación.

## Tecnologías empleadas en Front 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.dev/)
- [Jest](https://jestjs.io/es-ES/)

Librerias utilizadas

- [Angular Material](https://material.angular.io/)




## Contribuición 💻


1. Haz fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature-name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature-name`.
5. Haz un pull request.

### Convención de codificación en Ticketing

# Visual Studio Code 🖥️

A la hora de crear código en nuestro editor de código tenemos  en cuenta los siguientes enunciados para un código legible, estructurado y ordenado tanto para los miembros del equipo como ojeadores del proyecto:

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



## Developers 👩‍💻

- [Alex Morell](https://github.com/alexmrtc)
- [Iván Vallejos](https://github.com/MegaDraconius)
- [Laura Benavides](https://github.com/LauraBenavides33)
- [Michely Paredes](https://github.com/Michely05)
- [Roger Esteve](https://github.com/alejandria1899)
- [Sara Jorja](https://github.com/MegaDraconius)

## Distribución y seguimiento de tareas con metodologías ágiles 👩‍💻

Para la gestión de nuestro proyecto, hemos utilizado Trello como nuestra herramienta principal, siguiendo la metodología Kanban para la distribución eficiente de tareas. Este enfoque nos ha permitido visualizar el flujo de trabajo, limitar la cantidad de trabajo en progreso y maximizar la eficiencia. Además, hemos seguido una serie de convenciones y mejores prácticas para garantizar la coherencia y la calidad en todo nuestro trabajo. Creemos que este enfoque estructurado y disciplinado ha sido fundamental para nuestro éxito hasta ahora y continuará guiándonos en nuestras futuras iniciativas

Incluyo un enlace a nuestro tablero de Trello para que puedan ver nuestra organización y gestión de tareas.[Trello Super Ticketing](https://trello.com/b/MYcpBsGx/super-ticketing)

## Mockup y Capturas de Pantalla 📸

Para poder realizar el proyecto nos basamos en el mockup realizado utilizando el método Brinstorming, en la que cada miembro del equipo pudo aportar sus conocimientos y poder sacar adelante una idea sencilla y práctica a la hora de llevar a cabo las tares que ofrece cada vista, como poder ver con claridad las futuras funcionalidas que implica.

El diseño se realizó utilizando Figma, una potente herramienta para diseñar páginas web y aplicaciones.

- Enlace a nuestro diseño con vistas tanto Desktop como movil. [Click para ver el diseño de Super Ticketing](https://www.figma.com/design/2cyVaHXcdHYMV2qA2jTqCn/TICKETING?node-id=0-1&t=heJXVE013X3I2MgA-0)


- Version Desktop 


- Version Mobile



## Despliegue del Proyecto 📽️

Desplegamos nuestra página usando Netlify, lo que nos ofrece hosting gratuito, integración continua, soporte para dominios personalizados y una fácil configuración directamente desde nuestros repositorios.

Además de las ventajas técnicas que ofrece Netlify, también lo seleccionamos por su compromiso con la sostenibilidad. Al ser una plataforma de alojamiento web ecológica, nos permite contribuir a la conservación del medio ambiente mientras desarrollamos y desplegamos nuestra página

- Enlace a la pagina de  [Ticketing]()



## Pendientes para futuros Sprints

Reconocemos que nuestro proyecto actual tiene un gran potencial para crecer y evolucionar. Aunque hemos logrado mucho, sabemos que hay características adicionales que podríamos implementar para mejorar aún más nuestro producto. Estas mejoras no se han realizado hasta ahora debido a limitaciones de tiempo y conocimientos técnicos. Sin embargo, estamos comprometidos con la mejora continua y planeamos adquirir las habilidades necesarias para implementar estas características en el futuro.

- [x] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
