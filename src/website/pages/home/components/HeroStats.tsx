const stats = [
  {
    value: "5000+",
    label: "Happy Travelers",
  },
  {
    value: "25+",
    label: "Countries",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">{item.value}</h3>

          <p className="mt-2 text-sm text-slate-300">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
