import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  private supabaseUrl = 'https://wphshfgaldlhwemutbmr.supabase.co';
  private supabasePublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwaHNoZmdhbGRsaHdlbXV0Ym1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTIxNzAsImV4cCI6MjA4MDk2ODE3MH0.f3O6ZJLZJ51PDIejcjNeO0nyluKpsHN1aTb8S-LqqQE';

  constructor() {
    this.supabase = createClient(
      this.supabaseUrl,
      this.supabasePublicKey,
      {
        auth: {
          persistSession: false,
        },
      }
    );
  }

  get client() {
    return this.supabase;
  }
}