import { HomeIcon, Search, Library } from "lucide-react"

export const Sidebar = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <nav className="space-y-5 mt-10">
                <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    <HomeIcon size={24} />
                    Home</a>
                <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    <Search size={24} />
                    Search
                </a>
                <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    <Library size={24} />
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Discover Weekly</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Release Radar</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Liked Songs</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Hits Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Throwback Thursday</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Chill Vibes</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Party Mix</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Workout Jams</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Road Trip Tunes</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Late Night Vibes</a>
            </nav>
        </aside>
    )
}