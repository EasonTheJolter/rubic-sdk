import { PathrSdkError } from 'src/common/errors';

export function parseError(err: unknown, defaultMessage?: string): PathrSdkError {
    if (err instanceof PathrSdkError) {
        return err;
    }
    return new PathrSdkError((err as Error)?.message || defaultMessage || 'Unknown error');
}
