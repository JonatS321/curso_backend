const mostrarPalabras = (text, callback, interval = 1000) => {
    let words = text.split(" ");
    let index = 0;
    const intervalId = setInterval(() => {
        console.log(words[index]);
        index++;
        if (index === words.length) {
            callback(words.length);
            clearInterval(intervalId);
        }
    }, interval);
};

(() => {
    let total_words = 0;
    mostrarPalabras("UNO DOS TRES", (parcial_words) => {
        total_words += parcial_words;
        mostrarPalabras(
            "CUATRO CINCO SEIS",
            (parcial_words) => {
                total_words += parcial_words;
                mostrarPalabras(
                    "SIETE OCHO NUEVE",
                    (parcial_words) => {
                        total_words += parcial_words;
                        console.log("proceso completo");
                        console.log(total_words);
                    },
                    250
                );
            },
            500
        );
    });
})();
