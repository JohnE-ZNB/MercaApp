# MercaApp
## _Una APP para de administración de productos_

Link de la aplicación: "http://mercaapp.web-host.s3-website-us-east-1.amazonaws.com" desplegado en un Buckets AWS S3

## Caracteristias

- Consultar todos los productos
- Ver un producto más detallado
- Admin: Ver listado de productos con opción de editar o eliminar
- Admin: Crear un producto

## Tecnología

Dillinger uses a number of open source projects to work properly:

- [Angular CLI](https://github.com/angular/angular-cli) - versión 12.2.4.!
- [Material Angular](https://github.com/angular/components) version 12.2.4 
- [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid) version 6.3.1.

## Installation

Angular
```sh
npm install -g @angular/cli
```
Material Angular y adicional un Schematics para navegación

```sh
ng add @angular/material
ng generate @angular/material:navigation <component-name>
```
Flexboxgrid

```sh
npm i flexboxgrid --save
```
Se debe agregar dentro de angular.json dentro de styles la siguiente línea de código:
"./node_modules/flexboxgrid/dist/flexboxgrid.min.css",

## Desarrollo

Inicio de servidor local "http://localhost:4200/"

```sh
ng serve
```

## construcción de la aplicación

Para producción angular:

```sh
ng  build --prod
```

## License

MIT

**Aplicación como prueba técnica!**