// File: js/auth.js

import { supabase } from './supabase.js';

export async function getUserSession() {
  const { data, error } = await supabase.auth.getSession();
  return { user: data?.session?.user, error };
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/login.html';
}

// Guard untuk dashboard page
export async function requireLogin() {
  const { user, error } = await getUserSession();
  if (!user) {
    window.location.href = '/login.html';
  }
}
