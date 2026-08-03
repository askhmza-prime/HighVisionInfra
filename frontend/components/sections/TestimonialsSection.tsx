import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Property Investor",
    review:
      "The entire buying experience was transparent and hassle-free. High Vision Infra delivered exactly what they promised.",
  },
  {
    name: "Sunita Sharma",
    role: "Home Buyer",
    review:
      "Excellent customer support, premium layouts and clear documentation. Highly recommended for first-time buyers.",
  },
  {
    name: "Mohammed Arif",
    role: "Business Owner",
    review:
      "Prime location, excellent appreciation potential and a very professional team throughout the process.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold text-brand-emerald sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-600">
            Real experiences from customers who trusted High Vision Infra.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-brand-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <h3 className="font-semibold text-brand-emerald">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
