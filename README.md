# API NodePop
## Cargar la Base de datos
Es necesario inicializar la Base de datos que cargará una colección de documentos necesaria para el funcionamiento de la aplicación.

Para esto utilizamos el siguiente comando 

`npm run installDB`
## Inicializar servidor

Para iniciar la aplicación lo podemos hacer de dos formas: 

1. En modo desarrollo, para ello usaremos:

`npm run dev`

2. En modo producción, usamos: 

`npm start`

##  Lista de Anuncios
La ruta / nos permitirá mostrar en el Front-end de nuestra aplicación un listado de todos los anuncios registrados en la base de datos MongoDB.

##  Listado de anuncios con filtros 

La ruta /apiv1/anuncios nos permitirá consultar, paginar, y filtrar datos de todos los anuncios que tenemos en la Base de datos de nuestra aplicación.

##  Paginar anuncios



##  Filtrar anuncios por tag

Para aplicar un filtrado por tag podemos utilizar la siguiente ruta teniendo en cuenta que nos filtrará todos aquellos anuncios que contenga la etiqueta 'mobile'.

`http://localhost:3000/apiv1/anuncios?tag=mobile`

##  Filtrar por tipo de anuncio (venta)


##  Filtrar por precio

Para aplicar un filtrado por precio podemos diferentes variables.

Algunos de los ejemplos: 

1. Filtrar aquellos anuncios que contenga un precio entre dos valores. Por ejemplo: 10 - 40

`http://localhost:3000/anuncios?precio=10-40`

2. Filtrar aquellos anuncios que contenga un precio <strong>mayor</strong> que el valor indicado. Por ejemplo 10-

`http://localhost:3000/anuncios?precio=10-`

3. Filtrar aquellos anuncios que contenga un precio <strong>menor</strong>que el valor indicado. Por ejemplo -50

`http://localhost:3000/anuncios?precio=-50`


4. Filtrar aquellos anuncios que contenga un precio <strong>exacto</strong>que el valor indicado. Por ejemplo =40

`http://localhost:3000/anuncios?precio=40`

##  Rutas API

La ruta /apiv1/anuncios en nuestra API nos permitirá consultar datos de todos los anuncios que tenemos en la Base de datos de nuestra aplicación 

`http://localhost:3000/apiv1/anuncios`


##  Get /apiv1/anuncios/tags - Mostrar Listado tags 
Nos devuleve un listado con las etiquetas existentes en los anuncios de nuestra apliación.

### POST /api/anuncios - Crear Anuncido

`http://localhost:3000/apiv1/anuncios`

Esta petición nos permite crear un nuevo anuncio y queda guardado en la base de datos.



## Inicializar Base de datos
./bin/mongod --dbpath ./data/db


