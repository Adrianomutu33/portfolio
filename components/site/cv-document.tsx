import Image from "next/image";

import { cv } from "@/lib/cv";
import { contact, tr, type Locale } from "@/lib/content";

function SideHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="wide mb-[2.2mm] text-[8.5pt] font-extrabold tracking-[0.01em] text-gold">{children}</h2>;
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="wide mb-[2.6mm] border-b border-navy/15 pb-[1.2mm] text-[10.5pt] font-extrabold tracking-[-0.01em]">
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-[3.6mm]">
      <span aria-hidden className="absolute left-0 top-[1.55mm] size-[1.3mm] bg-gold" />
      {children}
    </li>
  );
}

/** One A4 sheet. On screen it floats on the site's navy; printed, it is the whole page. */
export function CvDocument({ lang }: { lang: Locale }) {
  return (
    <main className="flex min-h-screen justify-center bg-navy py-10 print:block print:min-h-0 print:p-0">
      <style>{`@page { size: A4; margin: 0 } @media print { html, body { background: #fff } }`}</style>
      <article
        className="grid h-[297mm] w-[210mm] shrink-0 grid-cols-[64mm_1fr] overflow-hidden bg-white text-[8.6pt] leading-[1.42] text-navy shadow-2xl [-webkit-print-color-adjust:exact] [print-color-adjust:exact] print:shadow-none"
      >
        <aside className="flex flex-col bg-navy px-[8mm] pb-[10mm] pt-[13mm] text-paper">
          <section className="pt-[2mm]">
            <SideHeading>{cv.contactLabel[lang]}</SideHeading>
            <ul className="space-y-[1.2mm] break-words">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={contact.linkedin}>linkedin.com/in/adrianbajra</a>
              </li>
              <li>
                <a href={`https://${contact.site}`}>{contact.site}</a>
              </li>
              <li className="text-mist">{cv.location[lang]}</li>
            </ul>
          </section>

          <section className="mt-[8mm]">
            <SideHeading>{cv.skillsLabel[lang]}</SideHeading>
            <dl className="space-y-[2.4mm]">
              {cv.skills.map((skill) => (
                <div key={skill.group.sv}>
                  <dt className="font-semibold">{skill.group[lang]}</dt>
                  <dd className="text-paper/75">{skill.items[lang]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-[8mm]">
            <SideHeading>{cv.languagesLabel[lang]}</SideHeading>
            <dl className="space-y-[1mm]">
              {cv.languages.map((language) => (
                <div key={language.name.sv} className="flex justify-between gap-[3mm]">
                  <dt className="font-semibold">{language.name[lang]}</dt>
                  <dd className="text-paper/75">{language.level[lang]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-[8mm]">
            <SideHeading>{cv.licenceLabel[lang]}</SideHeading>
            <p>{cv.licence[lang]}</p>
          </section>

          <section className="mt-[8mm]">
            <SideHeading>{cv.leadershipLabel[lang]}</SideHeading>
            <dl className="space-y-[2.4mm]">
              {cv.leadership.map((item) => (
                <div key={item.org}>
                  <dt className="font-semibold">{item.org}</dt>
                  <dd className="text-paper/75">{item.what[lang]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Image src="/logos/kth-white.svg" alt="KTH" width={44} height={49} className="mt-auto h-[14mm] w-auto self-start opacity-90" />
        </aside>

        <div className="px-[11mm] pb-[10mm] pt-[12mm]">
          <header>
            <h1 className="wide text-[29pt] font-extrabold leading-[0.9] tracking-[-0.04em]">Adrian Bajra</h1>
            <div aria-hidden className="mt-[3mm] h-[0.9mm] bg-gold" />
            <p className="mt-[3mm] text-[10.5pt] font-semibold">{cv.role[lang]}</p>
            <p className="text-navy/70">{cv.subrole[lang]}</p>
          </header>

          <section className="mt-[6mm]">
            <MainHeading>{cv.profileLabel[lang]}</MainHeading>
            <p className="text-navy/85">{cv.profile[lang]}</p>
          </section>

          <section className="mt-[5.5mm]">
            <MainHeading>{cv.experienceLabel[lang]}</MainHeading>
            <div className="space-y-[3.6mm]">
              {cv.roles.map((role) => (
                <div key={role.org}>
                  <div className="flex items-baseline justify-between gap-[4mm]">
                    <h3 className="wide text-[9.6pt] font-bold tracking-[-0.01em]">{role.org}</h3>
                    <p className="shrink-0 text-navy/60">{role.when[lang]}</p>
                  </div>
                  <p className="font-semibold text-navy/80">{role.title[lang]}</p>
                  <ul className="mt-[1.2mm] space-y-[0.8mm] text-navy/85">
                    {role.bullets.map((bullet) => (
                      <Bullet key={bullet.sv}>{bullet[lang]}</Bullet>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="wide text-[9.6pt] font-bold tracking-[-0.01em]">{cv.earlierLabel[lang]}</h3>
                <ul className="mt-[1.2mm] space-y-[0.8mm] text-navy/85">
                  {cv.earlier.map((job) => (
                    <Bullet key={tr(job.org, "sv")}>
                      <span className="font-semibold text-navy">{tr(job.org, lang)}</span>, {job.role[lang].charAt(0).toLowerCase() + job.role[lang].slice(1)}
                    </Bullet>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-[5.5mm]">
            <MainHeading>{cv.projectsLabel[lang]}</MainHeading>
            <div className="space-y-[2.4mm]">
              {cv.projects.map((project) => (
                <div key={project.title.sv}>
                  <h3 className="font-semibold">{project.title[lang]}</h3>
                  <p className="text-navy/85">{project.text[lang]}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[5.5mm]">
            <MainHeading>{cv.educationLabel[lang]}</MainHeading>
            <div className="space-y-[2.4mm]">
              {cv.education.map((school) => (
                <div key={school.org}>
                  <div className="flex items-baseline justify-between gap-[4mm]">
                    <h3 className="font-semibold">{school.org}</h3>
                    {school.when && <p className="shrink-0 text-navy/60">{school.when[lang]}</p>}
                  </div>
                  <p className="text-navy/85">{school.what[lang]}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
