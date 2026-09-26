import { SITE_URL } from './site';

/** Articles du blog : source unique pour la liste, le sitemap et le JSON-LD. */
export const POSTS = [
  {
    slug: 'echelle-de-borg',
    title: 'Échelle de Borg (RPE) : comment mesurer votre effort pour mieux vous entraîner',
    shortTitle: "Guide de l'échelle de Borg (RPE)",
    excerpt: "Apprenez à utiliser l'échelle de Borg pour calibrer vos entraînements avec précision.",
    tag: 'Méthodologie',
    image: '/img/blog/borg_hero_holographic_7_1776028139870.png',
    published: '2026-04-11',
    modified: '2026-04-11',
  },
  {
    slug: 'maxi-race',
    title: "Maxi-Race d'Annecy 2026 : comment préparer et courir les 100 km intelligemment",
    shortTitle: "Maxi-Race d'Annecy 2026 : préparer les 100 km",
    excerpt: "Stratégie de course, plan de marche, nutrition et gestion du dénivelé sur 100 km autour du lac d'Annecy.",
    tag: 'Événement local',
    image: 'https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1200&auto=format&fit=crop',
    published: '2026-03-07',
    modified: '2026-04-14',
  },
  {
    slug: 'vma-vs-vitesse-critique',
    title: "Vitesse Critique (VC) vs VMA : quelle allure pour s'entraîner vraiment efficacement ?",
    shortTitle: 'Vitesse Critique vs VMA : quelle allure ?',
    excerpt: 'Pourquoi la Vitesse Critique est plus utile que la VMA pour calibrer vos zones et vos séances.',
    tag: 'Physiologie',
    image: '/img/vma-vs-vc-header.png',
    published: '2026-04-10',
    modified: '2026-04-18',
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

/** Pages principales : date de dernière modification réelle du contenu (à mettre à jour lors d'un vrai changement). */
export const STATIC_PAGES = [
  { path: '/', modified: '2026-09-26' },
  { path: '/trail', modified: '2026-09-26' },
  { path: '/route', modified: '2026-09-26' },
  { path: '/coach-trail-haute-savoie', modified: '2026-09-26' },
  { path: '/offres', modified: '2026-09-26' },
  { path: '/outils', modified: '2026-09-26' },
  { path: '/a-propos', modified: '2026-09-26' },
  { path: '/contact', modified: '2026-09-26' },
  { path: '/blog', modified: '2026-09-26' },
  { path: '/mentions-legales', modified: '2026-09-26' },
  { path: '/cgv', modified: '2026-09-26' },
  { path: '/politique-de-confidentialite', modified: '2026-09-26' },
];

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`;
