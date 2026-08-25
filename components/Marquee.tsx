const ITEMS = [
  "Premium Quality",
  "Global Export",
  "Hand Selected",
  "Est. 1992",
] as const;

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-group" aria-hidden={hidden ? true : undefined}>
      {doubled.map((text, i) => (
        <span className="marquee-item" key={`${text}-${i}`}>
          {text}{" "}
          <span className="marquee-sep" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Brand highlights">
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
