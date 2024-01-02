import { NavigationButtons } from './components/NavigationButtons';
import { MixCard } from './components/MixCard';
import { AlbumCard } from './components/AlbumCard';
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <NavigationButtons />

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <AlbumCard name="Dos prédios" image="/album.jpeg" />
            <AlbumCard name="Dos prédios" image="/album.jpeg" />
            <AlbumCard name="Dos prédios" image="/album.jpeg" />
            <AlbumCard name="Dos prédios" image="/album.jpeg" />
            <AlbumCard name="Dos prédios" image="/album.jpeg" />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Renan Oliveira</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
            <MixCard name="Daily Mix 1" image="/album.jpeg" artists="Veigh, Supernova Ent, Niink e Bvga Beatz" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
