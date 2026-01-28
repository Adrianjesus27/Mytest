import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D14] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-magenta/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center space-y-8 max-w-4xl px-4">
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-neon-magenta animate-pulse">
          NEÓN STUDIO
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Ilumina tu creatividad. El estudio digital donde las ideas cobran luz.
        </p>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <Link to="/dashboard">
            <Button variant="neon" size="lg" className="h-14 px-8 text-lg">
              Launch Studio
            </Button>
          </Link>
          <Button variant="ghost" size="lg" className="h-14 px-8 text-lg text-zinc-400 hover:text-white">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 text-zinc-600 text-sm">
        © 2026 Neón Systems. All rights reserved.
      </div>
    </div>
  )
}
