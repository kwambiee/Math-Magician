import calculate from '../logic/calculate';

describe('test calculate function', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('test adding numbers', () => {
    let result = calculate(obj, '4');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('9');
  });

  test('test substracting numbers', () => {
    let result = calculate(obj, '4');
    result = calculate(result, '-');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('-1');
  });

  test('multiplication of two numbers', () => {
    let result = calculate(obj, '4');
    result = calculate(result, 'x');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('20');
  });

  test('test dividing numbers', () => {
    let result = calculate(obj, '10');
    result = calculate(result, '÷');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('2');
  });

// Testing the reminder of  
  test('test remainder of two numbers', () => {
    let result = calculate(obj, '11');
    result = calculate(result, '%');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('1');
  });
});
