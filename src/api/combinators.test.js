import * as c from './combinators';

describe('Combinatory functions', () => {
  describe('permutations', () => {
    test('empty', () => {
      expect(c.permutations(null)).toEqual([]);
      expect(c.permutations([])).toEqual([]);
    });

    test('1 element', () => {
      expect(c.permutations(['a'])).toEqual([['a']]);
    });

    test('2 elements', () => {
      expect(c.permutations(['a', 'b']).sort()).toEqual(
        [
          ['a', 'b'],
          ['b', 'a'],
        ].sort(),
      );
    });

    test('n elements', () => {
      expect(c.permutations(['a', 'b', 'c']).sort()).toEqual(
        [
          ['a', 'b', 'c'],
          ['a', 'c', 'b'],
          ['b', 'a', 'c'],
          ['b', 'c', 'a'],
          ['c', 'a', 'b'],
          ['c', 'b', 'a'],
        ].sort(),
      );
    });
  });

  describe('appendPossibilities', () => {
    test('Empty array and empty possibilities', () => {
      expect(c.appendPossibilities([], [])).toEqual([]);
      expect(c.appendPossibilities(null, null)).toEqual([]);
    });

    test('Empty array with possibilities', () => {
      expect(c.appendPossibilities(null, ['1', '2', '3'])).toEqual([
        ['1'],
        ['2'],
        ['3'],
      ]);
      expect(c.appendPossibilities([], ['1', '2', '3'])).toEqual([
        ['1'],
        ['2'],
        ['3'],
      ]);
    });

    test('Empty possibilities', () => {
      expect(c.appendPossibilities(['a', 'b', 'c'], [])).toEqual([
        'a',
        'b',
        'c',
      ]);
      expect(c.appendPossibilities(['a', 'b', 'c'], null)).toEqual([
        'a',
        'b',
        'c',
      ]);
    });

    test('Array and possibilities', () => {
      expect(c.appendPossibilities(['a', 'b', 'c'], ['1', '2', '3'])).toEqual([
        ['a', 'b', 'c', '1'],
        ['a', 'b', 'c', '2'],
        ['a', 'b', 'c', '3'],
      ]);
    });
  });

  describe('appendGeneratedPossibilities', () => {
    test('Empty array', () => {
      expect(c.appendGeneratedPossibilities([], (f) => [f])).toEqual([]);
      expect(c.appendGeneratedPossibilities(null, (f) => [f])).toEqual([]);
    });

    test('Empty possibilities', () => {
      expect(c.appendGeneratedPossibilities(['a'], (f) => [])).toEqual([]);
      expect(c.appendGeneratedPossibilities(['a'], (f) => null)).toEqual([]);
    });

    test('Non empty array with possibilities', () => {
      const generator = (letter) => [
        letter.toUpperCase().charCodeAt(0).toString(),
        letter.toLowerCase().charCodeAt(0).toString(),
      ];

      expect(
        c.appendGeneratedPossibilities(['a', 'b'], generator).sort(),
      ).toEqual([
        ['65', '66'],
        ['65', '98'],
        ['97', '66'],
        ['97', '98'],
      ]);
    });
  });

  describe('subsets', () => {
    test('empty array', () => {
      expect(c.subsets([])).toEqual([]);
      expect(c.subsets(null)).toEqual([]);
    });

    test('non-empty array', () => {
      expect(c.subsets(['a', 'b']).sort()).toEqual([
        [],
        ['a'],
        ['b'],
        ['b', 'a'],
      ]);
    });
  });

  describe('permutateInsertions', () => {
    test('Empty array', () => {
      expect(c.permutateInsertions([], 'a')).toEqual([]);
      expect(c.permutateInsertions(null, 'a')).toEqual([]);
    });

    test('Non-Empty array', () => {
      expect(c.permutateInsertions(['a', 'b'], 'x').sort()).toEqual([
        ['a', 'b'],
        ['a', 'b', 'x'],
        ['a', 'x', 'b'],
        ['a', 'x', 'b', 'x'],
        ['x', 'a', 'b'],
        ['x', 'a', 'b', 'x'],
        ['x', 'a', 'x', 'b'],
        ['x', 'a', 'x', 'b', 'x'],
      ]);
    });
  });

  describe('insertAllPossibleCombinations', () => {
    test('Fully loaded', () => {
      expect(c.insertAllPossibleCombinations(['a, b'], ['1', '2'])).toEqual([]); //TODO
    });
  });
});
