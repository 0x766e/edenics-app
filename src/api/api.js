import _ from 'lodash';
import EdenicsWorker from './edenics.worker';

const criteriaToKey = (criteria) => _.values(criteria).join('-');

export class Api {
  constructor() {
    this.worker = new EdenicsWorker();
    this.cache = {};
  }

  analyze(word, filterCriteria = {}) {
    const self = this;
    const criteriaKey = criteriaToKey(filterCriteria);
    if (word in this.cache && criteriaKey in this.cache[word]) {
      return Promise.resolve(this.cache[word][criteriaKey]);
    }

    return new Promise((resolve) => {
      this.worker.onmessage = function (e) {
        if (!(word in self.cache)) {
          self.cache = {};
        }

        self.cache[word] = {
          criteriaKey: e.data,
        };

        resolve(e.data);
      };

      this.worker.postMessage({ word, filterCriteria });
    });
  }
}
