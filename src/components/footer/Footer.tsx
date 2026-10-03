import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080D17] text-slate-400 pt-16 pb-7">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr_1fr] mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-extrabold text-white mb-3.5">
              <span className="relative w-[30px] h-[30px] rounded-lg bg-navy flex-none">
                <span className="absolute inset-[9px] rounded-sm bg-green" />
              </span>
              BRAYANO SERVICE
            </Link>
            <p className="text-sm max-w-[280px]">
              Agence digitale camerounaise. Publicité, sites web, WhatsApp, automatisation et intelligence
              artificielle au service de votre croissance.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wide mb-4 font-bold">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/etudes-de-cas" className="hover:text-white">Études de cas</Link></li>
              <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wide mb-4 font-bold">Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/services#meta-ads" className="hover:text-white">Meta Ads</Link></li>
              <li><Link href="/services#whatsapp-automatisation" className="hover:text-white">WhatsApp &amp; Automatisation</Link></li>
              <li><Link href="/services#sites-web" className="hover:text-white">Sites Web</Link></li>
              <li><Link href="/services#solutions-ia" className="hover:text-white">Solutions IA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs uppercase tracking-wide mb-4 font-bold">Contact</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>Douala, Cameroun</li>
              <li>WhatsApp</li>
              <li>contact@brayanoservice.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap gap-4 justify-between text-[12.5px]">
          <span>© 2026 Brayano Service. Tous droits réservés.</span>
          <ul className="flex gap-5">
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
