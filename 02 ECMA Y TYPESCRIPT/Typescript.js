import ("./sumar.js").then((value) => {
	console.log(value.sumar(5,1));
});
console.log("--------------------")

import ("./restar.js").then((value) => {
	console.log(value.restar(5,1));
});

//const funcion_restar =  import("./restar.js");
//
//console.log(funcion_restar.restar())

//const algo = await import ("./multiplicar");
//console.log(algo.multiplicar(5,1))


function operacion (numero1, numero2, nombre_operacion)  {
	let promise = new Promise ((resolve, reject) => {
		if (nombre_operacion in operaciones){
			(import ("./restar.js").then((value) => {
				resolve(console.log(value.restar(5,1)));
			}))
		}
		else (
			console.log("NO SE ENCUENTRA ESA OPERACION DISPONIBLE")
		)
	})
};

operacion(5,1,"restar")