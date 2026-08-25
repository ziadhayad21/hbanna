/** SVG gradient defs referenced by decorative fruit SVGs (kept for parity). */
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <radialGradient id="gOrangeSkin" cx="35%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#FFC988" />
          <stop offset="40%" stopColor="#F2872E" />
          <stop offset="75%" stopColor="#CB5F17" />
          <stop offset="100%" stopColor="#8A3C0D" />
        </radialGradient>
        <radialGradient id="gDateSkin" cx="32%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#B87A3E" />
          <stop offset="45%" stopColor="#7A4420" />
          <stop offset="80%" stopColor="#4A280F" />
          <stop offset="100%" stopColor="#2B1608" />
        </radialGradient>
        <radialGradient id="gGrapeSkin" cx="32%" cy="26%" r="85%">
          <stop offset="0%" stopColor="#B9C98A" />
          <stop offset="45%" stopColor="#7C9450" />
          <stop offset="80%" stopColor="#4E6530" />
          <stop offset="100%" stopColor="#2E3E1C" />
        </radialGradient>
        <radialGradient id="gMangoSkin" cx="32%" cy="24%" r="85%">
          <stop offset="0%" stopColor="#FFDD7A" />
          <stop offset="40%" stopColor="#F5A93B" />
          <stop offset="70%" stopColor="#E06B2E" />
          <stop offset="100%" stopColor="#8C3B21" />
        </radialGradient>
        <radialGradient id="gTomatoSkin" cx="33%" cy="26%" r="85%">
          <stop offset="0%" stopColor="#FF8F6B" />
          <stop offset="45%" stopColor="#E24B2E" />
          <stop offset="80%" stopColor="#A32B18" />
          <stop offset="100%" stopColor="#5E1A0E" />
        </radialGradient>
        <linearGradient id="gLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5A7B45" />
          <stop offset="100%" stopColor="#2E4420" />
        </linearGradient>
      </defs>
    </svg>
  );
}
