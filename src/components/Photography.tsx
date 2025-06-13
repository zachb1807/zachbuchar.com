import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import AlbumCard from "./AlbumCard"
import PhotoCard from "./PhotoCard"
import { getAlbumImages } from "../utils/albums"
import { Image, Picture } from "astro:assets";
import PhotoThing from "./PhotoThing.astro"
import MyCustomCardComponent from "./MyCustomCardComponent.astro"

type Props = {
  data: CollectionEntry<"albums">[]
}

export default function Photography({ data }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [albums, setAlbums] = createSignal<CollectionEntry<"albums">[]>([])
  const [allImages, setAllImages] = createSignal<ImageMetadata[]>([])

  createEffect(() => {
    setAlbums(data)
  })

  createEffect(async () => {
    const imagesArr: ImageMetadata[] = []
    for (const album of data) {
      const albumImages = await getAlbumImages(album.slug)
      // console.log(albumImages)
      // console.log(albumImages)
      imagesArr.push(...albumImages)
    }
    setAllImages(imagesArr)
  })

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-3 w-full ">
        <div class="flex flex-col w-full ">
          <div class="text-sm uppercase mb-2">
            SHOWING {allImages().length} OF {allImages().length} IMAGES
          </div>
          <div class="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-4">
            {allImages().map((image) => (
              // <PhotoCard photo={image} clickSupplier={ImageModal}/>
              // <PhotoThing image={image}/>

              <MyCustomCardComponent
                imagePath="src/assets/DSC07333.JPG"
                altText="A headshot of Priya against a brick wall background."
                name="Priya"
                age={25}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export function ImageModal(image: ImageMetadata) {
  return (
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div class="relative max-w-3xl w-full">
        <button
          class="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
        <img src={image.src} alt={"an image"} class="w-full h-auto rounded-lg" />
      </div>
    </div>
  )
}