import workerize from 'workerize';

export default workerize(`
export function add(a, b) {
  // block for half a second to demonstrate asynchronicity
  let start = Date.now();
  while (Date.now()-start < 500);
  return a + b;
}
`);
