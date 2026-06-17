import Link from "next/link";

const footerLinks = {
  Servicios: [
    { label: "Venta de Inmuebles", href: "#servicios" },
    { label: "Compra de Vivienda", href: "#servicios" },
    { label: "Alquiler", href: "#servicios" },
    { label: "Home Staging", href: "#servicios" },
    { label: "Asesoramiento VPO", href: "#vpo" },
  ],
  Empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Casos de éxito", href: "#testimonios" },
    { label: "Blog inmobiliario", href: "#" },
    { label: "Contacto", href: "mailto:info@adrianbotiza.es" },
  ],
  Legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Aviso Legal", href: "#" },
    { label: "Política de Cookies", href: "#" },
    { label: "RGPD", href: "#" },
  ],
};

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
            <p className="text-zinc-500 text-sm leading-relaxed mb-2 max-w-[200px]">
              Detrás de cada vivienda hay una vida y hay una historia.
            </p>
            <p className="text-zinc-600 text-xs mb-5 max-w-[200px]">
              Especialistas en Zaragoza y Valdespartera
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-5">
              <a
                href="tel:876645518"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                876 645 518 · 648 261 617
              </a>
              <a
                href="mailto:info@adrianbotiza.es"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
              >
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
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 5.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
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
