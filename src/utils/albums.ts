export async function getAlbumImages(albumId: string) {
  // 1. List all album files from collections path
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/albums/**/*.{jpeg,jpg,JPG}"
  );

  // 2. Filter images by albumId
  const filteredEntries = Object.entries(images).filter(([key]) =>
    key.includes(albumId)
  );

  // 3. Resolve each image and add its original path as src
  const resolvedImages = await Promise.all(
    filteredEntries.map(async ([key, loader]) => {
      const metadata = await loader();
      return {
        ...metadata.default,
        src: key, // use original key as src
      };
    })
  );

  // 4. Optionally shuffle
  // resolvedImages.sort(() => Math.random() - 0.5);

  return resolvedImages;
}
