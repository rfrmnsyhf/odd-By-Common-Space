// Curated photo placeholders. Owner replaces files at these paths with final photos.
// All images from Unsplash free license (https://unsplash.com/license).
// Style: flash photography, warm ambient, editorial.

export type Photo = {
  src: string;
  alt: string;
  /** Used to set priority for LCP. */
  priority?: boolean;
};

// LCP hero — first visible image. Wide editorial.
export const heroPhoto: Photo = {
  src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
  alt: 'Interior of odd by Common Space, warm ambient lighting',
  priority: true,
};

export const signaturePhoto: Photo = {
  src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
  alt: 'Signature coffee drink in editorial lighting',
};

export const foodPhoto: Photo = {
  src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1600&q=80',
  alt: 'Plated comfort food, editorial composition',
};

export const spacePhotos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80',
    alt: 'Indoor dining area with warm wood and natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1400&q=80',
    alt: 'Upstairs seating, casual and bright',
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=80',
    alt: 'Outdoor patio with greenery',
  },
];

export const drinkPhotos: Photo[] = [
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    alt: 'Espresso with latte art',
  },
  {
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
    alt: 'Iced coffee in clear glass',
  },
  {
    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80',
    alt: 'Matcha latte with latte art',
  },
  {
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    alt: 'Coffee beans and bar tools',
  },
];
