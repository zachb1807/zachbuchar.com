import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import AlbumCard from "./AlbumCard"

type Props = {
  data: CollectionEntry<"albums">[]
}

export default function Photography({ data }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [albums, setAlbums] = createSignal<CollectionEntry<"albums">[]>([])

  createEffect(() => {
    setAlbums(data)
  })

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            SHOWING {albums().length} OF {data.length} Albums
          </div>
          <ul class="flex flex-col gap-3">
            {albums().map((album) => (
              <AlbumCard entry={album} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
