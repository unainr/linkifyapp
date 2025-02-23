const stats = [
  {
    number: "1M+",
    label: "Active Users",
  },
  {
    number: "10M+",
    label: "Links Created",
  },
  {
    number: "100M+",
    label: "Monthly Clicks",
  },
  {
    number: "150+",
    label: "Countries",
  },
]

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary dark:bg-black dark:text-white text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold md:text-5xl">{stat.number}</div>
              <div className="mt-2 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

