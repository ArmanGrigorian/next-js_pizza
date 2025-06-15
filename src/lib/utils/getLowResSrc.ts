/**
 * Generates a low-resolution variant URL from the original image URL
 * by inserting the "low-res" segment after the domain or base path.
 *
 * Example:
 *   Input:  "https://example.com/images/photo.jpg"
 *   Output: "https://example.com/low-res/images/photo.jpg"
 *
 * Assumes that the URL structure is standard and includes a protocol,
 * domain, and path (e.g., https://domain.com/path/to/file.jpg).
 *
 * @param src - The original image URL as a string.
 * @returns A modified image URL string that includes the "low-res" segment.
 */

export function getLowResSrc(src: string): string {
  return src.split("/").toSpliced(2, 0, "low-res").join("/");
}