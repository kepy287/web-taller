"use server"
// Usa la sesión real
// Solo actualiza columnas que tú decides
// No permite tocar rol
// Respeta RLS
// Es seguro incluso si alguien manipula el frontend

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function updateProfile(data: {
  nombre: string
  avatar?: string
}) {
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
    //   cookies: {
    //     get(name: string) {
    //       return cookieStore.get(name)?.value
    //     },
    //   },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("No autorizado")
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      nombre: data.nombre,
      avatar: data.avatar,
    })
    .eq("id", user.id)

  if (error) {
    throw new Error("Error actualizando perfil")
  }

  return { success: true }
}