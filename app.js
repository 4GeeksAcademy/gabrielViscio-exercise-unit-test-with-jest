// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };



// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"]; // Convertir dólares a euros
    let yen = euros * oneEuroIs["JPY"];     // Convertir euros a yenes
    return yen;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];    // Convertir yenes a euros
    let pounds = euros * oneEuroIs["GBP"]; // Convertir euros a libras
    return pounds;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs };