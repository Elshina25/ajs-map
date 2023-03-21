import ErrorRepository from '../app';

test('get errors', () => {
  const err = new ErrorRepository(404, 'Not Found');
  expect(err.translate(404)).toEqual('Not Found');
});

test('get errors', () => {
  const err = new ErrorRepository(404, 'Not Found');
  expect(err.translate(403)).toEqual('Unknown error');
});
