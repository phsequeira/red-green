const { getName } = require('./functions');

describe ('getName function', () => {
  it('returns name property of object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});

