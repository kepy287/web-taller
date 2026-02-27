// Usuario normal :
// Puede cambiar su nombre ✅
// No puede cambiar rol ❌
// No puede editar otros perfiles ❌
// Admin :
// Puede editar todo (directo vía RLS)

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import PerfilForm from "./perfil-form"

export default async function PerfilPage() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {},
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return <div>No autorizado</div>
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("nombre")
    .eq("id", user.id)
    .single()

  return <PerfilForm nombreInicial={profile?.nombre ?? ""} />
}