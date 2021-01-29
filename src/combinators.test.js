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
});
