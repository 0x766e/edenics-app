/* eslint-disable no-restricted-globals */
export default () => {
  self.addEventListener('message', (e) => {
    const { word, filterCriteria } = e.data;
    postMessage(`${word}, ${JSON.stringify(filterCriteria)}`);
  });
};
