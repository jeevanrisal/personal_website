import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";
import { education } from "@/data/siteData";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <FadeIn>
        <h2 className="section-title">Education</h2>
      </FadeIn>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {education.map((item, index) => (
          <FadeIn key={item.degree} delay={90 * index}>
            <Magnetic className="magnetic-card h-full" strength={8}>
              <article className="glass-card card-lift h-full p-6">
                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-2 text-slate-300">{item.institution}</p>
                <p className="mt-3 text-sm text-slate-400">{item.period}</p>
              </article>
            </Magnetic>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
