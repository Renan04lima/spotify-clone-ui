import Image from "next/image";
import React from "react";

type MixCardProps = { name: string, image: string, artists: string }

export function MixCard({ name, image, artists }: MixCardProps) {
  return (
    <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src={image} className="w-full" width={120} height={120} alt="Capa do álbum Dos prédios - Veigh" />
      <strong className="font-semibold">{name}</strong>
      <span className="text-sm text-zinc-400">{artists}</span>
    </div>
  );
}
