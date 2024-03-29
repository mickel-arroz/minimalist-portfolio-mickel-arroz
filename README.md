# Curriculum Vitae Minimalista

Este es un proyecto de un curriculum vitae minimalista donde todos sus campos se llenan mediante un único esquema de JSON. Se han aplicado propiedades de estilos que permiten que el currículum sea responsive y se adapte a distintos formatos de pantallas para mostrar la información correctamente.

## Validación y Adaptabilidad

Se ha validado para cada sección qué campos se encuentran sin contenido (null), y se han tomado medidas para evitar mostrar dichos campos por pantalla o para que la estructura del portfolio se muestre correctamente.

## Uso de Elementos Records

Se emplearon elementos de tipo Records para manipular más fácilmente los iconos para cada elemento que los precise. En caso de no tener un icono asociado al valor del elemento que requiere uno, se mostrará un icono genérico establecido. Todos los iconos se encuentran en formato SVG para adaptarse eficientemente al redimensionamiento.

## Media Query para Impresión

Se aplicó una media query para modificar la apariencia de la página en caso de que se seleccione imprimir la página (o CTRL + P), para que los iconos de botón desaparezcan y se muestre en su lugar el texto de interés de dicho botón, como el URL.

## Integración de Librería Ninja Keys Demo

Para integrar una paleta de comandos o atajos, se incorporó la librería "Ninja Keys Demo", la cual trabaja con Vanilla JS. Esta permite fácilmente crear una interfaz de atajos personalizados en la página, como lo son: Imprimir, ir a los enlaces de redes sociales, proyectos, entre otros. Puedes encontrar la documentación de la librería en [este enlace](https://github.com/ssleptsov/ninja-keys).

## Lenguajes y Frameworks Utilizados

- HTML
- CSS
- JavaScript
- ASTRO 4.0

## Otras Tecnologías Empleadas

- Git y GitHub para el control de versiones
- Vercel para el despliegue (deploy)

¡Gracias por revisar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.

Agradecimientos a Midudev, por su tutorial para iniciar este proyecto.
