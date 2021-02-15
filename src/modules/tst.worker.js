import message from './testdep.js';

self.addEventListener('message', startCounter);

function startCounter(event) {
  postMessage(message());
}
