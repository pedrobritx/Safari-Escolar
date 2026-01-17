/**
 * Retry utility with exponential backoff for network requests
 * 
 * Usage:
 *   await withRetry(() => api.addFeedbackEvent(token, studentId, type, description));
 */

interface RetryOptions {
  maxRetries?: number;
  baseDelayMs?: number;
  shouldRetry?: (error: unknown) => boolean;
}

/**
 * Wraps an async function with automatic retry logic and exponential backoff.
 * 
 * @param fn - The async function to retry
 * @param options - Configuration options
 * @returns The result of the function if successful
 * @throws The last error if all retries fail
 */
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

      // Check if we should retry this error
      if (!shouldRetry(error)) {
        throw error;
      }

      // Don't delay after the last attempt
      if (attempt < maxRetries - 1) {
        const delay = baseDelayMs * Math.pow(2, attempt);
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

/**
 * Default retry logic - retries on network errors and 5xx server errors
 * Does NOT retry on 4xx client errors (bad request, unauthorized, etc.)
 */
function defaultShouldRetry(error: unknown): boolean {
  // Network errors (fetch failed)
  if (error instanceof TypeError && error.message === 'Failed to fetch') {
    return true;
  }

  // If it's a Response object, check status
  if (error instanceof Response) {
    // Retry on 5xx server errors
    return error.status >= 500;
  }

  // If it's an Error with a status property (from our API handling)
  if (error && typeof error === 'object' && 'status' in error) {
    const status = (error as { status: number }).status;
    return status >= 500;
  }

  // Generic error messages that indicate network issues
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

/**
 * Simple sleep utility
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a retry wrapper with pre-configured options
 */
export function createRetryWrapper(defaultOptions: RetryOptions) {
  return function<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T> {
    return withRetry(fn, { ...defaultOptions, ...options });
  };
}
