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
        'SFH',
        'SHFH',
        'SHPH',
        'SHPHH',
        'SPH',
        'SPHH',
      ]);
    });

    test('Transcribe word with non-hebrew letters', () => {
      expect(e.transcribeHebrewWord('abc')).toEqual([]);
    });
  });
});
