import Image from "next/image";

import { ClipVideo } from "@/components/site/clip-video";
import type { Locale, Media } from "@/lib/content";
import { cn } from "@/lib/utils";

/** A photo or clip with its caption. `ratio` crops to a fixed box; without it photos keep their own shape. */
export function MediaFigure({
  media,
  lang,
  sizes,
  ratio,
  className,
  eager,
}: {
  media: Media;
  lang: Locale;
  sizes: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
}) {
  const box = ratio ?? (media.kind === "clip" ? "aspect-[9/16]" : undefined);
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden rounded-[3px] bg-navy-raised", box)}>
        {media.kind === "photo" ? (
          <Image
            src={media.src}
            alt={media.alt[lang]}
            sizes={sizes}
            placeholder="blur"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            {...(box ? { fill: true, className: "object-cover" } : { className: "h-auto w-full" })}
          />
        ) : (
          <ClipVideo src={media.src} poster={media.poster} label={media.alt[lang]} className="absolute inset-0 h-full w-full object-cover" />
        )}
      </div>
      {media.caption && <figcaption className="mt-2.5 text-sm leading-snug text-mist">{media.caption[lang]}</figcaption>}
    </figure>
  );
}
