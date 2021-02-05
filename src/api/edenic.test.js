import * as e from './edenic';

describe('edenic', () => {
  describe('isHebrewLetter', () => {
    test('Valid hebrew letter', () => {
      expect(e.isHebrewLetter('א')).toBeTruthy();
    });

    test('Non-hebrew letter', () => {
      expect(e.isHebrewLetter('A')).toBeFalsy();
    });
  });

  describe('transcribeHebrewLetter', () => {
    test('Letter with multiple options', () => {
      expect(e.transcribeHebrewLetter('ע').sort()).toEqual([
        'GH',
        '[A]',
        '[E]',
        '[I]',
        '[O]',
        '[U]',
      ]);
    });

    test('Letter with one option', () => {
      expect(e.transcribeHebrewLetter('י')).toEqual(['Y']);
    });

    test('Invalid letter', () => {
      expect(e.transcribeHebrewLetter('1')).toEqual([]);
    });
  });

  describe('transcribeHebrewWord', () => {
    test('Transcribe word with valid hebrew letters', () => {
      expect(e.transcribeHebrewWord('שפה').sort()).toEqual([
        ['S', 'F', 'H'],
        ['S', 'P', 'H'],
        ['S', 'PH', 'H'],
        ['SH', 'F', 'H'],
        ['SH', 'P', 'H'],
        ['SH', 'PH', 'H'],
      ]);
    });

    test('Transcribe word with non-hebrew letters', () => {
      expect(e.transcribeHebrewWord('abc')).toEqual([]);
    });
  });

  describe('insertVowels', () => {
    test('Valid word', () => {
      expect(e.insertVowels(['a', 'b'], ['1', '2'])).toEqual([
        ['a', 'b'],
        ['1', 'a', 'b'],
        ['a', '1', 'b'],
        ['1', 'a', '1', 'b'],
        ['a', 'b', '1'],
        ['1', 'a', 'b', '1'],
        ['a', '1', 'b', '1'],
        ['1', 'a', '1', 'b', '1'],
        ['a', 'b'],
        ['2', 'a', 'b'],
        ['a', '2', 'b'],
        ['2', 'a', '2', 'b'],
        ['a', 'b', '2'],
        ['2', 'a', 'b', '2'],
        ['a', '2', 'b', '2'],
        ['2', 'a', '2', 'b', '2'],
      ]);
    });
  });
});
