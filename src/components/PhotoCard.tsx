import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import AlbumCard from "./AlbumCard"
// import { getAlbumImages } from "../utils/albums"


type PhotoCardProps = {
    image: ImageMetadata | undefined;
    clickSupplier?: (photo: ImageMetadata) => void;
};

export default function PhotoCard({ image }: PhotoCardProps) {
    return (
            <div
                class={`flex items-center justify-center aspect-square rounded-md relative bg-cover bg-blend-multiply transition-colors cursor-pointer`}
                style={{ "background-image": `url(${image?.src})` }}
            >
                <div class="text-white z-10 text-center transition-all duration-300 ease-in-out overflow-hidden">
                </div>
            </div>

    )
}