// Variables de entorno: 
// Ale ejecutar: NOMBRE=Ludwing WEB=miweb.com node entorno.js
let nombre = process.env.NOMBRE || 'Anonimo';
let web = process.env.WEB || 'Sin web';

console.log('Hola:', nombre);
console.log('Mi web es:', web);