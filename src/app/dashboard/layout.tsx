import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
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
    }
  )

  // 🔹 Verificar sesión
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // 🔹 Obtener rol
  const { data: profile } = await supabase
    .from("profiles")
    .select("rol")
    .eq("id", session.user.id)
    .single()

  const role = profile?.rol

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "220px", padding: "20px", borderRight: "1px solid #ddd" }}>
        <h3>Dashboard</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link href="/dashboard">Inicio</Link>
          <Link href="/dashboard/perfil">Perfil</Link>

          {/* 🔐 Solo Admin */}
          {role === "admin" && (
            <>
              <Link href="/dashboard/admin">Panel Admin</Link>
              <Link href="/dashboard/configuracion">Configuración</Link>
            </>
          )}
        </nav>
      </aside>

      {/* Contenido */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>
    </div>
  )
}