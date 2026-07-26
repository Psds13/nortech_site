import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const captureException = vi.fn();
const captureMessage = vi.fn();

vi.mock('@sentry/nextjs', () => ({
  captureException: (...args: unknown[]) => captureException(...args),
  captureMessage: (...args: unknown[]) => captureMessage(...args),
}));

import { LogLevel, reportError, logWarning, logInfo, toError, getErrorMessage } from './logger';

describe('LogLevel', () => {
  it('exposes the expected string values', () => {
    expect(LogLevel.ERROR).toBe('error');
    expect(LogLevel.WARNING).toBe('warning');
    expect(LogLevel.INFO).toBe('info');
  });
});

describe('logger', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    captureException.mockClear();
    captureMessage.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('reportError', () => {
    it('logs to console.error in development', () => {
      vi.stubEnv('NODE_ENV', 'development');
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const error = new Error('boom');
      const context = { component: 'Header', action: 'fetch' };

      reportError(error, context);

      expect(spy).toHaveBeenCalledWith('Error:', error, 'Context:', context);
    });

    it('does not log to console.error outside development', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

      reportError(new Error('boom'));

      expect(spy).not.toHaveBeenCalled();
    });

    it('forwards the error to Sentry with context', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const error = new Error('boom');
      const context = { component: 'Form', action: 'submit' };

      reportError(error, context);

      expect(captureException).toHaveBeenCalledWith(error, {
        level: LogLevel.ERROR,
        tags: { component: 'Form', action: 'submit' },
        extra: context,
      });
    });

    it('normalizes non-Error values before reporting', () => {
      reportError({ message: 'postgrest failed', code: '23505' });

      const reported = captureException.mock.calls[0][0] as Error;
      expect(reported).toBeInstanceOf(Error);
      expect(reported.message).toBe('postgrest failed');
      expect(reported.name).toBe('23505');
    });
  });

  describe('logWarning', () => {
    it('logs to console.warn in development', () => {
      vi.stubEnv('NODE_ENV', 'development');
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      logWarning('careful', { field: 'email' });

      expect(spy).toHaveBeenCalledWith('careful', { field: 'email' });
    });

    it('does not log to console.warn outside development', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      logWarning('careful');

      expect(spy).not.toHaveBeenCalled();
    });

    it('reports the warning to Sentry', () => {
      logWarning('careful', { component: 'Libras' });

      expect(captureMessage).toHaveBeenCalledWith('careful', {
        level: LogLevel.WARNING,
        tags: { component: 'Libras', action: undefined },
        extra: { component: 'Libras' },
      });
    });
  });

  describe('logInfo', () => {
    it('logs to console.info in development', () => {
      vi.stubEnv('NODE_ENV', 'development');
      const spy = vi.spyOn(console, 'info').mockImplementation(() => {});

      logInfo('logged in', { userId: '123' });

      expect(spy).toHaveBeenCalledWith('logged in', { userId: '123' });
    });

    it('is silent outside development', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const spy = vi.spyOn(console, 'info').mockImplementation(() => {});

      logInfo('logged in');

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('toError', () => {
    it('passes through Error instances', () => {
      const error = new Error('boom');
      expect(toError(error)).toBe(error);
    });

    it('serializes objects without a message', () => {
      expect(toError({ status: 500 }).message).toBe('{"status":500}');
    });

    it('stringifies primitives', () => {
      expect(toError('boom').message).toBe('boom');
    });
  });

  describe('getErrorMessage', () => {
    it('prefers the error message', () => {
      expect(getErrorMessage(new Error('boom'), 'fallback')).toBe('boom');
    });

    it('falls back for empty errors', () => {
      expect(getErrorMessage(new Error(''), 'fallback')).toBe('fallback');
    });
  });
});
