## Instalaciones:
- nodemon: npm i -g nodemon
- pm2: npm i -g pm2

## Variables de entorno
Declarar una variable de entorno NOMBRE:
"Antes de ejecutar" NOMBRE=Luis node main.js
let nombre = process.env.NOMBRE

## Ejecución nodemon y pm2
# nodemon: 
nodemon main.js

# pm2:
pm2 start main.js
