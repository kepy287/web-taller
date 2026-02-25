  'use client'

  import { useState } from 'react'
  import { useRouter } from 'next/navigation'
  import { signIn } from '@/services/authService'

  export default function LoginPage() {
    const router = useRouter() // Permite redireccionar
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
      try {
        console.log("Intentando login...")
        await signIn(email, password)
        
        console.log("Login exitoso")
        // Si el login es exitoso redirigimos al dashboard
        // 🔥 Importante para SSR
        // router.replace("/dashboard")
        // router.refresh()
        
        // esta linea estamos quitando
        router.push('/dashboard')

      } catch (error: any) {
        console.log("Error login:", error)
        alert(error.message)
      }
    }

    return (
      <div className="p-8">
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          className="border p-2 mb-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </div>
    )
  }
