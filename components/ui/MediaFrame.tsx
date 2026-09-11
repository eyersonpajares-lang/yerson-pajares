import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Slot for a project photo/screenshot. When `src` is set (once real
 * photos, P6 screenshots or dashboards are uploaded via the CMS) it
 * renders a real, lazily-loaded image. Until then it degrades to a
 * quiet blueprint-grid panel with the project index — never a stock
 * photo or a fabricated screenshot standing in for real work.
 */
export function MediaFrame({
  src,
  alt,
  index,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority,
  fit = "cover",
}: {
  src?: string;
  alt: string;
  index?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "contain" keeps the whole image visible (e.g. a logo) instead of cropping to fill the frame. */
  fit?: "cover" | "contain";
}) {
  if (src) {
    if (fit === "contain") {
      return (
        <div className={cn("flex items-center justify-center", className)}>
          <div className="relative aspect-square w-[160px] shrink-0 overflow-hidden border border-line bg-paper-dim p-6 sm:w-[180px] md:w-[200px] md:p-7">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="200px"
              priority={priority}
              className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden bg-paper-dim", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "blueprint-grid relative flex items-end justify-start overflow-hidden border border-line bg-paper-dim/60 p-5",
        className
      )}
      aria-hidden="true"
    >
      {index && (
        <span className="font-display text-6xl text-line md:text-7xl">{index}</span>
      )}
    </div>
  );
}
