import * as f from './filters';

describe('Filter functions', () => {
  describe('filterOut', () => {
    test('filter some', () => {
      expect(
        f.filterOut(['a', '1', 'b', '22', 'c', '333'], ['1', '22', '333']),
      ).toEqual(['a', 'b', 'c']);
    });

    test('filter all', () => {
      expect(f.filterOut(['1', '22', '333'], ['1', '22', '333'])).toEqual([]);
    });
  });
});
