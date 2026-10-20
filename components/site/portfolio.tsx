import Image from "next/image";

import { Header, LanguageSwitch } from "@/components/site/header";
import { MediaFigure } from "@/components/site/media-figure";
import Timeline from "@/components/ui/timeline";
import {
  about,
  barbershop,
  contact,
  contactSection,
  experience,
  football,
  footer,
  formula,
  hero,
  journey,
  nav,
  projects,
  references,
  tr,
  ui,
  type Locale,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-8 xl:px-12", className)}>{children}</div>;
}

function Heading({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      // 9vw on phones keeps long Swedish compound words inside the gutter
      className={cn(
        "wide text-balance text-[clamp(1.75rem,9vw,2.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[clamp(2.25rem,5vw,4.75rem)]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function Logos({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <Image src="/logos/kth-white.svg" alt="KTH Royal Institute of Technology" width={44} height={49} className="h-12 w-auto" />
      <span aria-hidden className="h-10 w-px bg-rule" />
      <Image src="/logos/formula-kth.png" alt="KTH Formula Student" width={40} height={50} className="h-12 w-auto" />
    </div>
  );
}

function Hero({ lang }: { lang: Locale }) {
  return (
    <section aria-labelledby="hero-name" className="pt-20 md:pt-24">
      <Container>
        <h1
          id="hero-name"
          // the name sets 7em wide, so these sizes run it edge to edge of the container
          className="wide flex flex-wrap gap-x-[0.22em] text-[18.5vw] font-extrabold leading-[0.84] tracking-[-0.045em] md:text-[calc((100vw-4rem)/7.15)] xl:text-[min(calc((100vw-6rem)/7.15),188px)]"
        >
          {["Adrian", "Bajra"].map((word, index) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <span className="animate-rise block" style={{ animationDelay: `${index * 110}ms` }}>
                {word}
              </span>
            </span>
          ))}
        </h1>
        <div aria-hidden className="animate-draw mt-3 h-[3px] bg-gold md:mt-4" />

        <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-12 md:gap-10">
          <MediaFigure
            media={hero.photo}
            lang={lang}
            ratio="aspect-[4/3] md:aspect-[3/2]"
            sizes="(min-width: 1440px) 900px, (min-width: 768px) 64vw, 100vw"
            className="md:order-2 md:col-span-8"
            eager
          />
          <div className="flex flex-col justify-between gap-10 md:col-span-4 md:py-1">
            <div>
              <p className="max-w-[44ch] text-lg leading-relaxed text-paper/90 md:text-[1.1875rem]">{hero.lead[lang]}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#formula"
                  className="rounded-[2px] bg-gold px-5 py-3 font-semibold text-navy transition-colors hover:bg-paper"
                >
                  {hero.primary[lang]}
                </a>
                <a
                  href="#experience"
                  className="rounded-[2px] border border-paper/40 px-5 py-3 font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  {hero.experience[lang]}
                </a>
                <a href="#contact" className="font-semibold underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold">
                  {hero.secondary[lang]}
                </a>
              </div>
            </div>
            <Logos />
          </div>
        </div>
      </Container>
    </section>
  );
}

function About({ lang }: { lang: Locale }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-36">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Heading id="about-heading" className="text-[clamp(1.875rem,3.6vw,3.5rem)] leading-[1.02]">
            {about.heading[lang]}
          </Heading>
          <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-paper/85">
            {about.body.map((paragraph) => (
              <p key={paragraph.sv}>{paragraph[lang]}</p>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <MediaFigure media={about.photo} lang={lang} ratio="aspect-[4/3]" sizes="(min-width: 768px) 40vw, 100vw" />
          <dl className="mt-6">
            {about.facts.map((fact) => (
              <div key={fact.term.sv} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3 text-[15px]">
                <dt className="text-mist">{fact.term[lang]}</dt>
                <dd>{fact.value[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function Formula({ lang }: { lang: Locale }) {
  return (
    <section id="formula" aria-labelledby="formula-heading" className="pt-24 md:pt-36">
      <Container>
        <div className="flex items-center gap-4">
          <Image src="/logos/formula-kth.png" alt="" width={40} height={50} className="h-11 w-auto" />
          <p className="text-[15px] text-mist">{formula.role[lang]}</p>
        </div>
        <Heading id="formula-heading" className="mt-6 max-w-[16ch]">
          {formula.heading[lang]}
        </Heading>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-paper/85">{formula.intro[lang]}</p>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <MediaFigure
              media={formula.feature}
              lang={lang}
              ratio="aspect-[3/4]"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="md:sticky md:top-24"
            />
          </div>
          <div className="md:col-span-7">
            <h3 className="text-[15px] text-mist">{formula.contributionsLabel[lang]}</h3>
            <ul className="mt-4">
              {formula.contributions.map((item) => (
                <li key={item.title.sv} className="border-t border-rule py-8 first:pt-6">
                  <h4 className="wide text-[1.5rem] font-bold leading-tight tracking-[-0.02em] md:text-[1.875rem]">{item.title[lang]}</h4>
                  <p className="mt-3 max-w-[58ch] leading-relaxed text-paper/85">{item.body[lang]}</p>
                  <p className="mt-4 text-sm text-mist">
                    <span className="text-gold">{formula.toolsLabel[lang]}</span> {item.tools[lang]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>figure]:mb-6 [&>figure]:break-inside-avoid">
          {formula.gallery.map((media) => (
            <MediaFigure key={media.alt.sv} media={media} lang={lang} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
          ))}
        </div>
      </Container>

      <MediaFigure
        media={formula.band}
        lang={lang}
        ratio="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
        sizes="100vw"
        className="mt-16 [&>div]:rounded-none [&>figcaption]:mx-auto [&>figcaption]:max-w-[1440px] [&>figcaption]:px-4 md:[&>figcaption]:px-8 xl:[&>figcaption]:px-12"
      />
    </section>
  );
}

function Projects({ lang }: { lang: Locale }) {
  const { case: job, garage } = projects;
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-36">
      <Container>
        <Heading id="projects-heading">{projects.heading[lang]}</Heading>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-paper/85">{projects.intro[lang]}</p>

        <article className="mt-14 border-t border-rule pt-8 md:mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="wide text-[1.625rem] font-bold leading-tight tracking-[-0.02em] md:text-[2.25rem]">{job.title[lang]}</h3>
            <p className="text-mist">{job.date[lang]}</p>
          </div>
          <dl className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {job.steps.map((step) => (
              <div key={step.label.sv}>
                <dt className="font-semibold text-gold">{step.label[lang]}</dt>
                <dd className="mt-2 leading-relaxed text-paper/85">{step.text[lang]}</dd>
              </div>
            ))}
          </dl>
          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
            {job.media.map((media) => (
              <MediaFigure
                key={media.alt.sv}
                media={media}
                lang={lang}
                ratio="aspect-[3/4]"
                sizes="(min-width: 768px) 19vw, 70vw"
                className="w-[70vw] shrink-0 snap-start sm:w-[42vw] md:w-auto"
              />
            ))}
          </div>
        </article>

        <div className="mt-20 border-t border-rule pt-8 md:mt-28">
          <h3 className="wide text-[1.625rem] font-bold leading-tight tracking-[-0.02em] md:text-[2.25rem]">{garage.heading[lang]}</h3>
          <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
            {garage.media.map((media) => (
              <MediaFigure key={media.alt.sv} media={media} lang={lang} sizes="(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 48vw" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Barbershop({ lang }: { lang: Locale }) {
  return (
    <section id="barbershop" aria-labelledby="barbershop-heading" className="bg-navy-deep py-24 md:py-36">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <MediaFigure
          media={barbershop.feature}
          lang={lang}
          ratio="aspect-[3/4]"
          sizes="(min-width: 768px) 45vw, 100vw"
          className="md:col-span-6 lg:col-span-5"
        />
        <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
          <p className="font-semibold text-gold">{barbershop.since[lang]}</p>
          <Heading id="barbershop-heading" className="mt-3">
            {barbershop.name}
          </Heading>
          <div className="mt-6 max-w-[54ch] space-y-5 text-lg leading-relaxed text-paper/85">
            {barbershop.body.map((paragraph) => (
              <p key={paragraph.sv}>{paragraph[lang]}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-rule pt-8">
            <h3 className="wide text-[1.5rem] font-bold leading-tight tracking-[-0.02em] md:text-[1.875rem]">{barbershop.story.heading[lang]}</h3>
            <p className="mt-3 max-w-[54ch] leading-relaxed text-paper/85">{barbershop.story.text[lang]}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              {barbershop.media.map((media) => (
                <MediaFigure key={media.alt.sv} media={media} lang={lang} ratio="aspect-[3/4]" sizes="(min-width: 768px) 22vw, 48vw" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Football({ lang }: { lang: Locale }) {
  return (
    <section id="football" aria-labelledby="football-heading" className="overflow-hidden py-24 md:py-36">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <Heading id="football-heading">{football.heading[lang]}</Heading>
          <p
            aria-hidden
            className="wide mt-6 text-[14.5vw] font-extrabold leading-[0.85] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_var(--color-gold)] md:text-[8.5vw] 2xl:text-[122px]"
          >
            Sollentuna
            <br />
            FK
          </p>
        </div>
        <div className="md:col-span-5 md:pt-4">
          <div className="max-w-[54ch] space-y-5 text-lg leading-relaxed text-paper/85">
            {football.body.map((paragraph) => (
              <p key={paragraph.sv}>{paragraph[lang]}</p>
            ))}
          </div>
          <dl className="mt-8">
            {football.roles.map((role) => (
              <div key={role.where.sv} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-rule py-3 text-[15px]">
                <dt className="text-mist">{role.what[lang]}</dt>
                <dd>{role.where[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function Experience({ lang }: { lang: Locale }) {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-rule py-24 md:py-36">
      <Container>
        <Heading id="experience-heading">{experience.heading[lang]}</Heading>
        <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="text-[15px] text-mist">{experience.workLabel[lang]}</h3>
            <ul className="mt-3">
              {experience.work.map((job) => (
                <li key={tr(job.org, "sv")} className="flex items-baseline justify-between gap-4 border-b border-rule py-4">
                  <div>
                    <p className="font-semibold">{tr(job.org, lang)}</p>
                    <p className="mt-0.5 text-[15px] text-paper/75">{job.role[lang]}</p>
                  </div>
                  {job.when && <p className="shrink-0 text-sm text-mist">{job.when[lang]}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div id="education" className="lg:col-span-3">
            <h3 className="text-[15px] text-mist">{experience.educationLabel[lang]}</h3>
            <ul className="mt-3">
              {experience.education.map((school) => (
                <li key={school.org} className="border-b border-rule py-4">
                  <p className="font-semibold">{school.org}</p>
                  <p className="mt-0.5 text-[15px] text-paper/75">{school.what[lang]}</p>
                  {school.when && <p className="mt-1 text-sm text-mist">{school.when[lang]}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-[15px] text-mist">{experience.skillsLabel[lang]}</h3>
            <ul className="mt-3">
              {experience.skills.map((skill) => (
                <li key={skill.sv} className="border-b border-rule py-3 text-[15px]">
                  {skill[lang]}
                </li>
              ))}
            </ul>
            <a
              href={contact.cv[lang]}
              download
              className="mt-8 inline-block font-semibold underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold"
            >
              {ui.downloadCv[lang]}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function References({ lang }: { lang: Locale }) {
  return (
    <section id="references" aria-labelledby="references-heading" className="border-t border-rule py-24 md:py-36">
      <Container>
        <Heading id="references-heading">{references.heading[lang]}</Heading>
        <ul className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-10">
          {references.people.map((person) => (
            <li key={person.name} className="border-t border-rule pt-8">
              <div className="flex items-center gap-5">
                {person.photo && (
                  <Image
                    src={person.photo.src}
                    alt={person.photo.alt[lang]}
                    sizes="96px"
                    placeholder="blur"
                    className="size-20 shrink-0 rounded-[3px] object-cover md:size-24"
                  />
                )}
                <div>
                  <h3 className="wide text-[1.5rem] font-bold leading-tight tracking-[-0.02em] md:text-[1.875rem]">{person.name}</h3>
                  <p className="mt-1 text-[15px] text-mist">{person.role[lang]}</p>
                </div>
              </div>
              {person.text && <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-paper/85">{person.text[lang]}</p>}
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${person.name}, ${references.linkedin[lang]}`}
                className="mt-5 inline-block font-semibold underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold"
              >
                {references.linkedin[lang]}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Contact({ lang }: { lang: Locale }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-gold py-24 text-navy md:py-36">
      <Container>
        <Heading id="contact-heading">{contactSection.heading[lang]}</Heading>
        <p className="mt-6 max-w-[50ch] text-lg leading-relaxed">{contactSection.text[lang]}</p>
        <a
          href={`mailto:${contact.email}`}
          className="wide mt-10 inline-block break-all text-[clamp(1.25rem,5.6vw,5rem)] font-extrabold leading-none tracking-[-0.035em] underline decoration-[0.06em] underline-offset-[0.14em] hover:decoration-navy/40 sm:break-normal"
        >
          {contact.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-semibold">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-[6px] hover:decoration-navy/40">
            LinkedIn
          </a>
          <a href={contact.cv[lang]} download className="underline decoration-2 underline-offset-[6px] hover:decoration-navy/40">
            {ui.downloadCv[lang]}
          </a>
        </div>
      </Container>
    </section>
  );
}

function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="bg-navy-deep py-14 md:py-20">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logos />
          <p className="wide mt-8 text-xl font-extrabold tracking-[-0.02em]">Adrian Bajra</p>
          <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-mist">{footer.note[lang]}</p>
        </div>
        <nav aria-label={ui.menu[lang]} className="md:col-span-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px]">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-mist transition-colors hover:text-paper">
                  {item.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-6 md:col-span-3 md:items-end">
          <LanguageSwitch lang={lang} />
          <a href="#top" className="text-[15px] text-mist transition-colors hover:text-paper">
            {ui.backToTop[lang]}
          </a>
        </div>
      </Container>
      <Container className="mt-14 flex flex-wrap justify-between gap-4 border-t border-rule pt-6 text-sm text-mist">
        <p>© 2026 Adrian Bajra</p>
        <a href={`mailto:${contact.email}`} className="hover:text-paper">
          {contact.email}
        </a>
      </Container>
    </footer>
  );
}

export function Portfolio({ lang }: { lang: Locale }) {
  return (
    <>
      <div id="top" />
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <About lang={lang} />
        <Timeline
          items={journey.items.map((item) => ({
            id: item.id,
            row: item.row,
            date: item.date[lang],
            content: item.content[lang],
            image: { src: item.image.src, alt: item.image.alt[lang] },
          }))}
          title={journey.title[lang]}
          periodLabel={journey.period[lang]}
          imageUrl={journey.image.src}
          imageAlt={journey.imageAlt[lang]}
          textColor="var(--color-paper)"
          mutedTextColor="var(--color-mist)"
          activeColor="var(--color-gold)"
          backgroundColor="var(--color-navy)"
          duration={1.4}
        />
        <Formula lang={lang} />
        <Projects lang={lang} />
        <Barbershop lang={lang} />
        <Football lang={lang} />
        <Experience lang={lang} />
        <References lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
