"use client"

import { useState } from "react"
import { updateProfile } from "@/lib/actions/updateProfile"

export default function PerfilForm({
  nombreInicial,
}: {
  nombreInicial: string
}) {
  const [nombre, setNombre] = useState(nombreInicial)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      await updateProfile({ nombre })
      alert("Perfil actualizado correctamente")
    } catch (error) {
      alert("Error actualizando perfil")
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Mi Perfil</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  )
}