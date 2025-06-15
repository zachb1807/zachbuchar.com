import { createSignal, For, Show } from "solid-js";
import { Portal } from "solid-js/web"

interface LightboxProps {
    images: { src: string; placeholder: string }[];
}

export default function Lightbox(props: LightboxProps) {
    const [open, setOpen] = createSignal(false);
    const [current, setCurrent] = createSignal<string | null>(null);

    console.log("hi");
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && open()) {
            setOpen(false);
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" && open() && current()) {
            nextImage();
        } else if (e.key === "ArrowLeft" && open() && current()) {
            prevImage();
        }
    });

    const nextImage = () => {
        if (open() && current()) {
            const currentIndex = props.images.findIndex(img => img.src === current());
            const nextIndex = (currentIndex + 1) % props.images.length;
            setCurrent(props.images[nextIndex].src);
        }
    };
    const prevImage = () => {
        if (open() && current()) {
            const currentIndex = props.images.findIndex(img => img.src === current());
            const prevIndex = (currentIndex - 1 + props.images.length) % props.images.length;
            setCurrent(props.images[prevIndex].src);
        }
    };

    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-3 w-full ">
                    <div class="flex flex-col w-full ">
                        <div class="text-sm uppercase mb-2">
                            SHOWING {props.images.length} OF {props.images.length} IMAGES
                        </div>
                        <div class="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-4">
                            <For each={props.images}>
                                {(img) => (
                                    <div
                                        class="rounded-lg object-cover cursor-pointer bg-center bg-cover aspect-square hover:opacity-70 transition-opacity duration-200"
                                        style={{ "background-image": `url(${img.placeholder})` }}
                                        onClick={() => {
                                            setOpen(true);
                                            setCurrent(img.src);
                                        }}
                                        aria-label="photo"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={e => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                setOpen(true);
                                                setCurrent(img.src);
                                            }
                                        }}
                                    />
                                )}
                            </For>
                        </div>

                        <Show when={open() && current()}>
                            <Portal >
                                <div class="fixed top-0 flex items-center justify-center bg-black inset-0 bg-opacity-40 backdrop-blur-md" onClick={() => setOpen(false)}>
                                    <div onClick={(e) => e.stopPropagation()} >
                                        <div
                                            class="relative"
                                            onTouchStart={e => {
                                                e.preventDefault();
                                                // Store initial touch X position
                                                (e.currentTarget as any).__touchStartX = e.touches[0].clientX;
                                            }}
                                            onTouchEnd={e => {
                                                e.preventDefault();
                                                const startX = (e.currentTarget as any).__touchStartX;
                                                const endX = e.changedTouches[0].clientX;
                                                if (startX !== undefined) {
                                                    const diff = endX - startX;
                                                    if (diff < -50) {
                                                        // Swipe left: next image
                                                        nextImage();
                                                    } else if (diff > 50) {
                                                        // Swipe right: previous image
                                                        prevImage();
                                                    }
                                                }
                                            }}
                                        >
                                            <img src={current()!} alt="full-size" class="max-h-[60vh] max-w-[75vw] rounded shadow-lg" />
                                            <div class="absolute -top-10 -right-10 p-2">
                                                <button
                                                    class="text-white hover:text-gray-400 font-bold text-xl transition-colors duration-200"
                                                    onClick={() => setOpen(false)}
                                                    aria-label="Close lightbox"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="absolute right-3 md:right-10 top-1/2 transform -translate-y-1/2">
                                            <button
                                                class="text-white hover:text-gray-400 font-bold text-xl transition-colors duration-200"
                                                onClick={nextImage}
                                                aria-label="Next image"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                        <div class="absolute left-3 md:left-10 top-1/2 transform -translate-y-1/2">

                                            <button
                                                class="text-white hover:text-gray-400 font-bold text-xl transition-colors duration-200"
                                                onClick={prevImage}
                                                aria-label="Previous image"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </Portal>
                        </Show>
                    </div>
                </div>
            </div>
        </>
    );
}
