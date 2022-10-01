const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifies whether the parameter is undefined, if so should return undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });

  it('verifies if type of parameter is not a string, should return an error message', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });

  it('verifies whether it returns the right number of elephants', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('verifies whether it ruturns the right name of elephants', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('verifies the average age of elephants', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('verifies elephants location', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });

  it('verifies elephants popularity', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeGreaterThanOrEqual(expected);
  });

  it('verifies availability of elephants on weekdays', () => {
    const actual = handlerElephants('availability');
    const expected = ['Monday'];
    expect(actual).not.toContain(expected);
  });

  it('verifies whether a passed string has functionality, if not then returns "null"', () => {
    const actual = handlerElephants('Chico Bento');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
