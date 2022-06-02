import operate from '../logic/operate';

describe('testing operations', () => {
  const one = 2;
  const two = 4;
  test('Add two numbers', () => {
    expect(operate(one, two, '+')).toBe('6');
  });

  test('Subtract two numbers', () => {
    expect(operate(two, one, '-')).toBe('2');
  });

  test('Multiply two numbers', () => {
    expect(operate(one, two, 'x')).toBe('8');
  });

  test('Divide two numbers', () => {
    expect(operate(one, two, '÷')).toBe('0.5');
  });

  test('Remainder of division of two numbers', () => {
    expect(operate(two, one, '%')).toBe('0');
  });
});
