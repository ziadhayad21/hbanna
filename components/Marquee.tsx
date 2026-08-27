"use client";

import { useLanguage } from "@/contexts/LanguageProvider";

function MarqueeGroup({
  items,
  hidden,
}: {
  items: string[];
  hidden?: boolean;
}) {
  const doubled = [...items, ...items];
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
  const { t } = useLanguage();
  const items = [t.marquee.q1, t.marquee.q2, t.marquee.q3, t.marquee.q4];

  return (
    <div className="marquee" aria-label={t.marquee.q1}>
      <div className="marquee-track">
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} hidden />
      </div>
    </div>
  );
}
