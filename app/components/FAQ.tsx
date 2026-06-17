"use client";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    q: "¿Puedo visitar el piso?",
    a: "Por el momento no es posible realizar visitas presenciales. El inmueble está actualmente alquilado y habitado. Para cualquier interesado disponemos de reportaje fotográfico completo y tour virtual Matterport 360°. Si deseas programar una visita en cuanto sea posible, contacta con nuestro equipo y te avisamos.",
  },
  {
    q: "¿Cuál es el precio final de compra con todos los gastos?",
    a: "El precio de venta es de 130.000 €. A esto hay que añadir: ITP (Impuesto de Transmisiones Patrimoniales) del 8% en Aragón, honorarios de agencia del 3% + IVA (21%), y gastos de notaría y registro aproximadamente entre 700 y 1.000 €. El coste total estimado incluyendo todos los gastos y el precio de venta se sitúa en torno a 148.000–150.000 €.",
  },
  {
    q: "¿Por qué es una buena inversión?",
    a: "El piso está actualmente alquilado, lo que garantiza rentabilidad inmediata desde el primer día sin necesidad de buscar inquilino. Las Fuentes es un barrio consolidado y con gran demanda de alquiler, lo que asegura continuidad. El precio de 130.000 € lo posiciona en un segmento con alta demanda y buen potencial de revalorización en Zaragoza.",
  },
  {
    q: "¿Cómo es el barrio de Las Fuentes?",
    a: "Las Fuentes es uno de los barrios más consolidados y con mayor identidad de Zaragoza. Tiene todos los servicios a pie de calle — supermercados, colegios, centros de salud, comercios de proximidad — y está muy bien comunicado con el centro y el resto de la ciudad en transporte público. La Plaza de las Aguadoras y el Parque Bruil son dos de sus espacios más valorados por los vecinos.",
  },
  {
    q: "¿Cómo puedo obtener más información o documentación?",
    a: "Puedes llamarnos directamente al 876 645 518 (mañanas y tardes de lunes a viernes) o escribirnos a info@adrianbotiza.es. En menos de 24 horas te enviamos la ficha completa del inmueble con todas las características, documentación disponible y cualquier información adicional que necesites.",
  },
  {
    q: "¿Tengo un piso y quiero venderlo. ¿Cómo podéis ayudarme?",
    a: "Con el mismo nivel de dedicación que aplicamos a cada propiedad que gestionamos. Empezamos con una tasación gratuita basada en datos reales del mercado de Zaragoza. Después diseñamos un plan de marketing personalizado: fotografía profesional, tour virtual 360°, publicación en todos los portales y gestión activa de compradores. Solo cobramos comisión si vendemos. Sin letra pequeña.",
  },
  {
    q: "¿Cuánto cobra la agencia por vender mi piso?",
    a: "Trabajamos solo a éxito. Si no vendemos tu piso, no cobramos. Los honorarios exactos se acuerdan al firmar el encargo de venta y dependen del tipo de propiedad y su ubicación. Contacta con nosotros para conocer las condiciones sin ningún compromiso.",
  },
  {
    q: "¿Cuánto tiempo tarda en venderse un piso con vuestra gestión?",
    a: "La media del mercado en Zaragoza es de unos 150 días. Con nuestra metodología — fotografía profesional, tour 360°, publicación inmediata en todos los portales y gestión activa de compradores — la media de nuestros clientes es de aproximadamente 90 días. Cada caso es distinto, pero siempre trabajamos para acortar el plazo al máximo.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${
        open
          ? "bg-zinc-900 border-zinc-700"
          : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <span className="font-medium text-white text-sm leading-snug">
          {question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`flex-shrink-0 mt-0.5 text-zinc-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-xs font-medium mb-5">
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Resolvemos tus Dudas
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Sobre el piso, el proceso de compra y cómo trabajamos.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
