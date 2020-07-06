function hola(nombre, miCallback) {
	setTimeout(function () {
		console.log('Hola', nombre);
		miCallback(nombre);
	}, 1000)
}

function hablar(callbackHablar) {
	setTimeout(function () {
		console.log('Bla bla bla ...');
		callbackHablar();
	}, 1000)
}

function adios(nombre, otroCallback) {
	setTimeout(function () {
		console.log('Adios', nombre);
		otroCallback(nombre);
	}, 1000)
}

// --
// console.log('Iniciando proceso ...');
// hola('Ludwing', function () {
// 	hablar(function () {
// 		hablar(function () {
// 			hablar(function () {
// 				adios('Ludwing', function () {
// 					console.log('Terminando proceso');
// 				})
// 			})
// 		});
// 	});
// });

// -- Simplificar el codigo anterior

function conversacion(nombre, veces, callback) {
	if (veces > 0) {
		hablar(function () {
			conversacion(nombre, --veces, callback)
		});
	} else {
		adios(nombre, callback);
	}
}

console.log('Iniciando proceso ...');
hola('Ludwing', function (nombre) {
	conversacion(nombre, 3, function () {
		console.log('Proceso terminado');
	});
})