import * as edenic from './edenic';

export default {
  transcription: {
    fromHebrew(word) {
      return Promise.resolve(edenic.transcribeHebrewWord(word));
    },
  },
  vowels: {
    inserAll(word) {
      return Promise.resolve(edenic.transcribeHebrewWord(word));
    },
  },
};
