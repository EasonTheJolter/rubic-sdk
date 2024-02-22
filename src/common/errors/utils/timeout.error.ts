import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

export class TimeoutError extends PathrSdkError {
    constructor(message?: string) {
        super(message);
        this.name = 'TimeoutError';

        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
