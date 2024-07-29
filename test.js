// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//para convertir dolares a yenes
//3 pruebas por función

// Tests
test('Convierte 10 dólares a yenes', () => {
    const result = fromDollarToYen(10);
    expect(result).toBeCloseTo(1462.62, 2);
});

test('Convierte 0 dólares a yenes', () => {
    const result = fromDollarToYen(0);
    expect(result).toBe(0);
});

test('Convierte -5 dólares a yenes', () => {
    const result = fromDollarToYen(-5);
    expect(result).toBeCloseTo(-731.31, 2);
});

test('Convierte 10 euros a dólares', () => {
    const result = fromEuroToDollar(10);
    expect(result).toBeCloseTo(10.7, 2);
});

test('Convierte 0 euros a dólares', () => {
    const result = fromEuroToDollar(0);
    expect(result).toBe(0);
});

test('Convierte -5 euros a dólares', () => {
    const result = fromEuroToDollar(-5);
    expect(result).toBeCloseTo(-5.35, 2);
});

test('Convierte 1565 yenes a libras', () => {
    const result = fromYenToPound(1565);
    expect(result).toBeCloseTo(8.7, 2);
});

test('Convierte 0 yenes a libras', () => {
    const result = fromYenToPound(0);
    expect(result).toBe(0);
});

test('Convierte -1565 yenes a libras', () => {
    const result = fromYenToPound(-1565);
    expect(result).toBeCloseTo(-8.7, 2);
});