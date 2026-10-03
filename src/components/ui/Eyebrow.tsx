export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-green-dark">
      <span className="w-1.5 h-1.5 rounded-full bg-green" />
      {children}
    </span>
  );
}
