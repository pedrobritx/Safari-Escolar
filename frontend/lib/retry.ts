
interface RetryOptions {
  maxRetries?: number;
  baseDelayMs?: number;
  shouldRetry?: (error: unknown) => boolean;
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 3,
    baseDelayMs = 500,
    shouldRetry = defaultShouldRetry
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (!shouldRetry(error)) {
        throw error;
      }

      if (attempt < maxRetries - 1) {
        const delay = baseDelayMs * Math.pow(2, attempt);
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

function defaultShouldRetry(error: unknown): boolean {

  if (error instanceof TypeError && error.message === 'Failed to fetch') {
    return true;
  }

  if (error instanceof Response) {

    return error.status >= 500;
  }

  if (error && typeof error === 'object' && 'status' in error) {
    const status = (error as { status: number }).status;
    return status >= 500;
  }

  if (error instanceof Error) {
    const networkErrorMessages = [
      'network',
      'timeout',
      'connection',
      'ECONNREFUSED',
      'ETIMEDOUT'
    ];
    return networkErrorMessages.some(msg =>
      error.message.toLowerCase().includes(msg.toLowerCase())
    );
  }

  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function createRetryWrapper(defaultOptions: RetryOptions) {
  return function<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T> {
    return withRetry(fn, { ...defaultOptions, ...options });
  };
}