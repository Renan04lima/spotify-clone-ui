import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export function NavigationButtons({ }) {
  return (
    <div className='flex items-center  gap-3'>
      <button className="p-1 rounded-full bg-black/40">
        <ChevronLeft />
      </button>
      <button className="p-1 rounded-full bg-black/40">
        <ChevronRight />
      </button>
    </div>
  )
}
