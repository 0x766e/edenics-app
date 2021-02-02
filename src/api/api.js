import * as edenic from './edenic';

export default {
  transcription: {
    fromHebrew(word) {
      return Promise.resolve(edenic.transcribeHebrewWord(word));
    },
  },
};
