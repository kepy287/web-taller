import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import EditarProductoForm from "./EditarProductoForm"


interface Props {
  params: {
    id: string
  }
}

export default async function EditarProductoPage({ params }: Props) {
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

  if (!session) redirect("/login")

  // 🔎 Verificar que sea admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("rol")
    .eq("id", session.user.id)
    .single()

  if (profile?.rol !== "admin") {
    redirect("/dashboard")
  }

  // 📦 Obtener producto
  const { data: producto, error } = await supabase
    .from("producto")
    .select("*")
    .eq("id_producto", params.id)
    .single()

  if (error || !producto) {
    redirect("/dashboard/productos")
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Editar Producto
      </h2>

      <EditarProductoForm producto={producto} />
    </div>
  )
}