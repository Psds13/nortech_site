import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Raised when Supabase is used without the required environment variables.
 */
export class SupabaseConfigError extends Error {
  constructor() {
    super(
      'Supabase não está configurado: defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
    this.name = 'SupabaseConfigError';
  }
}

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Exporta cliente ou null se as credenciais não existirem
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

/**
 * Returns the Supabase client, throwing a descriptive error when the
 * credentials are missing instead of silently skipping the operation.
 */
export function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    throw new SupabaseConfigError();
  }
  return supabase;
}
