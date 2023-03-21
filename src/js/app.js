export const errors = new Map();
export default class ErrorRepository {
    constructor(code, description) {
        this.code = code,
        this.description = description

        errors.set(this, {
            code,
            description
        });
    }

    translate(code) {
        if (errors.has(this).code) {
            return errors.get(this).code
        } else {
            return 'Unknown error'
        }
        
    }
}