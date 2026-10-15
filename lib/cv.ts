import { experience, tr, type L } from "@/lib/content";

/** One ❖ block: bold heading, optional italic line, bullets, and dates/place on the right. */
export type CvEntry = { heading: L; subtitle?: L; bullets: L[]; when?: L; where?: L };

const same = (text: string): L => ({ sv: text, en: text });

/** CV-only copy; earlier employers are shared with the site so both stay in sync. */
export const cv = {
  title: same("CV – Adrian Bajra"),
  name: "Adrian Bajra",
  profileLabel: { sv: "Profil", en: "Profile" },
  profile: {
    sv: "Civilingenjörsstudent i farkostteknik på KTH med inriktning mot vägfordon och ingenjör i suspension-teamet hos KTH Formula Student, där jag ritar och anpassar detaljer till suspensionen i CAD för att sedan bygga ihop dem i verkstaden. Vid sidan av studierna driver jag Bajras Barbershop sedan 2021, och som fotbollstränare och spelare har jag fått ett tydligt ledarskap, bra samarbetsförmåga och ett lugn i att få en grupp att prestera tillsammans, oavsett om det gäller på planen eller i garaget.",
    en: "MSc student in Vehicle Engineering at KTH, heading for the Road Vehicles track, and engineer on the KTH Formula Student suspension team, where I design and adapt suspension parts in CAD and then build them in the workshop. Alongside my studies I have run Bajras Barbershop since 2021, and coaching and playing football have given me clear leadership, strong teamwork and the calm to get a group to perform together, whether on the pitch or in the garage.",
  },
  experienceLabel: { sv: "Arbetslivserfarenhet", en: "Work experience" },
  experience: [
    {
      heading: same("KTH Formula Student – Mechanical Design Engineer"),
      subtitle: { sv: "Suspension design", en: "Suspension design" },
      bullets: [
        { sv: "Konstruerade bellcranks i Solid Edge och NX och dimensionerade dem med lastberäkningar, kraftanalys och grundläggande FEA.", en: "Designed bellcranks in Solid Edge and NX, sizing them with load calculations, force analysis and basic FEA." },
        { sv: "Ritade insatser till länkarmarna och anpassade geometri och passningar för tillverkning och montering.", en: "Designed the control-arm inserts and adapted geometry and fits for manufacturing and assembly." },
        { sv: "Tillverkade delar i fräs och svarv och monterade suspensionen i verkstaden.", en: "Made parts on the mill and lathe and assembled the suspension in the workshop." },
        { sv: "Var med på testkörning och tävling på Formula Student Switzerland 2026.", en: "Took part in testing and racing at Formula Student Switzerland 2026." },
        { sv: "Teknisk design och projektkommunikation inom teamet.", en: "Technical design and project communication within the team." },
      ],
      when: { sv: "jan 2025 – nuvarande", en: "Jan 2025 – present" },
      where: same("Stockholm"),
    },
    {
      heading: { sv: "Bajras Barbershop – Grundare och frisör", en: "Bajras Barbershop – Founder and barber" },
      subtitle: { sv: "Eget företag", en: "Own business" },
      bullets: [
        { sv: "Driver egen frisörverksamhet vid sidan av skola och studier, med ansvar för kunder, tider och kvalitet.", en: "Run my own barber business alongside school and university, responsible for clients, scheduling and quality." },
        { sv: "Klippte teamet i det sociala området på FSCH 2026, vilket gav KTH Formula Student priset Master of Sidequesting.", en: "Cut the team's hair in the social area at FSCH 2026, earning KTH Formula Student the Master of Sidequesting award." },
      ],
      when: { sv: "2021 – nuvarande", en: "2021 – present" },
      where: same("Stockholm"),
    },
    {
      heading: { sv: "Tidigare arbeten", en: "Earlier jobs" },
      // the site's list starts with Formula Student and the barbershop, which have their own entries
      bullets: experience.work
        .slice(2)
        .filter((job) => tr(job.org, "sv") !== "Triathlon Sverige")
        .map((job) => ({ sv: `${tr(job.org, "sv")} – ${job.role.sv}`, en: `${tr(job.org, "en")} – ${job.role.en}` })),
    },
  ] satisfies CvEntry[],
  projectsLabel: { sv: "Projekt", en: "Projects" },
  projects: [
    {
      heading: { sv: "Reparation av rostigt avgasgrenrör", en: "Rusted exhaust manifold repair" },
      subtitle: { sv: "Eget projekt", en: "Own project" },
      bullets: [
        { sv: "Flänsen mot topplocket hade rostat sönder och läckte avgaser.", en: "The flange at the cylinder head had rusted through and was leaking exhaust." },
        { sv: "Ritade en ny fläns, skar ut den med vattenskärning och monterade den på grenröret så att det kunde användas igen.", en: "Drew a new flange, cut it out on the waterjet and fitted it to the manifold so it could be reused." },
      ],
      when: { sv: "jun 2026", en: "Jun 2026" },
    },
    {
      heading: { sv: "Bilar på fritiden", en: "Cars in my free time" },
      subtitle: { sv: "Reparation och trimning", en: "Repair and tuning" },
      bullets: [
        { sv: "Motorarbete på en Audi TT 1.8T.", en: "Engine work on an Audi TT 1.8T." },
        { sv: "Svetsade ett helt nytt avgassystem när avgasröret gått av.", en: "Welded a complete new exhaust system after the exhaust pipe snapped." },
        { sv: "Reparerade en bromsslang och krängde om däcken på nya fälgar själv.", en: "Repaired a brake hose and remounted the tyres on new wheels myself." },
      ],
    },
  ] satisfies CvEntry[],
  educationLabel: { sv: "Utbildning", en: "Education" },
  education: [
    {
      heading: same("KTH Royal Institute of Technology"),
      subtitle: { sv: "Civilingenjör inom farkostteknik, masterinriktning vägfordon", en: "MSc in Vehicle Engineering, Road Vehicles track" },
      bullets: [
        { sv: "Pågående civilingenjörsstudier inom farkostteknik vid KTH.", en: "Ongoing MSc studies in Vehicle Engineering at KTH." },
        { sv: "Fokuserar på hållbar teknikutveckling och avancerad problemlösning.", en: "Focused on sustainable technology development and advanced problem solving." },
        { sv: "Kombinerar teoretiska studier med praktiska projekt.", en: "Combining theoretical studies with practical projects." },
        { sv: "Utvecklar starka tekniska och analytiska färdigheter.", en: "Developing strong technical and analytical skills." },
        { sv: "Engagerad i tvärvetenskapliga samarbeten och innovation.", en: "Engaged in interdisciplinary collaboration and innovation." },
      ],
      when: { sv: "aug 2024 – jun 2029", en: "Aug 2024 – Jun 2029" },
      where: same("Stockholm"),
    },
    {
      heading: same("Rudbecks gymnasium"),
      subtitle: { sv: "Naturvetenskapsprogrammet, inriktning naturvetenskap", en: "Natural Science programme" },
      bullets: [
        { sv: "Tillvalskurser: Programmering 1, Matematik 5, Engelska 7 och Spanska 4.", en: "Electives: Programming 1, Mathematics 5, English 7 and Spanish 4." },
      ],
    },
  ] satisfies CvEntry[],
  leadershipLabel: { sv: "Idrott och ledarskap", en: "Sport and leadership" },
  leadership: [
    {
      heading: same("Sollentuna FK"),
      subtitle: { sv: "Spelade semiprofessionell fotboll", en: "Played semi-professional football" },
      bullets: [],
    },
    {
      heading: same("Rotebro IS"),
      subtitle: { sv: "Var ideell fotbollstränare", en: "Was a volunteer football coach" },
      bullets: [
        { sv: "Tränade pojklaget P08.", en: "Coached the boys' team P08." },
        { sv: "Var ledare på klubbens Football Summer Camp.", en: "Was a leader at the club's Football Summer Camp." },
      ],
    },
    {
      heading: same("Triathlon Sverige"),
      subtitle: { sv: "Var funktionär", en: "Was an event official" },
      bullets: [],
    },
  ] satisfies CvEntry[],
  skillsLabel: { sv: "Kompetens", en: "Skills" },
  skills: [
    { sv: "Solid Edge och Siemens NX", en: "Solid Edge and Siemens NX" },
    { sv: "Grundläggande FEA", en: "Basic FEA" },
    { sv: "Mekanik och statik", en: "Mechanics and statics" },
    { sv: "Lastberäkningar och kraftanalys", en: "Load calculations and force analysis" },
    { sv: "Teknisk design", en: "Technical design" },
    { sv: "Fräsning och svarvning", en: "Milling and turning" },
    { sv: "Vattenskärning och svetsning", en: "Waterjet cutting and welding" },
    { sv: "Bilreparation och trimning", en: "Car repair and tuning" },
    { sv: "Projektledning", en: "Project management" },
    { sv: "Projektkommunikation", en: "Project communication" },
    { sv: "Problemlösning", en: "Problem solving" },
    { sv: "Systemvana", en: "Systems experience" },
  ] satisfies L[],
  otherLabel: { sv: "Språk och körkort", en: "Languages and licence" },
  other: [
    { label: { sv: "Svenska", en: "Swedish" }, value: { sv: "Flytande", en: "Fluent" } },
    { label: { sv: "Engelska", en: "English" }, value: { sv: "Flytande", en: "Fluent" } },
    { label: { sv: "Spanska", en: "Spanish" }, value: { sv: "Grundläggande", en: "Basic" } },
    { label: { sv: "Körkort", en: "Driving licence" }, value: { sv: "AM och B", en: "AM and B" } },
  ] satisfies { label: L; value: L }[],
};
