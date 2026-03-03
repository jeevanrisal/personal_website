"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const initialValues = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = (input) => {
    const nextErrors = {};

    if (!input.name.trim()) nextErrors.name = "Name is required.";
    if (!input.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!input.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues(initialValues);
    } else {
      setSent(false);
    }
  };

  return (
    <section id="contact" className="section-wrap pb-20">
      <FadeIn>
        <div className="glass-card overflow-hidden border-accent/15">
          <div className="grid gap-10 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-orange/10" />
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Contact</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
                Bringing clean systems to life.
              </h2>
              <p className="mt-3 text-balance text-2xl font-semibold text-slate-200">
                Let&apos;s build something useful.
              </p>
              <p className="mt-4 max-w-md text-slate-300">
                Available for graduate software opportunities across product teams, agencies,
                enterprise, and mission-driven organizations.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="glass-card border-edge/90 p-5">
              <label className="mb-1 block text-sm text-slate-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={values.name}
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                className={`focus-ring mb-3 w-full rounded-md border bg-charcoal/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 ${
                  errors.name ? "border-orange" : "border-edge"
                }`}
                placeholder="Your Name"
              />
              {errors.name ? (
                <p id="name-error" className="mb-3 text-xs text-orange">
                  {errors.name}
                </p>
              ) : null}

              <label className="mb-1 block text-sm text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={values.email}
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                className={`focus-ring mb-3 w-full rounded-md border bg-charcoal/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 ${
                  errors.email ? "border-orange" : "border-edge"
                }`}
                placeholder="hello@example.com"
              />
              {errors.email ? (
                <p id="email-error" className="mb-3 text-xs text-orange">
                  {errors.email}
                </p>
              ) : null}

              <label className="mb-1 block text-sm text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                value={values.message}
                onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
                rows={5}
                className={`focus-ring mb-3 w-full resize-none rounded-md border bg-charcoal/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 ${
                  errors.message ? "border-orange" : "border-edge"
                }`}
                placeholder="Tell me what you're building and where I can help."
              />
              {errors.message ? (
                <p id="message-error" className="mb-3 text-xs text-orange">
                  {errors.message}
                </p>
              ) : null}

              <div className="flex items-center justify-between gap-3">
                <button type="submit" className="btn-primary focus-ring">
                  Send
                </button>
                {sent ? (
                  <p className="text-sm text-green-400" role="status" aria-live="polite">
                    Message ready. I&apos;ll get back soon.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
