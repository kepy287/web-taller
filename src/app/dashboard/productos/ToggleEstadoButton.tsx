"use client"

import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

interface Props {
  id: string
  estado: boolean
}

export default function ToggleEstadoButton({ id, estado }: Props) {
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleToggle = async () => {
    const confirmacion = confirm(
      estado
        ? "¿Deseas desactivar este producto?"
        : "¿Deseas activar este producto?"
    )

    if (!confirmacion) return

    const { error } = await supabase
      .from("producto")
      .update({ estado: !estado })
      .eq("id_producto", id)

    if (error) {
      alert("Error al actualizar estado")
      console.error(error)
      return
    }

    router.refresh()
  }

  return (
    <button
      onClick={handleToggle}
      className={`transition-colors ${
        estado
          ? "text-[#8698b3] hover:text-red-500"
          : "text-[#8698b3] hover:text-green-500"
      }`}
    >
      {estado ? "Desactivar" : "Activar"}
    </button>
  )
}