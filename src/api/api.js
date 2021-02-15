import _ from 'lodash';
import EdenicsWorker from './edenics.worker';

const keyResolver = (word, criteria) =>
  `${word}-${_.values(criteria).join('-')}`;

export class Api {
  constructor() {
    this.worker = new EdenicsWorker();
    this.cache = {};
  }

  analyze(word, filterCriteria = {}) {
    const self = this;
    const key = keyResolver(word, filterCriteria);
    if (key in this.cache) {
      return Promise.resolve(this.cache[key]);
    }

    return new Promise((resolve) => {
      this.worker.onmessage = function (e) {
        self.cache[key] = e.data;
        resolve(e.data);
      };

      this.worker.postMessage({ word, filterCriteria });
    });
  }
}
