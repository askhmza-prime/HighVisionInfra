export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Featured Development",
    category: "Projects",
    image: "/images/hero/hero-banner.jpg",
  },
  {
    id: "gallery-2",
    title: "Community View",
    category: "Projects",
    image: "/images/hero/hero-banner.jpg",
  },
  {
    id: "gallery-3",
    title: "Premium Living",
    category: "Lifestyle",
    image: "/images/hero/hero-banner.jpg",
  },
  {
    id: "gallery-4",
    title: "Planned Development",
    category: "Infrastructure",
    image: "/images/hero/hero-banner.jpg",
  },
  {
    id: "gallery-5",
    title: "Modern Community",
    category: "Projects",
    image: "/images/hero/hero-banner.jpg",
  },
  {
    id: "gallery-6",
    title: "High Vision Infra",
    category: "Brand",
    image: "/images/hero/hero-banner.jpg",
  },
];

export default GALLERY_DATA;
