import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";
import { experiences } from "@/data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <FadeIn>
        <h2 className="section-title">Experience</h2>
      </FadeIn>

      <div className="relative mt-8 space-y-6 border-l border-edge/80 pl-6">
        {experiences.map((item, index) => (
          <FadeIn key={`${item.company}-${item.period}`} delay={80 * index}>
            <Magnetic className="magnetic-card" strength={7}>
              <article className="glass-card card-lift relative p-5">
                <span
                  aria-hidden
                  className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border border-accent bg-ink"
                />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.company} <span className="text-slate-300">- {item.role}</span>
                  </h3>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc pl-1 marker:text-accent">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Magnetic>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
