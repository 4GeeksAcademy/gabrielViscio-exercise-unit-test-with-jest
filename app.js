// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"]; // Convertir dólares a euros
    let yen = Math.floor(euros * oneEuroIs["JPY"]); // Convertir euros a yenes
    return yen;
}

function fromEuroToDollar(euros) {
    let dollars = Math.floor(euros * oneEuroIs["USD"]);
    return dollars;
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"]; // Convertir yenes a euros
    let pounds = Math.floor(euros * oneEuroIs["GBP"]); // Convertir euros a libras
    return pounds;
}
console.log(fromDollarToYen(50)),
 console.log(fromEuroToDollar(5)),
 console.log(fromYenToPound(1000)),
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs };