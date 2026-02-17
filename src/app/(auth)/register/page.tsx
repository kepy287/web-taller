"use client"

import { useState } from 'react'
import { signUp } from '../../../services/authService'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombreTaller, setNombreTaller] = useState('')
  const [nombreUsuario, setNombreUsuario] = useState('')

  const handleRegister = async () => {
    try {
      await signUp(email, password, nombreTaller, nombreUsuario)
      alert('Registro exitoso')
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h2>Registro</h2>

      <input
        placeholder="Nombre del Taller"
        value={nombreTaller}
        onChange={(e) => setNombreTaller(e.target.value)}
      />

      <input
        placeholder="Tu Nombre"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Registrarse
      </button>
    </div>
  )
}
