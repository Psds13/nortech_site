/**
 * Nortech Logging Utility
 *
 * Centralizes error reporting and logging strategy.
 * All errors should be routed through this module for consistency.
 * In production, errors are forwarded to Sentry.
 */

import * as Sentry from '@sentry/nextjs';

export enum LogLevel {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

interface ErrorContext {
  component?: string;
  action?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Normalize an unknown thrown value into an Error instance.
 */
export function toError(value: unknown): Error {
  if (value instanceof Error) return value;

  if (typeof value === 'object' && value !== null) {
    const maybeMessage = (value as { message?: unknown }).message;
    if (typeof maybeMessage === 'string' && maybeMessage.length > 0) {
      const error = new Error(maybeMessage);
      const maybeCode = (value as { code?: unknown }).code;
      if (typeof maybeCode === 'string') error.name = maybeCode;
      return error;
    }
    try {
      return new Error(JSON.stringify(value));
    } catch {
      return new Error(String(value));
    }
  }

  return new Error(String(value));
}

/**
 * Extract a user-facing message from an unknown thrown value.
 */
export function getErrorMessage(value: unknown, fallback: string): string {
  const message = toError(value).message;
  return message && message !== '[object Object]' ? message : fallback;
}

/**
 * Report an error to Sentry (all environments) and to the console in development.
 * Usage: reportError(error, { component: 'Header', action: 'fetchData' })
 */
export function reportError(error: unknown, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', error, 'Context:', context);
  }

  Sentry.captureException(toError(error), {
    level: LogLevel.ERROR,
    tags: { component: context?.component, action: context?.action },
    extra: context,
  });
}

/**
 * Log warnings for development and monitoring purposes
 * Usage: logWarning('User input validation failed', { field: 'email' })
 */
export function logWarning(message: string, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, context);
  }

  Sentry.captureMessage(message, {
    level: LogLevel.WARNING,
    tags: { component: context?.component, action: context?.action },
    extra: context,
  });
}

/**
 * Info logging - use sparingly in production
 * Usage: logInfo('User logged in', { userId: '123' })
 */
export function logInfo(message: string, context?: ErrorContext): void {
  if (process.env.NODE_ENV === 'development') {
    console.info(message, context);
  }
}
