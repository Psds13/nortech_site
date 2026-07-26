import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const createClient = vi.fn((url: string, key: string) => ({ __client: true, url, key }));

vi.mock('@supabase/supabase-js', () => ({
  createClient: (url: string, key: string) => createClient(url, key),
}));

async function importSupabase() {
  return await import('./supabase');
}

describe('supabase client', () => {
  beforeEach(() => {
    vi.resetModules();
    createClient.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('creates a client when both env vars are set', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-key');

    const { supabase } = await importSupabase();

    expect(createClient).toHaveBeenCalledWith('https://example.supabase.co', 'anon-key');
    expect(supabase).not.toBeNull();
  });

  it('is null when the URL is missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-key');

    const { supabase } = await importSupabase();

    expect(createClient).not.toHaveBeenCalled();
    expect(supabase).toBeNull();
  });

  it('is null when the anon key is missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');

    const { supabase } = await importSupabase();

    expect(createClient).not.toHaveBeenCalled();
    expect(supabase).toBeNull();
  });

  it('is null when both env vars are missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');

    const { supabase } = await importSupabase();

    expect(supabase).toBeNull();
  });
});
