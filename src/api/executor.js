/* eslint-disable no-restricted-globals, no-eval */
export default () => {
  self.addEventListener('message', (e) => {
    const result = eval('(' + decodeURI(e.data) + ')();');
    postMessage(result);
  });
};
