import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { changeUserRole } from "@/lib/actions/changeUserRole"

export default async function UsuariosAdminPage() {
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

  // 🔐 Verificar sesión
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // 🔐 Verificar que sea admin
  const { data: currentUser } = await supabase
    .from("profiles")
    .select("rol")
    .eq("id", session.user.id)
    .single()

  if (currentUser?.rol !== "admin") {
    redirect("/dashboard")
  }

  type UserProfile = {
  id: string
  nombre: string | null
  rol: string | null
  }

  // 📋 Obtener todos los usuarios
  // se tipo el userprofile
  const { data: users, error } = await supabase.rpc("get_all_profiles")

  if (error) {
    console.error(error)
    return <div>Error cargando usuarios</div>
  }

  const userList = users as UserProfile[]

  if (error) {
    console.log(error)
  }
  // const { data: users } = await supabase.rpc("get_all_profiles")
  // const { data: users } = await supabase
  //   .from("profiles")
  //   .select("id, nombre, rol")

  return (
    <div>
      <h1>Administración de Usuarios</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Cambiar Rol</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.rol}</td>
              <td>
                <form
                  action={async () => {
                    "use server"
                    const newRole = user.rol === "admin" ? "user" : "admin"
                    await changeUserRole(user.id, newRole)
                  }}
                >
                  <button
                        type="submit"
                        style={{
                            padding: "6px 12px",
                            backgroundColor: user.rol === "admin" ? "#dc2626" : "#2563eb",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        >
                        Convertir en {user.rol === "admin" ? "User" : "Admin"}
                    </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}