function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola', nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios', nombre);
        otroCallback(nombre);
    }, 1000)
}

console.log('Iniciando proceso ...');
hola('Ludwing', function () {
    adios('Ludwing', function () {
        console.log('Terminando proceso');
    })
});