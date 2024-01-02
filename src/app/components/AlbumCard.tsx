import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

type AlbumCardProps = { name: string, image: string }
export function AlbumCard({ name, image }: AlbumCardProps) {

  return <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
    <Image src={image} width={104} height={104} alt="Capa do álbum Dos prédios - Veigh" />
    <strong>{name}</strong>

    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
      <Play fill="bg-black" />
    </button>
  </a>;
}
