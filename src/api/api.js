import * as edenic from './edenic';
import worker from './edenicsWorker';
import WebWorker from './workerSetup';

export class Api {
  constructor() {
    this.worker = new WebWorker(worker);
  }

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
        .map((r, i) => [r, edenic.identifyTransformations(word, r), i]);

      resolve(result);
    });
  }

  analyzeWorker(word, filterCriteria = {}) {
    return new Promise((resolve) => {
      this.worker.onmessage = function (e) {
        resolve(e.data);
      };

      this.worker.postMessage({ word, filterCriteria });
    });
  }
}
