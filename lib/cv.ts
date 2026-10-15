import { experience, tr, type L } from "@/lib/content";

/** CV-only copy; employers and schools are shared with the site so both stay in sync. */
export const cv = {
  title: { sv: "CV – Adrian Bajra", en: "CV – Adrian Bajra" },
  role: {
    sv: "Civilingenjörsstudent i farkostteknik, KTH",
    en: "MSc student in Vehicle Engineering, KTH",
  },
  subrole: {
    sv: "Mechanical Design Engineer, suspension, KTH Formula Student",
    en: "Mechanical Design Engineer, suspension, KTH Formula Student",
  },
  profileLabel: { sv: "Profil", en: "Profile" },
  profile: {
    sv: "Jag läser civilingenjör i farkostteknik på KTH med inriktning mot vägfordon och konstruerar suspension i KTH Formula Student, där jag ritar delar i CAD och sedan bygger dem i verkstaden. Vid sidan av studierna driver jag Bajras Barbershop sedan 2021 och har spelat semiprofessionell fotboll i Sollentuna FK. Som tränare och företagare har jag lärt mig att ta ansvar och få en grupp att prestera tillsammans.",
    en: "I'm studying for an MSc in Vehicle Engineering at KTH, heading for the Road Vehicles track, and design suspension parts for KTH Formula Student, drawing them in CAD and then building them in the workshop. Alongside my studies I've run Bajras Barbershop since 2021 and have played semi-professional football for Sollentuna FK. Coaching and running my own business have taught me to take responsibility and get a group to perform together.",
  },
  experienceLabel: { sv: "Erfarenhet", en: "Experience" },
  roles: [
    {
      org: "KTH Formula Student",
      title: { sv: "Mechanical Design Engineer, suspension", en: "Mechanical Design Engineer, suspension" },
      when: { sv: "jan 2025–nu", en: "Jan 2025–present" },
      bullets: [
        {
          sv: "Konstruerade bellcranks i Solid Edge och NX och dimensionerade dem med lastberäkningar, kraftanalys och grundläggande FEA.",
          en: "Designed bellcranks in Solid Edge and NX, sizing them with load calculations, force analysis and basic FEA.",
        },
        {
          sv: "Ritade insatser till länkarmarna och anpassade geometri och passningar för tillverkning och montering.",
          en: "Designed the control-arm inserts and adapted geometry and fits for manufacturing and assembly.",
        },
        {
          sv: "Tillverkade delar i fräs och svarv, monterade suspensionen och var med på testkörning och tävling på Formula Student Switzerland 2026.",
          en: "Made parts on the mill and lathe, assembled the suspension and took part in testing and racing at Formula Student Switzerland 2026.",
        },
      ],
    },
    {
      org: "Bajras Barbershop",
      title: { sv: "Grundare och frisör", en: "Founder and barber" },
      when: { sv: "2021–nu", en: "2021–present" },
      bullets: [
        {
          sv: "Driver egen frisörverksamhet vid sidan av skola och studier, med ansvar för kunder, tider och kvalitet.",
          en: "Run my own barber business alongside school and university, responsible for clients, scheduling and quality.",
        },
        {
          sv: "Klippte teamet i det sociala området på FSCH 2026, vilket gav KTH Formula Student priset Master of Sidequesting.",
          en: "Cut the team's hair in the social area at FSCH 2026, earning KTH Formula Student the Master of Sidequesting award.",
        },
      ],
    },
  ] satisfies { org: string; title: L; when: L; bullets: L[] }[],
  earlierLabel: { sv: "Tidigare arbeten", en: "Earlier jobs" },
  // the site's list starts with Formula Student and the barbershop, which get full entries above
  earlier: experience.work.slice(2).filter((job) => tr(job.org, "sv") !== "Triathlon Sverige"),
  projectsLabel: { sv: "Projekt", en: "Projects" },
  projects: [
    {
      title: { sv: "Reparation av rostigt avgasgrenrör, jun 2026", en: "Rusted exhaust manifold repair, Jun 2026" },
      text: {
        sv: "Flänsen mot topplocket hade rostat sönder och läckte avgaser. Ritade en ny fläns, skar ut den med vattenskärning och monterade den på grenröret så att det kunde användas igen.",
        en: "The flange at the cylinder head had rusted through and was leaking exhaust. Drew a new flange, cut it out on the waterjet and fitted it to the manifold so it could be reused.",
      },
    },
    {
      title: { sv: "Bilar på fritiden", en: "Cars in my free time" },
      text: {
        sv: "Reparerar och trimmar bilar, bland annat motorarbete på en Audi TT 1.8T, ett helt nysvetsat avgassystem när avgasröret gått av, reparation av bromsslang och omkrängning av däck.",
        en: "Repair and tune cars, including engine work on an Audi TT 1.8T, welding a complete new exhaust system after the pipe snapped, a brake hose repair and remounting tyres.",
      },
    },
  ] satisfies { title: L; text: L }[],
  educationLabel: { sv: "Utbildning", en: "Education" },
  // compulsory school is left off the CV
  education: experience.education.slice(0, 2),
  leadershipLabel: { sv: "Idrott och ledarskap", en: "Sport and leadership" },
  leadership: [
    { org: "Sollentuna FK", what: { sv: "Spelade semiprofessionell fotboll", en: "Played semi-professional football" } },
    { org: "Rotebro IS", what: { sv: "Var ideell tränare för P08 och ledare på Football Summer Camp", en: "Was a volunteer coach for P08 and a leader at Football Summer Camp" } },
    { org: "Triathlon Sverige", what: { sv: "Funktionär", en: "Event official" } },
  ] satisfies { org: string; what: L }[],
  contactLabel: { sv: "Kontakt", en: "Contact" },
  location: { sv: "Stockholm", en: "Stockholm, Sweden" },
  skillsLabel: { sv: "Kompetenser", en: "Skills" },
  skills: [
    { group: { sv: "CAD", en: "CAD" }, items: { sv: "Solid Edge, Siemens NX", en: "Solid Edge, Siemens NX" } },
    { group: { sv: "Analys", en: "Analysis" }, items: { sv: "Grundläggande FEA, mekanik och statik, lastberäkningar, kraftanalys", en: "Basic FEA, mechanics and statics, load calculations, force analysis" } },
    { group: { sv: "Verkstad", en: "Workshop" }, items: { sv: "Fräsning, svarvning, vattenskärning, svetsning, montering", en: "Milling, turning, waterjet cutting, welding, assembly" } },
    { group: { sv: "Övrigt", en: "Other" }, items: { sv: "Teknisk design, projektledning och projektkommunikation, bilreparation", en: "Technical design, project management and communication, car repair" } },
  ] satisfies { group: L; items: L }[],
  languagesLabel: { sv: "Språk", en: "Languages" },
  languages: [
    { name: { sv: "Svenska", en: "Swedish" }, level: { sv: "Flytande", en: "Fluent" } },
    { name: { sv: "Engelska", en: "English" }, level: { sv: "Flytande", en: "Fluent" } },
    { name: { sv: "Spanska", en: "Spanish" }, level: { sv: "Grundläggande", en: "Basic" } },
  ] satisfies { name: L; level: L }[],
  licenceLabel: { sv: "Körkort", en: "Driving licence" },
  licence: { sv: "AM och B", en: "AM and B" },
};
