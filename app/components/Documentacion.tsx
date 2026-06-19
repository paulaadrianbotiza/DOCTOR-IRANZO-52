"use client";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

const documentos = [
  {
    nombre: "Nota simple del Registro de la Propiedad",
    estado: "Disponible bajo solicitud",
    disponible: true,
    href: null,
  },
  {
    nombre: "Referencia catastral",
    estado: "Disponible",
    disponible: true,
    href: "/DOCUMENTACIÓN/referencia catastral.pdf",
  },
  {
    nombre: "Valor de referencia catastral",
    estado: "Disponible",
    disponible: true,
    href: "/DOCUMENTACIÓN/valor-referencia-catastral.pdf",
  },
  {
    nombre: "Plano de distribución",
    estado: "Disponible",
    disponible: true,
    href: "/DOCUMENTACIÓN/plano.pdf",
  },
  {
    nombre: "Certificado energético",
    estado: "En trámite",
    disponible: false,
    href: null,
  },
  {
    nombre: "ITE del edificio",
    estado: "Disponible bajo solicitud",
    disponible: true,
    href: null,
  },
];

const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export function Documentacion() {
  return (
    <section id="documentacion" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <p className="text-[10px] font-semibold text-[#EF3340] tracking-[0.3em] uppercase mb-4">
            Documentación
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            Documentos del inmueble
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
            Los documentos disponibles se pueden descargar directamente. Para el
            resto, contacta con nuestro equipo.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-zinc-200 overflow-hidden">
            {documentos.map((doc) => (
              <div
                key={doc.nombre}
                className="group relative flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors duration-150"
              >
                {/* Left accent on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#EF3340] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-r" />

                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex-shrink-0 text-zinc-300 group-hover:text-zinc-500 transition-colors duration-150">
                    <DocIcon />
                  </div>
                  <p className="text-zinc-700 text-sm font-medium group-hover:text-zinc-900 transition-colors duration-150 truncate">
                    {doc.nombre}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                      !doc.disponible
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : doc.href
                        ? "bg-zinc-100 text-zinc-500"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {doc.estado}
                  </span>

                  {doc.href ? (
                    <Link
                      href={doc.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 hover:bg-[#EF3340] text-zinc-500 hover:text-white transition-all duration-150"
                      title={`Descargar ${doc.nombre}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DownloadIcon />
                    </Link>
                  ) : (
                    <div className="w-8 h-8" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-zinc-400 text-xs mt-4 leading-relaxed">
            Para solicitar documentación adicional, contacta en{" "}
            <Link href="mailto:info@adrianbotiza.es" className="text-zinc-600 hover:text-zinc-900 underline underline-offset-2 transition-colors">
              info@adrianbotiza.es
            </Link>{" "}
            o llama al 876 645 518.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
