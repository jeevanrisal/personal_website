import { Blocks, Brain, Wrench } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";

const strengths = [
  {
    title: "Engineering Fundamentals",
    icon: Blocks,
    items: [
      "Clean, maintainable code",
      "SDLC awareness, Agile exposure",
      "Testing foundations, code reviews",
      "Client-server architecture, REST"
    ]
  },
  {
    title: "Full-Stack Delivery",
    icon: Wrench,
    items: [
      "React + responsive UI",
      "Node.js/Express APIs",
      "MongoDB + SQL concepts",
      "Debugging, integration, deployment awareness"
    ]
  },
  {
    title: "Data + AI Curiosity",
    icon: Brain,
    items: [
      "Practical ML exposure and data workflows",
      "Validation, explainability, confidence scoring",
      "Privacy-conscious approach (synthetic data)"
    ]
  }
];

export default function Strengths() {
  return (
    <section className="section-wrap">
      <FadeIn>
        <h2 className="section-title">Building software teams can rely on</h2>
      </FadeIn>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {strengths.map((strength, index) => (
          <FadeIn key={strength.title} delay={90 * index}>
            <Magnetic className="magnetic-card h-full" strength={8}>
              <article className="glass-card card-lift h-full p-6">
                <strength.icon className="mb-4 h-5 w-5 text-accent" aria-hidden />
                <h3 className="text-xl font-semibold text-white">{strength.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {strength.items.map((item) => (
                    <li key={item} className="list-disc pl-1 marker:text-accent">
                      {item}
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
