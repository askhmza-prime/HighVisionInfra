const stats = [
  {
    value: "500+",
    label: "Happy Customers",
  },
  {
    value: "10+",
    label: "Premium Projects",
  },
  {
    value: "100%",
    label: "Verified Properties",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 border-t border-brand-emerald/10 pt-7">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`pr-3 ${
            index !== 0
              ? "border-l border-brand-emerald/10 pl-3 sm:pl-5"
              : ""
          }`}
        >
          <p className="text-xl font-semibold tracking-tight text-brand-emerald sm:text-2xl">
            {stat.value}
          </p>

          <p className="mt-1.5 max-w-[110px] text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-slate-500 sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
