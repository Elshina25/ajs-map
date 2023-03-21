import ErrorRepository, { errors } from "../app";

test('get errors', () => {
    const errorRepo = new ErrorRepository(404, 'Not Found');
})