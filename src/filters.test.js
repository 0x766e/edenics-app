import * as f from './filters';

describe('Filter functions', () => {
  describe('filterOut', () => {
    test('filter some', () => {
      expect(
        f.filterOut('a1b2c3d333e222f111g123h321', ['1', '2', '3']),
      ).toEqual('abcdefgh');
    });

    test('filter all', () => {
      expect(f.filterOut('123321', ['1', '2', '3'])).toEqual('');
    });
  });
});
