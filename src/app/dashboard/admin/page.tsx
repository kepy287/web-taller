import { redirect } from "next/navigation"
import { getUserRole } from "@/lib/getUserRole"

export default async function AdminPage() {
  const role = await getUserRole()

  if (role !== "admin") {
    redirect("/dashboard")
  }

  return <h1>Panel de Administrador</h1>
}