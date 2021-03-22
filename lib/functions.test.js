const { getName, copyAndPush,  } = require('./functions');

describe ('getName function', () => {
  it('returns name property of object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});

describe ('copyAndPush function', () => {
  it('returns a new array after copying given array and pushing a value to it', () => {
    const numbers = [1, 2, 3];    
    const newArray = copyAndPush(numbers, 4);

    expect(newArray).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});