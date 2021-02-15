/* eslint-disable no-restricted-globals */
import * as edenic from './edenic';

self.addEventListener('message', processWord);

function processWord(e) {
  const { word, filterCriteria } = e.data;
  const result = edenic.analyze(word, filterCriteria);
  postMessage(result);
}
