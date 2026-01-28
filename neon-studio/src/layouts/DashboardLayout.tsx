import { Outlet } from "react-router-dom"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <Outlet />
      </main>
    </div>
  )
}
