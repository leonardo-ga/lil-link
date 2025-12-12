import { computed, Injectable, signal } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { Session, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabase: SupabaseClient;

  // Signals to track authentication state
  private session = signal<Session | null>(null);

  // Computed helpers
  user = computed<User | null>(() => this.session()?.user ?? null);
  isLoggedIn = computed<boolean>(() => this.user() !== null);

  constructor(private supabaseService: SupabaseService) {
    this.supabase = supabaseService.client;

    // Load session on startup
    this.supabase.auth.getSession().then(({ data }) => {
      this.session.set(data.session);
    });

    // Listen to login/logout changes
    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.session.set(session);
    });
  }

  /** AUTH METHODS */

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign-up error: " + error.message);
    }
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Sign-in error: " + error.message);
    }
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.log("Sign-out error: " + error.message);
    }
  }
}
