import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

let clientPromise: Promise<SupabaseClient> | null = null

// @supabase/supabase-js solo lo usan dos formularios (lista de espera y
// contacto); cargarlo bajo demanda evita sumarlo al bundle inicial que
// necesita la primera pintura de la página.
export function getSupabase(): Promise<SupabaseClient> {
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(supabaseUrl, supabaseAnonKey)
    )
  }
  return clientPromise
}
