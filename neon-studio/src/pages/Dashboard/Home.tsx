import { Button } from "@/components/ui/button"
import { Plus, Clock, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">Welcome back, Creator</h1>
          <p className="text-muted-foreground mt-1">Ready to illuminate your next idea?</p>
        </div>
        <Button variant="neon" size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Graphic Design", color: "from-cyan-500/20 to-blue-600/10", border: "border-cyan-500/50", text: "text-cyan-400" },
          { title: "Web Design", color: "from-fuchsia-500/20 to-purple-600/10", border: "border-fuchsia-500/50", text: "text-fuchsia-400" },
          { title: "Photo Editor", color: "from-yellow-400/20 to-orange-600/10", border: "border-yellow-400/50", text: "text-yellow-400" },
          { title: "Video Studio", color: "from-indigo-500/20 to-violet-600/10", border: "border-indigo-500/50", text: "text-indigo-400" },
        ].map((item, i) => (
          <div key={i} className={`h-40 rounded-xl border ${item.border} bg-gradient-to-br ${item.color} p-6 flex flex-col justify-end transition-transform hover:scale-105 cursor-pointer backdrop-blur-sm`}>
            <span className={`font-display text-lg font-bold ${item.text}`}>{item.title}</span>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            Recent Projects
          </h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>

        <div className="bg-card/50 border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-muted-foreground border-b border-border/50">
                <div className="col-span-6">Name</div>
                <div className="col-span-3">Type</div>
                <div className="col-span-3">Last Modified</div>
            </div>
            {[1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors cursor-pointer border-b border-border/10 last:border-0">
                    <div className="col-span-6 flex items-center gap-3">
                        <div className="h-8 w-12 bg-zinc-800 rounded flex items-center justify-center">
                           <Star className="h-3 w-3 text-zinc-600" />
                        </div>
                        <span className="text-white">Cyberpunk Poster v{i}</span>
                    </div>
                    <div className="col-span-3 text-neon-cyan">Graphic</div>
                    <div className="col-span-3 text-muted-foreground">2 hours ago</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
