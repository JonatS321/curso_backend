const operacion = async (num1: number, num2: number, funcionString: string) => {
    let calculando = new Promise((resolve, reject) => {
        let resultado;
        if (funcionString === "restar") {
            import("./restar").then(
                (value) =>
				resolve (resultado = new value.Restar(num1, num2).resultado())
            );
        } else if (funcionString === "sumar") {
            import("./sumar").then(
                (value) => resolve (resultado = new value.Sumar(num1, num2).resultado())
            );
        } else if (funcionString === "multiplicar") {
            import("./multiplicar").then(
                (value) =>
				resolve (resultado = new value.Multiplicar(num1, num2).resultado())
            );
        } else if (funcionString === "dividir") {
            import("./dividir").then(
                (value) =>
                    resolve (resultado = new value.Dividir(num1, num2).resultado())
            );
        } else {
			reject(`${funcionString} NO ES UNA FUNCION VALIDA`)
		}
    });
    calculando.then((resultado) =>
        console.log(
            `Resultado de ${funcionString} ${num1} y ${num2} es: `,
            resultado
        )
    ).catch(error => console.error(error));
};

const operaciones = async () => {
    await operacion(10, 5, "sumar");
    await operacion(10, 5, "restar");
    await operacion(10, 5, "multiplicar");
    await operacion(10, 5, "dividir");
    await operacion(10, 5, "potenciar");
};

operaciones();
