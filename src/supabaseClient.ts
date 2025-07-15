import { createClient } from '@supabase/supabase-js';

// Use NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for backend as per .env.example
const supabaseUrl = process.env.SUPABASE_URL || 'https://hgckzexwjwqpgdcghahd.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnY2t6ZXh3andxcGdkY2doYWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDYyMjMsImV4cCI6MjA2NzIyMjIyM30.CADo9ci8fecehpfLJ2gHUhl4zxhQ6uR8HIEhv6A8UqY';

if (!supabaseUrl || !supabaseKey) {
  // eslint-disable-next-line no-console
  console.warn('Supabase URL or Key is missing. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
