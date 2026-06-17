import { AnimatedSection } from "./AnimatedSection";

const puntos = [
  {
    title: "Actualmente alquilado",
    desc: "El inmueble tiene inquilinos con pagos puntuales. Rentabilidad desde el primer día sin gestión inicial.",
  },
  {
    title: "Buen estado de conservación",
    desc: "Sin necesidad de reforma. Listo para entrar a vivir en cuanto finalice el arrendamiento actual.",
  },
  {
    title: "Interior con ascensor",
    desc: "Segunda planta interior. Tranquilo, sin ruido de calle, con acceso por ascensor.",
  },
  {
    title: "Distribución funcional",
    desc: "47 m² útiles bien aprovechados: salón-comedor, 2 dormitorios, cocina y baño completo.",
  },
];

export function ElPiso() {
  return (
    <section id="elpiso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <AnimatedSection>
            <p className="text-[10px] font-semibold text-[#53565A] tracking-[0.3em] uppercase mb-4">
              El Piso
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">
              Un piso en buen estado,<br />listo para rentabilizar
            </h2>
            <div className="space-y-4 text-zinc-600 text-base leading-relaxed">
              <p>
                El piso de la Calle Doctor Iranzo 52, 2.º cuenta con 58 m² construidos
                (47 m² útiles) distribuidos en salón-comedor, dos dormitorios, cocina
                y baño completo. Segunda planta interior con ascensor en edificio de 1960.
              </p>
              <p>
                El inmueble se encuentra en buen estado general de conservación, sin
                necesidad de obra ni reforma previa. Actualmente está arrendado a
                inquilinos con historial de pagos puntuales, lo que convierte esta
                propiedad en una inversión con rentabilidad inmediata y sin gestión inicial.
              </p>
              <p>
                Tanto para inversores que buscan rendimiento desde el primer día como para
                quienes desean adquirir una primera vivienda con la opción de ocuparla
                más adelante, este piso responde a ambos perfiles.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: staggered highlight cards */}
          <div className="space-y-3 pt-16 lg:pt-0">
            {puntos.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 80} direction="left">
                <div className="group flex gap-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300 transition-all duration-200 cursor-default">
                  <span className="flex-shrink-0 text-[#EF3340] font-bold text-xs font-mono mt-0.5 w-5 opacity-40 group-hover:opacity-70 transition-opacity duration-200">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-zinc-900 font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
