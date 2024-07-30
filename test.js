const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('10 dólares deben ser aproximadamente 1460 yenes', () => {
    expect(fromDollarToYen(10)).equal(1462);
});

test('5 euros deben ser 5 dólares', () => {
    expect(fromEuroToDollar(5))git equal(5);
});

test('1000 yenes deben ser aproximadamente 5 libras', () => {
    expect(fromYenToPound(1000)).equal(5);
});