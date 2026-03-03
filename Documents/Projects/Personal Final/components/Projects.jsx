"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";
import { projects } from "@/data/siteData";

const filters = ["All", "Full-stack", "Frontend", "Data"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const mobileCarouselRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const mobileLoopProjects = useMemo(() => {
    if (filteredProjects.length <= 1) return filteredProjects;
    return [...filteredProjects, ...filteredProjects, ...filteredProjects];
  }, [filteredProjects]);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    if (!carousel || filteredProjects.length <= 1) return;

    let snapTimer = 0;

    const setupPosition = () => {
      const segmentWidth = carousel.scrollWidth / 3;
      carousel.scrollLeft = segmentWidth;
    };

    const snapToNearest = () => {
      const cards = carousel.querySelectorAll("[data-loop-card='true']");
      if (!cards.length) return;

      const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2;
      let nearest = cards[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = card;
        }
      });

      const nextLeft = nearest.offsetLeft - (carousel.clientWidth - nearest.clientWidth) / 2;
      carousel.scrollTo({ left: nextLeft, behavior: "auto" });
    };

    setupPosition();
    snapToNearest();

    const onScroll = () => {
      const segmentWidth = carousel.scrollWidth / 3;
      if (!segmentWidth) return;

      if (carousel.scrollLeft <= segmentWidth * 0.08) {
        carousel.scrollLeft += segmentWidth;
      } else if (carousel.scrollLeft >= segmentWidth * 1.92) {
        carousel.scrollLeft -= segmentWidth;
      }

      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(snapToNearest, 90);
    };

    carousel.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setupPosition);

    return () => {
      window.clearTimeout(snapTimer);
      carousel.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setupPosition);
    };
  }, [filteredProjects.length, activeFilter]);

  return (
    <section id="projects" className="section-wrap">
      <FadeIn>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Focused on practical delivery, maintainable code, and clear problem framing.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition ${
                    active
                      ? "border-accent bg-accent/20 text-slate-100"
                      : "border-edge bg-charcoal/50 text-slate-300 hover:border-accent/60"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <div
        ref={mobileCarouselRef}
        className="mt-8 -mx-4 flex gap-5 overflow-x-auto px-4 pb-3 snap-x snap-mandatory [scroll-padding-inline:50%] [scroll-behavior:auto] lg:hidden"
        role="region"
        aria-label="Projects carousel"
      >
        {mobileLoopProjects.map((project, index) => (
          <FadeIn
            key={`${project.title}-${index}`}
            delay={40 * (index % Math.max(filteredProjects.length, 1))}
            className="w-[78vw] max-w-[20rem] shrink-0 snap-center snap-always sm:w-[66vw]"
            data-loop-card="true"
          >
            <Magnetic className="magnetic-card h-full" strength={8}>
              <article className="glass-card card-lift h-full min-h-[32rem] p-6 sm:min-h-[30rem]">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc pl-1 marker:text-electric">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-edge bg-charcoal/50 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={project.codeLink} className="btn-secondary focus-ring inline-flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Code
                  </a>

                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      className="btn-secondary focus-ring inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                      Coming soon <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  )}

                  {project.demoStatus === "Coming soon" ? (
                    <span className="rounded-full border border-orange/30 bg-orange/10 px-2.5 py-1 text-xs text-orange">
                      Demo coming soon
                    </span>
                  ) : null}
                </div>
              </article>
            </Magnetic>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 hidden gap-5 lg:grid lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.title} delay={80 * index}>
            <Magnetic className="magnetic-card h-full" strength={8}>
              <article className="glass-card card-lift h-full p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc pl-1 marker:text-electric">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-edge bg-charcoal/50 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={project.codeLink} className="btn-secondary focus-ring inline-flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Code
                  </a>

                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      className="btn-secondary focus-ring inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                      Coming soon <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  )}

                  {project.demoStatus === "Coming soon" ? (
                    <span className="rounded-full border border-orange/30 bg-orange/10 px-2.5 py-1 text-xs text-orange">
                      Demo coming soon
                    </span>
                  ) : null}
                </div>
              </article>
            </Magnetic>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
