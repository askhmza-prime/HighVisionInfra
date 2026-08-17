export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Customer Review",
    role: "Demo testimonial",
    rating: 5,
    message:
      "A placeholder testimonial for the Phase 1 frontend. Real customer reviews will be added before launch.",
  },
  {
    id: "testimonial-2",
    name: "Customer Review",
    role: "Demo testimonial",
    rating: 5,
    message:
      "A placeholder testimonial for the Phase 1 frontend. Real customer reviews will be added before launch.",
  },
  {
    id: "testimonial-3",
    name: "Customer Review",
    role: "Demo testimonial",
    rating: 5,
    message:
      "A placeholder testimonial for the Phase 1 frontend. Real customer reviews will be added before launch.",
  },
];

export default TESTIMONIALS_DATA;
