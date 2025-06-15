/**
 * Checks if the current environment is a browser.
 *
 * This is useful for distinguishing between server-side and client-side
 * execution in environments like Next.js or when using SSR frameworks.
 *
 * @returns `true` if running in the browser (i.e., `window` is defined), otherwise `false`.
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}
