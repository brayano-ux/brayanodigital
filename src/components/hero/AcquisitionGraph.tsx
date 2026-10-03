export default function AcquisitionGraph() {
  return (
    <div className="relative bg-navy rounded-[20px] p-8 shadow-[0_24px_60px_rgba(11,18,32,0.16)] min-h-[420px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px 300px at 80% 0%, rgba(37,99,235,.25), transparent 60%), radial-gradient(400px 260px at 10% 100%, rgba(34,197,94,.18), transparent 60%)",
        }}
      />
      <svg viewBox="0 0 460 340" fill="none" className="relative w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <path className="graph-line-active" stroke="rgba(148,163,184,.35)" strokeWidth="1.4" d="M120,70 C170,70 170,140 220,140" />
        <path stroke="rgba(148,163,184,.35)" strokeWidth="1.4" strokeDasharray="4 5" d="M120,140 C170,140 170,140 220,140" />
        <path className="graph-line-active" stroke="rgba(148,163,184,.35)" strokeWidth="1.4" d="M220,140 C270,140 270,90 320,90" />
        <path className="graph-line-active" stroke="rgba(148,163,184,.35)" strokeWidth="1.4" d="M220,140 C270,140 270,190 320,190" />
        <path stroke="rgba(148,163,184,.35)" strokeWidth="1.4" strokeDasharray="4 5" d="M120,210 C170,210 170,140 220,140" />
        <path className="graph-line-active" stroke="rgba(148,163,184,.35)" strokeWidth="1.4" d="M320,90 C370,90 370,140 400,140" />
        <path className="graph-line-active" stroke="rgba(148,163,184,.35)" strokeWidth="1.4" d="M320,190 C370,190 370,140 400,140" />

        {[
          { x: 30, y: 52, w: 90, label: "Meta Ads" },
          { x: 30, y: 122, w: 90, label: "Site web" },
          { x: 30, y: 192, w: 90, label: "Réseaux" },
          { x: 220, y: 122, w: 100, label: "WhatsApp" },
          { x: 320, y: 72, w: 90, label: "IA" },
          { x: 320, y: 172, w: 90, label: "Suivi" },
        ].map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width={n.w} height="36" rx="8" fill="#111C2E" stroke="rgba(255,255,255,.14)" />
            <text x={n.x + 14} y={n.y + 22} fill="#CBD5E1" fontSize="10.5" fontWeight="700" letterSpacing=".02em">
              {n.label.toUpperCase()}
            </text>
          </g>
        ))}
        <circle className="graph-pulse" cx="400" cy="140" r="5" fill="#22C55E" />
        <text x="365" y="270" fill="#22C55E" fontSize="12">
          Client acquis
        </text>
      </svg>
      <div className="relative mt-5 flex justify-between text-[12.5px] font-semibold text-slate-400">
        <span>Flux d&apos;acquisition</span>
        <b className="text-white">Ads → WhatsApp → IA → Client</b>
      </div>
    </div>
  );
}
