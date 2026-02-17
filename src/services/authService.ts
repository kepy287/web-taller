import { supabase } from '../lib/supabaseClient'

export const signUp = async (
  email: string,
  password: string,
  nombreTaller: string,
  nombreUsuario: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre_taller: nombreTaller,
        nombre_usuario: nombreUsuario
      }
    }
  })

  if (error) throw error

  return data
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error

  return data
}

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser()
  return data.user
}

export const signOut = async () => {
  await supabase.auth.signOut()
}
