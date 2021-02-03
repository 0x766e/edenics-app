import * as c from './combinators';

describe('Combinatory functions', () => {
  describe('permutations', () => {
    test('empty', () => {
      expect(c.permutations('')).toEqual([]);
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

    test('3 elements', () => {
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

  describe('appendPossibilitiese', () => {
    test('Using word and possibilities', () => {
      expect(c.appendPossibilities('abc', ['1', '2', '3'])).toEqual([
        'abc1',
        'abc2',
        'abc3',
      ]);
    });

    test('Empty word and possibilities', () => {
      expect(c.appendPossibilities('', [])).toEqual([]);
    });

    test('Empty word', () => {
      expect(c.appendPossibilities('', ['1', '2', '3'])).toEqual([
        '1',
        '2',
        '3',
      ]);
    });

    test('Empty possibilities', () => {
      expect(c.appendPossibilities('abc', [])).toEqual(['abc']);
    });
  });

  describe('appendPossibilitiesForLetters', () => {
    test('Empty word', () => {
      expect(c.appendPossibilitiesForLetters('', (f) => [f])).toEqual([]);
    });

    test('Non empty word', () => {
      const generator = (letter) => [
        letter.toUpperCase().charCodeAt(0).toString(),
        letter.toLowerCase().charCodeAt(0).toString(),
      ];

      expect(c.appendPossibilitiesForLetters('ab', generator).sort()).toEqual([
        '6566',
        '6598',
        '9766',
        '9798',
      ]);
    });
  });
});
