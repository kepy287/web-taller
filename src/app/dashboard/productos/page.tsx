import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function ProductosPage() {
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

  // 📦 Obtener productos (RLS filtra automáticamente por tenant)
  const { data: productos, error } = await supabase
    .from("producto")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error cargando productos:", error)
  }

  return (
    <div>
      <h1>Productos</h1>

      {productos?.length === 0 && <p>No hay productos registrados.</p>}

      {productos?.map((prod) => (
        <div
          key={prod.id_producto}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <strong>{prod.nombre}</strong>
          <p>Tipo: {prod.tipo}</p>
          <p>Precio Venta: ${prod.precio_venta}</p>
          <p>Stock Actual: {prod.stock_actual}</p>
        </div>
      ))}
    </div>
  )
}