"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#elpiso", label: "El Piso" },
  { href: "#tour", label: "Tour 360°" },
  { href: "#galeria", label: "Galería" },
  { href: "#documentacion", label: "Documentación" },
  { href: "#ubicacion", label: "El Barrio" },
  { href: "#contacto", label: "Contactar" },
];

const WA_MSG = encodeURIComponent(
  "Hola, me interesa el piso de Calle Doctor Iranzo 52, 2.º (Las Fuentes, Zaragoza). ¿Podéis enviarme más información?"
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[#EF3340] flex items-center justify-center shadow-lg shadow-[#EF3340]/20">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8L8 2L14 8V14H10V10H6V14H2V8Z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-semibold text-sm tracking-tight transition-colors ${scrolled ? "text-zinc-900" : "text-white"}`}>
                Adrián Botiza
              </span>
              <span className="text-[#53565A] text-[10px] tracking-widest uppercase">Inmobiliaria</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors duration-150 ${
                  scrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href={`https://wa.me/34648261617?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                scrolled
                  ? "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.855L.057 23.882l6.196-1.624A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.375l-.36-.213-3.676.964.98-3.584-.233-.373A9.818 9.818 0 012.182 12C2.182 6.554 6.554 2.182 12 2.182S21.818 6.554 21.818 12 17.446 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </Link>
            <Link
              href="tel:876645518"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[#EF3340] text-white text-xs font-semibold hover:bg-[#d42b38] transition-colors shadow-lg shadow-[#EF3340]/20"
            >
              876 645 518
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/60 hover:text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <Link
                href={`https://wa.me/34648261617?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-lg bg-zinc-100 text-zinc-700 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                WhatsApp
              </Link>
              <Link
                href="tel:876645518"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-3 py-3 rounded-lg bg-[#EF3340] text-white text-sm font-semibold hover:bg-[#d42b38] transition-colors"
              >
                Llamar
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
