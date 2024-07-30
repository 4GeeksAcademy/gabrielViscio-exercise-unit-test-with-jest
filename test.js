const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('10 dólares deben ser aproximadamente 1460 yenes', () => {
    expect(fromDollarToYen(10)).toEqual(1462);
});

test('5 euros deben ser 5 dólares', () => {
    expect(fromEuroToDollar(5)).toEqual(5);
});

test('1000 yenes deben ser aproximadamente 5 libras', () => {
    expect(fromYenToPound(1000)).toEqual(5);
});
test('50 dólares deben ser aproximadamente 7313 yenes', () => {
    expect(fromDollarToYen(50)).toEqual(7313);
});

test('20 euros deben ser 21 dólares', () => {
    expect(fromEuroToDollar(20)).toEqual(21);
});

test('5000 yenes deben ser aproximadamente 27 libras', () => {
    expect(fromYenToPound(5000)).toEqual(27);
});

test('0 dólares deben ser 0 yenes', () => {
    expect(fromDollarToYen(0)).toEqual(0);
});

test('100 euros deben ser 107 dólares', () => {
    expect(fromEuroToDollar(100)).toEqual(107);
});

test('2000 yenes deben ser aproximadamente 11 libras', () => {
    expect(fromYenToPound(2000)).toEqual(11);
});