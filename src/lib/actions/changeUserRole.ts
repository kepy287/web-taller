"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function changeUserRole(userId: string, newRole: string) {
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

  // 🔐 Verificar usuario actual
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    throw new Error("No autenticado")
  }

  // 🔐 Verificar que sea admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("rol")
    .eq("id", session.user.id)
    .single()

  if (profile?.rol !== "admin") {
    throw new Error("No autorizado")
  }

  // 🔄 Cambiar rol del usuario objetivo
  const { error } = await supabase
    .from("profiles")
    .update({ rol: newRole })
    .eq("id", userId)

  if (error) {
    throw new Error("Error actualizando rol")
  }

  return { success: true }
}