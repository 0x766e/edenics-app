import * as edenic from './edenic';

export default {
  analyze(word, filterCriteria = {}) {
    return new Promise((resolve) => {
      const { vowels, shifts, scramble, nasalization } = filterCriteria;
      let result = edenic.transcribeHebrewWord(word);

      if (shifts) {
        result = result.flatMap((w) => edenic.shiftLetters(w));
      }

      if (scramble) {
        result = result.flatMap((w) => edenic.scramble(w));
      }

      if (nasalization) {
        result = result.flatMap((w) => edenic.insertNasalization(w));
      }

      if (vowels) {
        result = result.flatMap((w) => edenic.insertVowels(w));
      }

      result = [...new Set(result)]
        .sort((a, b) =>
          a.join('').toLowerCase().localeCompare(b.join('').toLowerCase()),
        )
        .map((r) => [r, edenic.identifyTransformations(word, r)]);

      resolve(result);
    });
  },
};
