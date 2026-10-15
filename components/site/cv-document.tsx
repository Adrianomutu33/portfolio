import { EB_Garamond } from "next/font/google";

import { cv, type CvEntry } from "@/lib/cv";
import { contact, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

const garamond = EB_Garamond({ subsets: ["latin"], style: ["normal", "italic"] });

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-[6mm]">
      <h2 className="break-after-avoid bg-[#efefef] py-[1.6mm] text-center [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
        <span className="inline-block border-b-[1.5px] border-[#222] px-[1mm] text-[12pt] font-bold uppercase leading-snug tracking-[0.14em]">
          {title}
        </span>
      </h2>
      <div className="mt-[3mm]">{children}</div>
    </section>
  );
}

function Entry({ entry, lang }: { entry: CvEntry; lang: Locale }) {
  return (
    <div className="break-inside-avoid border-b-[1.5px] border-dotted border-[#555] pb-[2mm] pt-[2.6mm] first:pt-0">
      <h3 className="text-[11pt] font-bold leading-snug">
        <span aria-hidden className="mr-[1.6mm]">
          ❖
        </span>
        {entry.heading[lang]}
      </h3>
      <div className="flex items-end justify-between gap-[6mm] pl-[6mm]">
        <div>
          {entry.subtitle && <p className="italic">{entry.subtitle[lang]}</p>}
          {entry.bullets.length > 0 && (
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet.sv} className="relative pl-[3mm]">
                  <span aria-hidden className="absolute left-0">
                    •
                  </span>
                  {bullet[lang]}
                </li>
              ))}
            </ul>
          )}
        </div>
        {(entry.when || entry.where) && (
          <div className="shrink-0 text-right leading-tight">
            {entry.when && <p className="text-[10pt]">{entry.when[lang]}</p>}
            {entry.where && <p className="text-[9pt]">{entry.where[lang]}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function DottedColumns({ items }: { items: { left: string; right?: string }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-[12mm]">
      {items.map((item) => (
        <li key={item.left} className="flex justify-between gap-[3mm] border-b-[1.5px] border-dotted border-[#555] py-[0.9mm]">
          <span>{item.left}</span>
          {item.right && <span>{item.right}</span>}
        </li>
      ))}
    </ul>
  );
}

/** A4 CV after Adrian's original layout: centred name, double rule, grey section bars, ❖ entries. */
export function CvDocument({ lang }: { lang: Locale }) {
  const entrySections = [
    [cv.experienceLabel, cv.experience],
    [cv.projectsLabel, cv.projects],
    [cv.educationLabel, cv.education],
  ] as const;

  return (
    <main className="min-h-screen bg-navy py-10 print:min-h-0 print:bg-white print:p-0">
      {/* the site is color-scheme dark, which paints the printed page margins dark grey */}
      <style>{`@page { size: A4; margin: 14mm 17mm } @media print { :root { color-scheme: light } html, body { background: #fff } }`}</style>
      <article
        className={cn(
          garamond.className,
          "mx-auto min-h-[297mm] w-[210mm] bg-white px-[17mm] py-[14mm] text-[10.5pt] leading-[1.3] text-[#1b1b1b] shadow-2xl",
          "print:min-h-0 print:w-auto print:p-0 print:shadow-none",
        )}
      >
        <header>
          <h1 className="text-center text-[25pt] uppercase leading-none tracking-[0.05em]">{cv.name}</h1>
          <div className="mt-[7mm] flex items-end justify-between gap-[4mm] text-[10pt] font-bold">
            <a href={contact.linkedin}>{contact.linkedin}</a>
            <a href={`https://${contact.site}`}>{contact.site}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div aria-hidden className="mt-[1mm] border-t-[2px] border-[#222]" />
          <div aria-hidden className="mt-[0.6mm] border-t border-[#222]" />
        </header>

        <Section title={cv.profileLabel[lang]}>
          <p className="text-center">{cv.profile[lang]}</p>
        </Section>

        {entrySections.map(([label, entries]) => (
          <Section key={label.sv} title={label[lang]}>
            {entries.map((entry) => (
              <Entry key={entry.heading.sv} entry={entry} lang={lang} />
            ))}
          </Section>
        ))}

        <Section title={cv.skillsLabel[lang]}>
          <DottedColumns items={cv.skills.map((skill) => ({ left: skill[lang] }))} />
        </Section>

        <Section title={cv.leadershipLabel[lang]}>
          {cv.leadership.map((entry) => (
            <Entry key={entry.heading.sv} entry={entry} lang={lang} />
          ))}
        </Section>

        <Section title={cv.otherLabel[lang]}>
          <DottedColumns items={cv.other.map((item) => ({ left: item.label[lang], right: item.value[lang] }))} />
        </Section>
      </article>
    </main>
  );
}
