"use client"

import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

interface Props {
  id: string
}

export default function DeleteButton({ id }: Props) {
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleDelete = async () => {
    const confirmacion = confirm("¿Seguro que deseas eliminar este producto?")

    if (!confirmacion) return

    const { error } = await supabase
      .from("producto")
      .delete()
      .eq("id_producto", id)

    if (error) {
      alert("Error al eliminar")
      console.error(error)
      return
    }

    router.refresh() // 🔄 refresca la página
  }

  return (
    <button
      onClick={handleDelete}
      className="text-[#8698b3] hover:text-red-500 transition-colors"
    >
      Eliminar
    </button>
  )
}