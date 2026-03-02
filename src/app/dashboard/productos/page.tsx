import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import DeleteButton from "./DeleteButton"
import ToggleEstadoButton from "./ToggleEstadoButton"

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

  if (!session) redirect("/login")

  // 🔎 Obtener perfil
  const { data: profile } = await supabase
    .from("profiles")
    .select("rol")
    .eq("id", session.user.id)
    .single()

  const isAdmin = profile?.rol === "admin"

  // 📦 Obtener productos
  const { data: productos } = await supabase
    .from("producto")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-[#1e2b3c] dark:text-white">
            Productos
          </h2>
          <p className="text-[#6f7d95] dark:text-[#9dabc0] mt-1">
            Gestiona tu inventario de productos
          </p>
        </div>

        {isAdmin && (
          <Link
            href="/dashboard/productos/nuevo"
            className="mt-4 md:mt-0 px-4 py-2 bg-[#1d4b77] text-white rounded-xl hover:bg-[#163a5c] transition-colors"
          >
            + Nuevo producto
          </Link>
        )}
      </div>

      {/* TABLA */}
      <div className="bg-white dark:bg-[#1e2632] rounded-2xl border border-[#e9edf4] dark:border-[#2e3a48] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f7f9fc] dark:bg-[#1a232e] border-b border-[#e9edf4] dark:border-[#2e3a48]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-[#8698b3] uppercase">
                  Producto
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-[#8698b3] uppercase">
                  Tipo
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-[#8698b3] uppercase">
                  Precio
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-[#8698b3] uppercase">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-[#8698b3] uppercase">
                  Estado
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-[#8698b3] uppercase">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#e9edf4] dark:divide-[#2e3a48]">

              {productos?.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-6 text-center text-[#8698b3]">
                    No hay productos registrados
                  </td>
                </tr>
              )}

              {productos?.map((prod) => (
                <tr
                  key={prod.id_producto}
                  className="hover:bg-[#f9fbff] dark:hover:bg-[#253343] transition-colors"
                >
                  {/* Producto */}
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#314155] dark:text-[#cdd9e9]">
                      {prod.nombre}
                    </div>
                    <div className="text-sm text-[#8698b3]">
                      Código: {prod.codigo || "—"}
                    </div>
                  </td>

                  {/* Tipo */}
                  <td className="px-6 py-4 text-[#314155] dark:text-[#cdd9e9]">
                    {prod.tipo}
                  </td>

                  {/* Precio */}
                  <td className="px-6 py-4 font-medium text-[#314155] dark:text-[#cdd9e9]">
                    ${prod.precio_venta}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4 text-[#314155] dark:text-[#cdd9e9]">
                    {prod.stock_actual}
                  </td>

                  {/* Estado */}
                  <td className="px-6 py-4">
                    {prod.estado ? (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">
                        Activo
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full text-xs font-medium">
                        Inactivo
                      </span>
                    )}
                  </td>

                  {/* Acciones */}
                  <td className="px-6 py-4 text-right">
                    {isAdmin && (
                      <div className="flex justify-end gap-4">
                        <Link
                          href={`/dashboard/productos/${prod.id_producto}/editar`}
                          className="text-[#8698b3] hover:text-[#1d4b77] transition-colors"
                        >
                          Editar
                        </Link>

                        <ToggleEstadoButton
                          id={prod.id_producto}
                          estado={prod.estado}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}