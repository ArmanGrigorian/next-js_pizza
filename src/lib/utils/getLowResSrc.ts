/**
 * Converts an image URL to a low-resolution `.webp` version.
 *
 * This function:
 * - Inserts a `low-res` segment after the domain (3rd segment of the URL).
 * - Changes the file extension to `.webp`.
 *
 * Example:
 * ```ts
 * getLowResSrc("https://cdn.example.com/images/pizza.jpg");
 * // => "https://cdn.example.com/low-res/images/pizza.webp"
 * ```
 *
 * @param src - The original image URL.
 * @returns A modified URL pointing to the low-res WebP version.
 */
export function getLowResSrc(src: string): string {
  const parts = src.split("/");

  parts.splice(2, 0, "low-res");
  
  const filename = parts.pop()!;
  const base = filename.split(".")[0];
  parts.push(`${base}.webp`);

  return parts.join("/");
}
