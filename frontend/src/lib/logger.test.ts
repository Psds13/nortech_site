import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { LogLevel, reportError, logWarning, logInfo } from './logger';

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
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    delete (window as unknown as { __SENTRY__?: unknown }).__SENTRY__;
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

    it('forwards the error to Sentry when window.__SENTRY__ is present', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const captureException = vi.fn();
      (window as unknown as { __SENTRY__: { captureException: typeof captureException } }).__SENTRY__ = {
        captureException,
      };
      const error = new Error('boom');
      const context = { component: 'Form' };

      reportError(error, context);

      expect(captureException).toHaveBeenCalledWith(error, { tags: context });
    });

    it('does not throw when Sentry is absent', () => {
      vi.stubEnv('NODE_ENV', 'production');
      expect(() => reportError(new Error('boom'))).not.toThrow();
    });
  });

  describe('logWarning', () => {
    it('logs to console.warn in development', () => {
      vi.stubEnv('NODE_ENV', 'development');
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      logWarning('careful', { field: 'email' });

      expect(spy).toHaveBeenCalledWith('careful', { field: 'email' });
    });

    it('is silent outside development', () => {
      vi.stubEnv('NODE_ENV', 'production');
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      logWarning('careful');

      expect(spy).not.toHaveBeenCalled();
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
});
