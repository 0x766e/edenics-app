/* eslint-disable no-restricted-globals */
//https://github.com/fullstackio/awesome-fullstack-tutorials/tree/master/react/guide-to-web-workers-in-react
export default () => {
  self.addEventListener('message', (e) => {
    postMessage('[SRC] Pong');
  });
};
