'use client';
import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<null | { id: string; email: string; name?: string }>(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string, name?: string) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({ id: 'demo-user-id', email, name });
      return { data: { user: { id: 'demo-user-id', email, name } }, error: null };
    } catch (err) {
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      void password;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({ id: 'demo-user-id', email });
      return { data: { user: { id: 'demo-user-id', email } }, error: null };
    } catch (err) {
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(null);
  };

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  };
}
