import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useAuth } from './useAuth';

describe('useAuth', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts with no user and not loading', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('signUp sets loading then stores the user with name', async () => {
    const { result } = renderHook(() => useAuth());

    let promise: ReturnType<typeof result.current.signUp>;
    act(() => {
      promise = result.current.signUp('john@example.com', 'secret', 'John');
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });

    const outcome = await promise!;
    expect(outcome.error).toBeNull();
    expect(outcome.data?.user).toEqual({ id: 'demo-user-id', email: 'john@example.com', name: 'John' });
    expect(result.current.user).toEqual({ id: 'demo-user-id', email: 'john@example.com', name: 'John' });
    expect(result.current.loading).toBe(false);
  });

  it('signIn stores the user (without name) and resolves without error', async () => {
    const { result } = renderHook(() => useAuth());

    let promise: ReturnType<typeof result.current.signIn>;
    act(() => {
      promise = result.current.signIn('jane@example.com', 'pw');
    });

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });

    const outcome = await promise!;
    expect(outcome.error).toBeNull();
    expect(outcome.data?.user).toEqual({ id: 'demo-user-id', email: 'jane@example.com' });
    expect(result.current.loading).toBe(false);
    expect(result.current.user).toEqual({ id: 'demo-user-id', email: 'jane@example.com' });
  });

  it('signOut clears the current user', async () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.signIn('jane@example.com', 'pw');
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });
    expect(result.current.user).not.toBeNull();

    await act(async () => {
      await result.current.signOut();
    });

    expect(result.current.user).toBeNull();
  });
});
