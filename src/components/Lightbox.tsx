import { createSignal, For, Show } from "solid-js";

interface LightboxProps {
    images: { src: string; placeholder: string }[];
}

export default function Lightbox(props: LightboxProps) {
    const [open, setOpen] = createSignal(false);
    const [current, setCurrent] = createSignal<string | null>(null);

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
                                        class="rounded-lg object-cover cursor-pointer bg-center bg-cover aspect-square"
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
                            <div
                                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                                onClick={() => setOpen(false)}
                                tabIndex={-1}
                                role="dialog"
                                aria-modal="true"
                            >
                                <img
                                    src={current()!}
                                    alt="full-size"
                                    class="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
                                    onClick={e => e.stopPropagation()} // Prevent closing when clicking the image
                                />
                                <button
                                    class="absolute top-4 right-6 text-white text-3xl font-bold"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                            </div>
                        </Show>
                    </div>
                </div>
            </div>
        </>
    );
}
