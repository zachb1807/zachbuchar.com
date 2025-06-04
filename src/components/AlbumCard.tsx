import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"
import { Image, Picture } from "astro:assets";
import { createSignal } from "solid-js";

type Props = {
  entry: CollectionEntry<"albums">
}


export default function AlbumCard({ entry }: Props) {
  const cover = entry.data.cover
  const [isDateShown, setIsDateShow] = createSignal(false)

  return (
    <div 
      class={`flex items-center cursor-pointer justify-center w-1/3 aspect-square rounded-md relative bg-cover bg-gray-500 bg-blend-multiply transition-colors hover:bg-gray-600`} 
      style={{ "background-image": `url(${cover.src})` }}
      onMouseEnter={() => setIsDateShow(true)}
      onMouseLeave={() => setIsDateShow(false)}
    >
      {/* <img src={cover.src} alt="" class=" aspect-square object-cover rounded-md  brightness-50" /> */}}
      <div class="text-white z-10 text-center transition-all duration-300 ease-in-out overflow-hidden">
        <div>{entry.data.title}</div>
        <div class={`text-sm transition-all duration-400 ease-out ${isDateShown() ? 'max-h-96' : 'h-0 opacity-0'}`}>{formatDate(entry.data.date)}</div>
      </div>
    </div>
  )
}