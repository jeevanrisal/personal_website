'use client';

import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Magnetic from '@/components/Magnetic';
import { socialLinks } from '@/data/siteData';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const orb = orbRef.current;
    if (!section || !headline || !orb) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    let sectionRect = section.getBoundingClientRect();

    let orbTargetX = sectionRect.width * 0.72;
    let orbTargetY = sectionRect.height * 0.36;
    let orbCurrentX = orbTargetX;
    let orbCurrentY = orbTargetY;
    let orbHalfWidth = orb.offsetWidth / 2;
    let orbHalfHeight = orb.offsetHeight / 2;

    let gradientTargetX = 50;
    let gradientTargetY = 50;
    let gradientCurrentX = 50;
    let gradientCurrentY = 50;

    let rafId = 0;

    const paintOrb = () => {
      orb.style.transform = `translate3d(${orbCurrentX - orbHalfWidth}px, ${orbCurrentY - orbHalfHeight}px, 0)`;
    };

    const refreshMetrics = () => {
      sectionRect = section.getBoundingClientRect();
      orbHalfWidth = orb.offsetWidth / 2;
      orbHalfHeight = orb.offsetHeight / 2;
    };

    const animate = () => {
      orbCurrentX += (orbTargetX - orbCurrentX) * 0.1;
      orbCurrentY += (orbTargetY - orbCurrentY) * 0.1;
      paintOrb();

      if (headline.classList.contains('is-gradient-active')) {
        gradientCurrentX += (gradientTargetX - gradientCurrentX) * 0.2;
        gradientCurrentY += (gradientTargetY - gradientCurrentY) * 0.2;
        headline.style.setProperty('--gx', `${gradientCurrentX}%`);
        headline.style.setProperty('--gy', `${gradientCurrentY}%`);
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      const localX = event.clientX - sectionRect.left;
      const localY = event.clientY - sectionRect.top;
      const inHero =
        localX >= 0 &&
        localX <= sectionRect.width &&
        localY >= 0 &&
        localY <= sectionRect.height;

      if (inHero) {
        orbTargetX = localX;
        orbTargetY = localY;
      } else {
        orbTargetX = sectionRect.width * 0.72;
        orbTargetY = sectionRect.height * 0.36;
      }
    };

    const onHeadlineEnter = () => {
      headline.classList.add('is-gradient-active');
    };

    const onHeadlineMove = (event) => {
      const headlineRect = headline.getBoundingClientRect();
      gradientTargetX = clamp(
        ((event.clientX - headlineRect.left) / headlineRect.width) * 100,
        0,
        100,
      );
      gradientTargetY = clamp(
        ((event.clientY - headlineRect.top) / headlineRect.height) * 100,
        0,
        100,
      );
    };

    const onHeadlineLeave = () => {
      headline.classList.remove('is-gradient-active');
      gradientTargetX = 50;
      gradientTargetY = 50;
      gradientCurrentX = 50;
      gradientCurrentY = 50;
      headline.style.setProperty('--gx', '50%');
      headline.style.setProperty('--gy', '50%');
    };

    paintOrb();

    if (!reducedMotion) {
      rafId = window.requestAnimationFrame(animate);
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      headline.addEventListener('pointerenter', onHeadlineEnter);
      headline.addEventListener('pointermove', onHeadlineMove);
      headline.addEventListener('pointerleave', onHeadlineLeave);
    }

    window.addEventListener('resize', refreshMetrics);
    window.addEventListener('scroll', refreshMetrics, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', refreshMetrics);
      window.removeEventListener('scroll', refreshMetrics);
      headline.removeEventListener('pointerenter', onHeadlineEnter);
      headline.removeEventListener('pointermove', onHeadlineMove);
      headline.removeEventListener('pointerleave', onHeadlineLeave);
    };
  }, []);

  return (
    <section id='home' ref={sectionRef} className='relative pt-10 sm:pt-16'>
      <div aria-hidden className='hero-flow-layer'>
        <div ref={orbRef} className='hero-flow-orb' />
      </div>

      <div className='mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 sm:px-6 md:grid-cols-[220px_1fr] lg:px-8 lg:gap-16 lg:pb-24'>
        <FadeIn className='mx-auto md:mx-0'>
          <div className='avatar-shell animate-float'>
            <div className='avatar-core'>
              <span aria-hidden className='text-4xl'>
                👨🏻‍💻
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className='max-w-3xl'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400'>
              Graduate Software Engineer
            </p>
            <div ref={headlineRef} className='hero-headline'>
              <h1 className='text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl'>
                <span className='hero-gradient-line'>Hey, I&apos;m Jeevan</span>
                <br />
                <span className='hero-gradient-line'>
                  Graduate Software Engineer
                </span>
              </h1>
            </div>
            <p className='mt-4 text-lg font-medium text-slate-200'>
              Full-stack focused. UI-minded. AI-curious.
            </p>
            <p className='mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg'>
              I build responsive web apps and reliable APIs with clean,
              maintainable code. I like turning real-world requirements into
              simple user experiences and scalable systems.
            </p>
            <p className='mt-4 text-sm text-slate-400'>
              Email: jvnrisal@gmail.com | Phone: 0430 608 069
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <Magnetic
                as='a'
                href='#contact'
                className='btn-primary focus-ring'
                strength={9}
              >
                Contact Me
              </Magnetic>
              <Magnetic
                as='a'
                href='#projects'
                className='btn-secondary focus-ring'
                strength={9}
              >
                View Projects
              </Magnetic>
            </div>

            <div className='mt-6 flex items-center gap-2 text-slate-300'>
              <Magnetic
                as='a'
                href={socialLinks.github}
                className='icon-link focus-ring'
                aria-label='GitHub profile'
                strength={7}
              >
                <Github className='h-4 w-4' />
              </Magnetic>
              <Magnetic
                as='a'
                href={socialLinks.linkedin}
                className='icon-link focus-ring'
                aria-label='LinkedIn profile'
                strength={7}
              >
                <Linkedin className='h-4 w-4' />
              </Magnetic>
              <Magnetic
                as='a'
                href={socialLinks.email}
                className='icon-link focus-ring'
                aria-label='Email Jeevan'
                strength={7}
              >
                <Mail className='h-4 w-4' />
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
