/** Build a path that respects Astro `base` (e.g. /GIE/) */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

/** Public asset path under /public */
export function asset(path: string): string {
  return url(path.startsWith('/') ? path.slice(1) : path);
}
