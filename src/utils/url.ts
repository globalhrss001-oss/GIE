function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${clean}`;
}

/** Build a path that respects Astro `base` (e.g. /GIE/) */
export function url(path: string): string {
  return withBase(path);
}

/** Public asset path under /public */
export function asset(path: string): string {
  return withBase(path);
}
