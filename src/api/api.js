import * as edenic from './edenic';

export default {
  transcription: {
    fromHebrew(word) {
      return Promise.resolve(edenic.transcribeHebrewWord(word));
    },
  },
  vowels: {
    insertAll(word) {
      return Promise.resolve(edenic.insertVowels(word));
    },
  },

  shift: {
    shiftAll(word) {
      return Promise.resolve(['shift1', 'shift2', 'shift3']);
    },
  },

  metathesis: {
    scramble(word) {
      return Promise.resolve(['scramble1', 'scramble2', 'scramble3']);
    },
  },

  nasalization: {
    insertAll(word) {
      return Promise.resolve([
        'nasalization1',
        'nasalization2',
        'nasalization3',
      ]);
    },
  },
};
