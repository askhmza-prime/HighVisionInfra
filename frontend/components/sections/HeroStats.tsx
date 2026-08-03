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
                                              <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                                                    {stats.map((stat) => (
                                                            <div key={stat.label}>
                                                                      <h3 className="text-2xl font-bold text-brand-emerald sm:text-3xl">
                                                                                  {stat.value}
                                                                                            </h3>

                                                                                                      <p className="mt-1 text-sm text-gray-500">
                                                                                                                  {stat.label}
                                                                                                                            </p>
                                                                                                                                    </div>
                                                                                                                                          ))}
                                                                                                                                              </div>
                                                                                                                                                );
                                                                                                                                                }
]