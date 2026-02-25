import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export default async function ConfiguracionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // const { data: profile } = await supabase
  //   .from("profiles")
  //   .select("rol")
  //   .eq("id", user.id)
  //   .single()

  const { data: profile, error } = await supabase
  .from("profiles")
  .select("rol")
  .eq("id", user.id)
  .single()


  console.log("ERROR:", error)
  console.log("PROFILE:", profile)


  // 🔐 Solo admin puede entrar aquí
  // temporal
  // 3089aeb6-b4dc-4be4-8c76-b614b7f77bb3
  // console.log("SESSION USER ID:", user.id)
  // console.log("PROFILE:", profile)
  if (!profile) {
    redirect("/dashboard")
  }

  if (profile?.rol !== "admin") {
    redirect("/dashboard")
  }

  return <>{children}</>
}
