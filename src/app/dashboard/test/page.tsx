import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export default async function TestPage() {
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
    return <div>No user</div>
  }

  const { data, error } = await supabase
    .from("profiles")
    .update({ rol: "admin" })
    .eq("id", user.id)

  return (
    <div>
      <h1>Resultado</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  )
}