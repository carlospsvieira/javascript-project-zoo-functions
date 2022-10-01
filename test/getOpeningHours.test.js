const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('verifies whether parameter exists, if not then return object of days/hours', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('verifies if its Monday 9AM when zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });

  it('verifies if its Tuesday 9AM when zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toStrictEqual(expected);
  });

  it('verifies if its Wednesday 9PM when zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });

  it('verifies whether day has a valid format, if not then returns not valid', () => {
    const expected = 'The day must be valid. Example: Monday';
    // Jest doc: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow(expected);
  });

  it('verifies if abbreviation is correct', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(expected);
  });

  it('verifies if hour represents a number', () => {
    const expected = 'The hour should represent a number';
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(expected);
  });

  it('verifies if hours are between 0 and 12', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow(expected);
  });

  it('verifies if minutes are between 0 and 59', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow(expected);
  });
});
