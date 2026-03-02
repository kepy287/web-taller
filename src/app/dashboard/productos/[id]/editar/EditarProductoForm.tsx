"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

interface Props {
  producto: any
}

export default function EditarProductoForm({ producto }: Props) {
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const [nombre, setNombre] = useState(producto.nombre)
  const [codigo, setCodigo] = useState(producto.codigo || "")
  const [tipo, setTipo] = useState(producto.tipo)
  const [precioVenta, setPrecioVenta] = useState(producto.precio_venta)
  const [stockActual, setStockActual] = useState(producto.stock_actual)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase
      .from("producto")
      .update({
        nombre,
        codigo,
        tipo,
        precio_venta: precioVenta,
        stock_actual: stockActual,
      })
      .eq("id_producto", producto.id_producto)

    if (error) {
      alert("Error al actualizar")
      console.error(error)
      return
    }

    router.push("/dashboard/productos")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium mb-1">
          Nombre
        </label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Código
        </label>
        <input
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Tipo
        </label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="PRODUCTO">PRODUCTO</option>
          <option value="SERVICIO">SERVICIO</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Precio Venta
        </label>
        <input
          type="number"
          step="0.01"
          value={precioVenta}
          onChange={(e) => setPrecioVenta(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Stock Actual
        </label>
        <input
          type="number"
          step="0.01"
          value={stockActual}
          onChange={(e) => setStockActual(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-[#1d4b77] text-white rounded-xl hover:bg-[#163a5c] transition-colors"
      >
        Guardar Cambios
      </button>

    </form>
  )
}