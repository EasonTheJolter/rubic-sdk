import { PathrSdkError } from 'src/common/errors/pathr-sdk.error';

/**
 * @internal
 * Thrown, if rpc provider has not passed healthcheck.
 */
export class HealthcheckError extends PathrSdkError {
    constructor() {
        super();
        Object.setPrototypeOf(this, HealthcheckError.prototype);
    }
}
