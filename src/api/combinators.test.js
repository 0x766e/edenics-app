import * as c from './combinators';

describe('Combinatory functions', () => {
  describe('permutations', () => {
    test('empty', () => {
      expect(c.permutations('').sort()).toEqual([].sort());
    });

    test('1 element', () => {
      expect(c.permutations('a').sort()).toEqual(['a'].sort());
    });

    test('2 elements', () => {
      expect(c.permutations('ab').sort()).toEqual(['ab', 'ba'].sort());
    });

    test('3 elements', () => {
      expect(c.permutations('abc').sort()).toEqual(
        ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
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
