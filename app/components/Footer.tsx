import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Servicios: [
    { label: "Venta de inmuebles",  href: "https://www.adrianbotiza.es/vender-piso-zaragoza/" },
    { label: "Compra de vivienda",  href: "https://www.adrianbotiza.es/servicios-al-comprador/" },
    { label: "Alquiler",            href: "http://www.adrianbotiza.es/alquiler" },
    { label: "Home Staging",        href: "https://www.adrianbotiza.es/home-staging-inmobiliario-zaragoza/" },
    { label: "Experto VPO",         href: "https://www.adrianbotiza.es/experto-vpo-zaragoza/" },
  ],
  Empresa: [
    { label: "Por qué elegirnos",   href: "https://www.adrianbotiza.es/por-que-elegirnos/" },
    { label: "Nuestro equipo",      href: "https://www.adrianbotiza.es/equipo-inmobiliario/" },
    { label: "Blog inmobiliario",   href: "https://www.adrianbotiza.es/blog-inmobiliario-zaragoza/" },
    { label: "Contacto",            href: "https://www.adrianbotiza.es/contacto/#formulariocontacto" },
  ],
  Legal: [
    { label: "Política de privacidad",      href: "https://adrianbotiza.es/politica-de-privacidad" },
    { label: "Política de cookies",         href: "https://adrianbotiza.es/politica-de-cookies" },
    { label: "Información al consumidor",   href: "https://www.adrianbotiza.es/informacion-al-consumidor/" },
    { label: "Aviso legal",                 href: "https://www.adrianbotiza.es/aviso-legal/" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/adrianbotiza.es",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/adrianbotiza/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@abinmobiliaria_",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.23 8.23 0 004.82 1.54V6.97a4.86 4.86 0 01-1.05-.28z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#EF3340] flex items-center justify-center shadow-lg shadow-[#EF3340]/20">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8L8 2L14 8V14H10V10H6V14H2V8Z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-white text-sm">Adrián Botiza</span>
                <span className="text-zinc-500 text-[10px] tracking-wide">INMOBILIARIA</span>
              </div>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-1 max-w-[200px]">
              Detrás de cada vivienda hay una vida y hay una historia.
            </p>
            <p className="text-zinc-600 text-xs mb-5 max-w-[200px]">
              Especialistas en Zaragoza y Valdespartera
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-5">
              <a href="tel:876645518" className="flex items-center gap-2 text-zinc-500 hover:text-[#EF3340] text-xs transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                876 645 518 · 648 261 617
              </a>
              <a href="mailto:info@adrianbotiza.es" className="flex items-center gap-2 text-zinc-500 hover:text-[#EF3340] text-xs transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@adrianbotiza.es
              </a>
              <div className="flex items-start gap-2 text-zinc-600 text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Paseo de los Olvidados, 49<br />50019 Zaragoza
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-zinc-800 hover:border-[#EF3340] hover:bg-[#EF3340]/10 flex items-center justify-center text-zinc-500 hover:text-[#EF3340] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#EF3340] text-[10px] font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-200 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Adrián Botiza Inmobiliaria. Todos los derechos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Especialistas en Zaragoza y Valdespartera.
          </p>
        </div>
      </div>
    </footer>
  );
}
