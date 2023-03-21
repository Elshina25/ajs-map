const errors = new Map();
export default class ErrorRepository {
  constructor(code, description) {
    this.code = code;
    this.description = description;

    errors.set(this, {
      code,
      description,
    });
  }

  translate(code) {
    if (code === this.code && code === errors.get(this).code) {
      return errors.get(this).description;
    }
    return 'Unknown error';
  }
}
