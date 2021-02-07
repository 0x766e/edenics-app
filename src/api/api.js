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
};
