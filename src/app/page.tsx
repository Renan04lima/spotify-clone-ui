import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Volume, Laptop2, Maximize2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
        <main className="flex-1 p-6">
          <div className='flex items-center  gap-3'>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpeg" width={104} height={104} alt="Capa do álbum Dos prédios - Veigh" />
              <strong>Dos prédios</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Renan Oliveira</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="Capa do álbum Dos prédios - Veigh" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album.jpeg" className="w-full" width={48} height={48} alt="Capa do álbum Dos prédios - Veigh" />
          <div className="flex flex-col">
            <strong className="font-normal">Clickbait</strong>
            <span className="text-xs text-zinc-400">Veigh</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mic2 size={20} className="text-zinc-200" />
          <LayoutList size={20} className="text-zinc-200" />
          <Laptop2 size={20} className="text-zinc-200" />
          <div className="flex items-center gap-4">
            <Volume size={20} className="text-zinc-200" />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} className="text-zinc-200" />
        </div>

      </footer>
    </div>
  )
}
