import { Link, useLocation } from "react-router-dom"
import { LayoutGrid, Image, Monitor, Video, Layers, Settings, Cloud } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard", color: "text-white" },
  { icon: Layers, label: "Graphic", href: "/studio/graphic/new", color: "text-neon-cyan" },
  { icon: Monitor, label: "Web", href: "/studio/web/new", color: "text-neon-magenta" },
  { icon: Image, label: "Photo", href: "/studio/photo/new", color: "text-yellow-400" },
  { icon: Video, label: "Video", href: "/studio/video/new", color: "text-purple-500" },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 border-r border-border bg-card/50 backdrop-blur-xl flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-2xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
          NEÓN
        </h1>
        <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Studio Suite</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.href) || (item.href === "/dashboard" && location.pathname === "/dashboard")
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group",
                isActive 
                  ? "bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5 transition-colors", isActive ? item.color : "text-muted-foreground group-hover:text-white")} />
              <span className={cn("font-medium", isActive ? "text-white" : "text-muted-foreground group-hover:text-white")}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-1">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-accent text-muted-foreground hover:text-white transition-colors">
          <Cloud className="h-5 w-5" />
          <span className="font-medium">Neón Sync</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-accent text-muted-foreground hover:text-white transition-colors">
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  )
}
