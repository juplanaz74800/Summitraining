import { POSTS, STATIC_PAGES, absoluteUrl } from '@/lib/pages';

/**
 * Sitemap dynamique — les dates lastModified viennent de src/lib/pages.js
 * et reflètent la dernière modification réelle du contenu (pas la date du build).
 */
export default function sitemap() {
  const pages = STATIC_PAGES.filter(({ path }) => !path.startsWith('/blog/')).map(({ path, modified }) => ({
    url: absoluteUrl(path),
    lastModified: modified,
  }));

  const posts = POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.modified,
  }));

  return [...pages, ...posts];
}
