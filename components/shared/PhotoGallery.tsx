import Image from "next/image";
import type { Project } from "@/types/project";

export function PhotoGallery({ photos }: { photos: Project["photos"] }) {
  if (!photos?.length) return null;
  return <div className="mt-6 grid gap-6 sm:grid-cols-2">
    {photos.map((photo) => <figure key={photo.src}>
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="w-full rounded-lg border border-line" />
      {photo.caption && <figcaption className="mt-2 text-sm leading-6 text-muted">{photo.caption}</figcaption>}
    </figure>)}
  </div>;
}
