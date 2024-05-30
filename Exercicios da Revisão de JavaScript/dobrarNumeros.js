const numeros = [1, 2, 3, 4, 5];

function dobrarNumeros(lista) {
    return lista.map(function (numero) {
        return numero * 2;
    });
}

const numerosDobrados = dobrarNumeros(numeros);
console.log("Números originais:", numeros);
console.log("Números dobrados:", numerosDobrados);