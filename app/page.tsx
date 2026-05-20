"use client";

import { contact, experience, navItems, projects, stackGroups } from "@/lib/content";
import { Motion, ScrollProgress, reveal, stagger } from "@/components/motion";

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-accent/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{copy}</p> : null}
    </Motion.div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#top" className="focus-ring rounded-full text-sm font-semibold tracking-wide text-white">
          Martin GK
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="focus-ring rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/40 hover:bg-accent/10"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="star-field absolute inset-0 opacity-80" />
      <div className="star-field star-field-soft absolute inset-0 opacity-45" />
      <div className="premium-grid absolute inset-0 opacity-70" />
      <Motion.div
        className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={{ opacity: [0.22, 0.36, 0.22], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute right-[-18rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-blue-400/10 blur-3xl"
        animate={{ opacity: [0.12, 0.24, 0.12], x: [0, -24, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050608_72%)]" />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-6 lg:px-8">
      <Motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <Motion.div variants={reveal} transition={{ duration: 0.7 }} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
            Senior Product Engineer · AI products · Frontend systems · UX execution
          </Motion.div>
          <Motion.h1 variants={reveal} transition={{ duration: 0.7 }} className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Martin Ezequiel Gainza Koulaksezian
          </Motion.h1>
          <Motion.p variants={reveal} transition={{ duration: 0.7 }} className="mt-6 max-w-3xl text-xl font-medium text-zinc-200 sm:text-2xl">
            Senior Product Engineer
          </Motion.p>
          <Motion.p variants={reveal} transition={{ duration: 0.7 }} className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Product-oriented software engineer with 7+ years of experience building AI-powered products, scalable frontend systems, and end-to-end user experiences across startups and fast-moving teams.
          </Motion.p>
          <Motion.div variants={reveal} transition={{ duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="focus-ring rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-accent">
              View Experience
            </a>
            <a href={`mailto:${contact.email}`} className="focus-ring rounded-full border border-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/5">
              Contact Me
            </a>
            <a href={contact.cv} className="focus-ring rounded-full border border-white/10 px-6 py-3 text-center text-sm font-semibold text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white">
              Download CV
            </a>
          </Motion.div>
        </div>

        <Motion.aside
          variants={reveal}
          transition={{ duration: 0.8 }}
          className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted">Available for</p>
              <p className="mt-1 font-medium text-white">AI SaaS · Product Engineering · Frontend Architecture</p>
            </div>
            <span className="flex h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(167,243,208,0.7)]" />
          </div>
          <dl className="space-y-5">
            {[
              ["Email", contact.email, `mailto:${contact.email}`],
              ["Website", contact.website, "https://martin-gk.com"]
            ].map(([label, value, href]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-xs uppercase tracking-[0.24em] text-muted">{label}</dt>
                <dd className="mt-2 break-words text-sm font-medium text-white">
                  <a className="focus-ring rounded hover:text-accent" href={href}>{value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </Motion.aside>
      </Motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="Product judgment, engineering depth, and UX sensitivity in one execution loop."
      />
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="glass-card mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-10"
      >
        <p className="text-lg leading-9 text-zinc-200 sm:text-xl">
          Martin specializes in turning ambiguous product ideas into polished, production-ready software. He combines frontend engineering, systems thinking, UX sensitivity, and rapid iteration to move from early product signal to reliable shipped experiences.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["AI-powered product interfaces", "Scalable frontend architecture", "Fast product delivery"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm font-medium text-white">
              {item}
            </div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of product-facing engineering across AI, SaaS, mobile, and games."
        copy="Focused roles with a consistent thread: ship usable systems quickly, keep quality high, and close the distance between product, design, and engineering."
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/70 via-white/15 to-transparent md:left-1/2 md:-translate-x-px" aria-hidden="true" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <Motion.article
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.62, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`relative grid pl-12 md:grid-cols-2 md:gap-x-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : ""}`}
            >
              <div className="absolute left-2.5 top-7 z-10 h-3 w-3 rounded-full border border-accent bg-ink shadow-[0_0_0_8px_rgba(167,243,208,0.08)] md:left-1/2 md:-translate-x-1/2" />
              <div className={`glass-card rounded-3xl p-6 sm:p-7 ${index % 2 === 0 ? "md:mr-8" : "md:col-start-2 md:ml-8"}`}>
                <p className="text-sm font-medium text-accent/85">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.role} · {item.company}</h3>
                <ul className={`mt-5 space-y-3 text-sm leading-6 text-muted ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Selected projects" title="Systems that turn automation, AI, and content operations into usable products." />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <Motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.45 }}
            className="glass-card group rounded-[2rem] p-7 transition will-change-transform hover:border-accent/30 sm:p-8"
          >
            <div className="mb-12 h-24 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(167,243,208,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-muted">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300">{tag}</span>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Tech stack" title="Tools selected for speed, quality, and product leverage." />
      <Motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {stackGroups.map((group) => (
          <Motion.article
            key={group.title}
            variants={reveal}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35 }}
            className="glass-card rounded-3xl p-6 hover:border-accent/25"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10 transition hover:bg-accent/10 hover:text-white hover:ring-accent/30">
                  {skill}
                </span>
              ))}
            </div>
          </Motion.article>
        ))}
      </Motion.div>
    </section>
  );
}

function Education() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        transition={{ duration: 0.65 }}
        className="glass-card rounded-[2rem] p-7 sm:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent/80">Education</p>
        <h2 className="mt-4 text-2xl font-semibold text-white">Systems Engineering · Universidad Tecnológica Nacional</h2>
        <p className="mt-2 text-muted">2013 – 2018</p>
      </Motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        transition={{ duration: 0.65 }}
        className="glass-card overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent/80">Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Let’s build fast, useful, AI-aware products with a high bar for execution.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted">
          Available for senior product engineering roles, frontend architecture, and AI product execution.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`mailto:${contact.email}`} className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent">
            {contact.email}
          </a>
          <a href="https://martin-gk.com" className="focus-ring rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/5">
            martin-gk.com
          </a>
        </div>
      </Motion.div>
      <footer className="py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Martin Ezequiel Gainza Koulaksezian. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Contact />
    </main>
  );
}
