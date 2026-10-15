import type { StaticImageData } from "next/image";

import adrianCar171 from "@/assets/media/adrian-car-171.jpg";
import adrianInCar from "@/assets/media/adrian-in-car.jpg";
import adrianPorsche from "@/assets/media/adrian-porsche.jpg";
import audiTtEngine from "@/assets/media/audi-tt-engine.jpg";
import audiTtNight from "@/assets/media/audi-tt-night.jpg";
import barberFsch from "@/assets/media/barber-fsch.jpg";
import carFrontOff from "@/assets/media/car-front-off.jpg";
import fsDesignSession from "@/assets/media/fs-design-session.jpg";
import fsFrontSuspension from "@/assets/media/fs-front-suspension.jpg";
import fsHubAssembly from "@/assets/media/fs-hub-assembly.jpg";
import fsTeam171 from "@/assets/media/fs-team-171.jpg";
import fschFlag from "@/assets/media/fsch-flag.jpg";
import fschTeam from "@/assets/media/fsch-team.jpg";
import fschTrophy from "@/assets/media/fsch-trophy.jpg";
import haircutFade from "@/assets/media/haircut-fade.jpg";
import kartTrailer from "@/assets/media/kart-trailer.jpg";
import manifoldCracked from "@/assets/media/manifold-cracked.jpg";
import manifoldRemoved from "@/assets/media/manifold-removed.jpg";
import manifoldRepaired from "@/assets/media/manifold-repaired.jpg";
import newWheels from "@/assets/media/new-wheels.jpg";
import nurburgring from "@/assets/media/nurburgring.jpg";
import rustedBolt from "@/assets/media/rusted-bolt.jpg";
import turboDownpipe from "@/assets/media/turbo-downpipe.jpg";

export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];

/** Every string exists in both languages, so a missing translation is a type error. */
export type L = Record<Locale, string>;

export const tr = (value: string | L, lang: Locale) => (typeof value === "string" ? value : value[lang]);

export type Photo = { kind: "photo"; src: StaticImageData; alt: L; caption?: L };
export type Clip = { kind: "clip"; src: string; poster: string; alt: L; caption?: L };
export type Media = Photo | Clip;

const clip = (name: string, alt: L, caption?: L): Clip => ({
  kind: "clip",
  src: `/media/${name}.mp4`,
  poster: `/media/${name}.jpg`,
  alt,
  caption,
});

export const homeHref: Record<Locale, string> = { sv: "/", en: "/en" };

export const contact = {
  email: "bajra.adrian@gmail.com",
  linkedin: "https://www.linkedin.com/in/adrianbajra/",
  /** Rendered from /cv and /en/cv by `npm run cv`. */
  cv: { sv: "/AdrianBajra-CV-sv.pdf", en: "/AdrianBajra-CV-en.pdf" } satisfies L,
  site: "adrianbajra.se",
};

export const meta = {
  title: { sv: "Adrian Bajra – Farkostteknik, KTH Formula Student", en: "Adrian Bajra – Vehicle Engineering, KTH Formula Student" },
  description: {
    sv: "Adrian Bajra studerar farkostteknik på KTH och konstruerar suspension i KTH Formula Student. Driver Bajras Barbershop sedan 2021 och har spelat fotboll i Sollentuna FK.",
    en: "Adrian Bajra studies Vehicle Engineering at KTH and designs suspension parts for KTH Formula Student. Runs Bajras Barbershop since 2021 and has played football for Sollentuna FK.",
  },
} satisfies Record<string, L>;

export const nav: { id: string; label: L }[] = [
  { id: "about", label: { sv: "Om mig", en: "About" } },
  { id: "journey", label: { sv: "Tidslinje", en: "Timeline" } },
  { id: "formula", label: { sv: "Formula Student", en: "Formula Student" } },
  { id: "projects", label: { sv: "Projekt", en: "Projects" } },
  { id: "barbershop", label: { sv: "Barbershop", en: "Barbershop" } },
  { id: "football", label: { sv: "Fotboll", en: "Football" } },
  { id: "experience", label: { sv: "Erfarenhet", en: "Experience" } },
  { id: "education", label: { sv: "Utbildning", en: "Education" } },
  { id: "contact", label: { sv: "Kontakt", en: "Contact" } },
];

export const ui = {
  menu: { sv: "Meny", en: "Menu" },
  close: { sv: "Stäng", en: "Close" },
  skip: { sv: "Hoppa till innehållet", en: "Skip to content" },
  language: { sv: "Språk", en: "Language" },
  backToTop: { sv: "Till toppen", en: "Back to top" },
  downloadCv: { sv: "Ladda ner CV (PDF)", en: "Download CV (PDF)" },
} satisfies Record<string, L>;

export const hero = {
  lead: {
    sv: "Jag studerar farkostteknik på KTH och konstruerar suspension i KTH Formula Student. Vid sidan av studierna driver jag Bajras Barbershop och har spelat fotboll i Sollentuna FK.",
    en: "I study Vehicle Engineering at KTH and design suspension parts for KTH Formula Student. Outside of class I run Bajras Barbershop and have played football for Sollentuna FK.",
  },
  primary: { sv: "Se vad jag har byggt", en: "See what I've built" },
  experience: { sv: "Erfarenhet och utbildning", en: "Experience and education" },
  secondary: { sv: "Kontakta mig", en: "Get in touch" },
  photo: {
    kind: "photo",
    src: adrianCar171,
    alt: {
      sv: "Adrian står bakom KTH Formula Students svarta och guldfärgade formelbil på gräset utanför KTH.",
      en: "Adrian standing behind KTH Formula Student's black and gold formula car on the lawn outside KTH.",
    },
  } satisfies Photo,
};

export const about = {
  heading: {
    sv: "Fordon och mekanik är det jag håller på med, i skolan och på fritiden.",
    en: "Vehicles and mechanics are what I do, at university and in my free time.",
  },
  body: [
    {
      sv: "Jag läser civilingenjör i farkostteknik på KTH med inriktning mot vägfordon. I KTH Formula Student ritar och anpassar jag detaljer till suspensionen i CAD och bygger sedan ihop dem i verkstaden.",
      en: "I'm studying for an MSc in Vehicle Engineering at KTH, heading for the Road Vehicles track. At KTH Formula Student I design and adapt suspension parts in CAD, then build them in the workshop.",
    },
    {
      sv: "På fritiden reparerar och trimmar jag bilar. Jag har jobbat med allt från biluthyrning och bilvård på Hertz till montering av elektronisk utrustning. Som fotbollstränare har jag lärt mig att få en grupp att prestera tillsammans, oavsett om det gäller på planen eller i garaget.",
      en: "In my free time I repair and tune cars. I've worked everywhere from car rental and car care at Hertz to assembling electronic equipment. Coaching football taught me how to get a group to perform together, whether on the pitch or in the garage.",
    },
  ] satisfies L[],
  facts: [
    { term: { sv: "Utbildning", en: "Studies" }, value: { sv: "Civilingenjör farkostteknik, KTH, 2024–2029", en: "MSc Vehicle Engineering, KTH, 2024–2029" } },
    { term: { sv: "Team", en: "Team" }, value: { sv: "KTH Formula Student, suspension", en: "KTH Formula Student, suspension" } },
    { term: { sv: "CAD", en: "CAD" }, value: { sv: "Solid Edge, Siemens NX", en: "Solid Edge, Siemens NX" } },
    { term: { sv: "Språk", en: "Languages" }, value: { sv: "Svenska, engelska, grundläggande spanska", en: "Swedish, English, basic Spanish" } },
    { term: { sv: "Körkort", en: "Licence" }, value: { sv: "AM och B", en: "AM and B" } },
    { term: { sv: "Bor i", en: "Based in" }, value: { sv: "Stockholm", en: "Stockholm" } },
  ] satisfies { term: L; value: L }[],
  photo: {
    kind: "photo",
    src: adrianPorsche,
    alt: {
      sv: "Adrian i fotbollströja bredvid en grön Porsche 911 på en parkering.",
      en: "Adrian in a football shirt next to a green Porsche 911 in a car park.",
    },
  } satisfies Photo,
};

export const journey = {
  title: { sv: "Vägen hit", en: "The road here" },
  period: { sv: "2021–2026", en: "2021–2026" },
  image: adrianInCar,
  imageAlt: {
    sv: "Adrian sitter i KTH Formula Students bil i verkstaden och gör tummen upp.",
    en: "Adrian sitting in the KTH Formula Student car in the workshop, giving a thumbs up.",
  },
  items: [
    {
      id: "barber-2021",
      row: "top",
      date: { sv: "2021", en: "2021" },
      content: { sv: "Startar Bajras Barbershop vid sidan av skolan.", en: "Starts Bajras Barbershop alongside school." },
      image: { src: haircutFade, alt: { sv: "En taper fade bakifrån.", en: "A taper fade from behind." } },
    },
    {
      id: "kth-2024",
      row: "bottom",
      date: { sv: "aug 2024", en: "Aug 2024" },
      content: { sv: "Börjar på civilingenjör i farkostteknik på KTH.", en: "Starts the Vehicle Engineering MSc at KTH." },
      image: { src: fsDesignSession, alt: { sv: "Studenter med laptops i en föreläsningssal på KTH.", en: "Students with laptops in a KTH lecture hall." } },
    },
    {
      id: "fs-2025",
      row: "top",
      date: { sv: "jan 2025", en: "Jan 2025" },
      content: { sv: "Går med i KTH Formula Student, i suspension-teamet.", en: "Joins KTH Formula Student on the suspension team." },
      image: { src: fsHubAssembly, alt: { sv: "Hjulnav med planetväxel i verkstaden.", en: "Wheel hub with planetary gearset in the workshop." } },
    },
    {
      id: "design-2025",
      row: "bottom",
      date: { sv: "2025", en: "2025" },
      content: { sv: "Ritar bellcranks och insatser till länkarmar i Solid Edge och NX.", en: "Designs bellcranks and control-arm inserts in Solid Edge and NX." },
      image: { src: fsFrontSuspension, alt: { sv: "Bellcranks och Öhlins-dämpare på bilens framvagn.", en: "Bellcranks and Öhlins dampers on the car's front suspension." } },
    },
    {
      id: "car-2026",
      row: "top",
      date: { sv: "apr 2026", en: "Apr 2026" },
      content: { sv: "Säsongens bil står klar efter montering i verkstaden.", en: "This season's car is finished after assembly in the workshop." },
      image: { src: fsTeam171, alt: { sv: "Teamet bakom den färdiga bilen utanför KTH.", en: "The team behind the finished car outside KTH." } },
    },
    {
      id: "cnc-2026",
      row: "bottom",
      date: { sv: "jun 2026", en: "Jun 2026" },
      content: { sv: "Skär ut en ny fläns med vattenskärning och reparerar rosten på avgasgrenröret.", en: "Cuts a new flange on the waterjet and repairs the rust on the exhaust manifold." },
      image: { src: manifoldRepaired, alt: { sv: "Grenröret med den nya flänsen.", en: "The manifold with its new flange." } },
    },
    {
      id: "fsch-2026",
      row: "top",
      date: { sv: "jul 2026", en: "Jul 2026" },
      content: { sv: "FSCH i Schweiz. Klipper teamet i det sociala området och vinner Master of Sidequesting.", en: "FSCH in Switzerland. Cuts the team's hair in the social area and wins Master of Sidequesting." },
      image: { src: barberFsch, alt: { sv: "Adrian klipper en lagkamrat på FSCH.", en: "Adrian cutting a teammate's hair at FSCH." } },
    },
  ] satisfies { id: string; row: "top" | "bottom"; date: L; content: L; image: { src: StaticImageData; alt: L } }[],
};

export const formula = {
  heading: { sv: "Suspension för KTH Formula Student", en: "Suspension for KTH Formula Student" },
  role: { sv: "Mechanical Design Engineer, suspension, sedan januari 2025", en: "Mechanical Design Engineer, suspension, since January 2025" },
  intro: {
    sv: "Varje säsong konstruerar, bygger och tävlar teamet med en egen formelbil. Min del är detaljerna som håller ihop suspensionen och tar lasterna från hjulen in i chassit.",
    en: "Every season the team designs, builds and races its own formula car. My part is the components that hold the suspension together and carry loads from the wheels into the chassis.",
  },
  contributionsLabel: { sv: "Det jag har gjort", en: "What I worked on" },
  toolsLabel: { sv: "Verktyg", en: "Tools" },
  contributions: [
    {
      title: { sv: "Bellcranks", en: "Bellcranks" },
      body: {
        sv: "Ritade bellcranks i Solid Edge och NX. Jag räknade på lasterna och krafterna genom länkaget för att dimensionera delarna och använde grundläggande FEA för att hitta svaga punkter innan tillverkning.",
        en: "Designed the bellcranks in Solid Edge and NX. I worked through the loads and forces in the linkage to size the parts, and used basic FEA to find weak spots before manufacturing.",
      },
      tools: { sv: "Solid Edge, NX, FEA, lastberäkningar", en: "Solid Edge, NX, FEA, load calculations" },
    },
    {
      title: { sv: "Insatser till länkarmar", en: "Control-arm inserts" },
      body: {
        sv: "Insatserna i ändarna av länkarmarna, som för över lasten från armen till lederna och fästena på bilen. Jag anpassade geometri och passningar så att delarna gick att tillverka och montera.",
        en: "The inserts at the ends of the control arms that pass load from the arm into the joints and mounts on the car. I adapted the geometry and fits so the parts could be manufactured and assembled.",
      },
      tools: { sv: "CAD, kraftanalys, toleranser", en: "CAD, force analysis, tolerances" },
    },
    {
      title: { sv: "Fräs och svarv", en: "Milling and turning" },
      body: {
        sv: "Tillverkade delar i verkstadens fräs och svarv, från ritning till färdig detalj.",
        en: "Made parts on the workshop's mill and lathe, from drawing to finished component.",
      },
      tools: { sv: "Fräs, svarv", en: "Mill, lathe" },
    },
    {
      title: { sv: "Montering och testkörning", en: "Assembly and testing" },
      body: {
        sv: "Byggde ihop suspensionen på bilen i verkstaden och var med när den testades och tävlade på Formula Student Switzerland 2026.",
        en: "Assembled the suspension on the car in the workshop and was there when it was tested and raced at Formula Student Switzerland 2026.",
      },
      tools: { sv: "Verkstad, bana", en: "Workshop, track" },
    },
  ] satisfies { title: L; body: L; tools: L }[],
  feature: {
    kind: "photo",
    src: fsFrontSuspension,
    alt: {
      sv: "Bilens framvagn ovanifrån: två gula Öhlins-dämpare, bellcranks i aluminium och krängningshämmare monterade på kolfibermonocoquen.",
      en: "The car's front suspension from above: two yellow Öhlins dampers, aluminium bellcranks and the anti-roll bar mounted on the carbon monocoque.",
    },
    caption: {
      sv: "Framvagnen med bellcranks, dämpare och krängningshämmare.",
      en: "Front suspension with bellcranks, dampers and anti-roll bar.",
    },
  } satisfies Photo,
  gallery: [
    {
      kind: "photo",
      src: fsHubAssembly,
      alt: { sv: "Hjulnav med planetväxel och perforerad bromsskiva, bultarna säkrade med låstråd.", en: "Wheel hub with a planetary gearset and drilled brake disc, bolts secured with safety wire." },
      caption: { sv: "Hjulnav med planetväxel, bultarna säkrade med låstråd.", en: "Wheel hub with planetary gearset, bolts safety-wired." },
    },
    {
      kind: "photo",
      src: adrianInCar,
      alt: { sv: "Adrian sitter i bilen i verkstaden och gör tummen upp.", en: "Adrian sitting in the car in the workshop, thumbs up." },
      caption: { sv: "Provsittning i verkstaden.", en: "Seat fitting in the workshop." },
    },
    clip(
      "workshop",
      { sv: "Video från verkstaden med arbetsbänkar och verktygstavlor.", en: "Video from the workshop with workbenches and tool boards." },
      { sv: "I verkstaden.", en: "In the workshop." },
    ),
    {
      kind: "photo",
      src: fsDesignSession,
      alt: { sv: "Teammedlemmar med laptops i en föreläsningssal, en skärm visar en CAD-skiss.", en: "Team members with laptops in a lecture hall, one screen showing a CAD sketch." },
      caption: { sv: "Designarbete med teamet.", en: "Design session with the team." },
    },
    {
      kind: "photo",
      src: fsTeam171,
      alt: { sv: "Teamet i marinblå tröjor bakom bilen utanför KTH en solig vårdag.", en: "The team in navy jumpers behind the car outside KTH on a sunny spring day." },
      caption: { sv: "Teamet och bilen, april 2026.", en: "The team and the car, April 2026." },
    },
    {
      kind: "photo",
      src: fschFlag,
      alt: { sv: "Teammedlemmar håller upp en svensk flagga bakom bilen på FSCH.", en: "Team members holding up a Swedish flag behind the car at FSCH." },
      caption: { sv: "Dag tre på FSCH.", en: "Day three at FSCH." },
    },
  ] satisfies Media[],
  band: {
    kind: "photo",
    src: fschTeam,
    alt: {
      sv: "Hela KTH Formula Student, ett fyrtiotal personer, samlade runt bilen framför gröna berg i Schweiz.",
      en: "The whole KTH Formula Student team, around forty people, gathered around the car in front of green Swiss mountains.",
    },
    caption: { sv: "KTH Formula Student på Formula Student Switzerland 2026.", en: "KTH Formula Student at Formula Student Switzerland 2026." },
  } satisfies Photo,
};

export const projects = {
  heading: { sv: "Problem jag har löst", en: "Problems I've solved" },
  intro: {
    sv: "Det mesta jag kan om bilar har jag lärt mig genom att skruva själv. Här är ett jobb från början till slut, och några till från garaget.",
    en: "Most of what I know about cars I learned by working on them myself. Here is one job from start to finish, and a few more from the garage.",
  },
  case: {
    title: { sv: "Reparera rosten på ett avgasgrenrör", en: "Repairing the rust on an exhaust manifold" },
    date: { sv: "Juni 2026", en: "June 2026" },
    steps: [
      {
        label: { sv: "Problem", en: "Problem" },
        text: {
          sv: "Flänsen där grenröret skruvas mot topplocket på en trecylindrig småbil hade rostat sönder. Det läckte avgaser vid motorn och flänsen gick inte att laga som den var.",
          en: "On a three-cylinder city car, the flange where the exhaust manifold bolts to the cylinder head had rusted through. Exhaust was leaking at the engine and the flange couldn't be repaired as it was.",
        },
      },
      {
        label: { sv: "Lösning", en: "Solution" },
        text: {
          sv: "Jag tog av fronten, lyfte ur grenröret med katalysatorn, ritade en ny fläns och skar ut den med vattenskärning. Den nya flänsen monterades sedan på det gamla röret.",
          en: "I took the front end off, pulled the manifold and catalytic converter, drew a new flange and cut it out on the waterjet. The new flange was then fitted to the original pipework.",
        },
      },
      {
        label: { sv: "Resultat", en: "Result" },
        text: {
          sv: "Tätt och klart att monteras tillbaka. Grenröret kunde användas igen i stället för att bytas ut.",
          en: "Sealed and ready to go back in. The manifold could be reused instead of replaced.",
        },
      },
    ] satisfies { label: L; text: L }[],
    media: [
      {
        kind: "photo",
        src: carFrontOff,
        alt: { sv: "Grå småbil i ett garage med stötfångaren borttagen och motorrummet öppet.", en: "Grey city car in a garage with the bumper removed and the engine bay open." },
        caption: { sv: "Fronten av för att komma åt.", en: "Front end off to get access." },
      },
      {
        kind: "photo",
        src: manifoldRemoved,
        alt: { sv: "Adrian håller upp grenröret med katalysatorn framför bilen.", en: "Adrian holding up the manifold and catalytic converter in front of the car." },
        caption: { sv: "Grenröret och katalysatorn ute.", en: "Manifold and cat out." },
      },
      {
        kind: "photo",
        src: manifoldCracked,
        alt: { sv: "Närbild på grenrörets fläns, genomrostad och sönderfrätt runt de tre portarna.", en: "Close-up of the manifold flange, rusted through and eaten away around the three ports." },
        caption: { sv: "Före: flänsen rostig och sönder.", en: "Before: the flange rusted through." },
      },
      clip(
        "cnc-flange",
        { sv: "Video av vattenskärarens kontrollpanel medan den nya flänsen skärs ut.", en: "Video of the waterjet cutter's control panel while the new flange is cut." },
        { sv: "Under: flänsen skärs ut med vattenskärning.", en: "During: cutting the new flange on the waterjet." },
      ),
      {
        kind: "photo",
        src: manifoldRepaired,
        alt: { sv: "Grenröret med en ny, plan stålfläns med tre rena portar.", en: "The manifold with a new, flat steel flange and three clean ports." },
        caption: { sv: "Efter: ny fläns på plats.", en: "After: new flange in place." },
      },
    ] satisfies Media[],
  },
  garage: {
    heading: { sv: "Från garaget", en: "From the garage" },
    media: [
      {
        kind: "photo",
        src: audiTtEngine,
        alt: { sv: "Motorrummet på en Audi TT 1.8T med ventilkåpan av och kamaxlarna synliga, ett blått konfilter på insuget.", en: "Engine bay of an Audi TT 1.8T with the valve cover off and the camshafts showing, a blue cone filter on the intake." },
        caption: { sv: "Audi TT 1.8T med ventilkåpan av.", en: "Audi TT 1.8T with the valve cover off." },
      },
      clip(
        "audi-tt-cones",
        { sv: "Video av en silverfärgad Audi TT som kör runt koner på en asfaltsyta.", en: "Video of a silver Audi TT driving round cones on tarmac." },
        { sv: "Konbana med TT:n.", en: "Cone course in the TT." },
      ),
      {
        kind: "photo",
        src: audiTtNight,
        alt: { sv: "Silverfärgad Audi TT i ett mörkt garage, upplyst av rött ljus underifrån.", en: "Silver Audi TT in a dark garage, lit by red light from underneath." },
        caption: { sv: "Audi TT:n.", en: "The Audi TT." },
      },
      {
        kind: "photo",
        src: turboDownpipe,
        alt: { sv: "Närbild på avgasröret vid turbon.", en: "Close-up of the exhaust pipe at the turbo." },
        caption: { sv: "Avgasröret hade gått av, så jag svetsade ett helt nytt avgassystem.", en: "The exhaust pipe had snapped, so I welded a complete new exhaust system." },
      },
      clip(
        "turbo",
        { sv: "Video av en turbo på garagegolvet.", en: "Video of a turbo on the garage floor." },
        { sv: "Turbo.", en: "Turbo." },
      ),
      clip(
        "gearbox-jack",
        { sv: "Video av en blå växellådslyft i en verkstad, en drivaxel ligger på golvet.", en: "Video of a blue transmission jack in a workshop, a driveshaft on the floor." },
        { sv: "Växellådan ska ur.", en: "Gearbox coming out." },
      ),
      {
        kind: "photo",
        src: rustedBolt,
        alt: { sv: "Närbild på en rostig bromsslangsanslutning under en bil.", en: "Close-up of a rusted brake hose fitting under a car." },
        caption: { sv: "Reparation av bromsslang.", en: "Brake hose repair." },
      },
      {
        kind: "photo",
        src: newWheels,
        alt: { sv: "Svarta femekrade fälgar i plastsäckar i en bil.", en: "Black five-spoke wheels wrapped in plastic bags inside a car." },
        caption: { sv: "Nya fälgar. Däcken krängde jag om själv.", en: "New wheels. I remounted the tyres myself." },
      },
      {
        kind: "photo",
        src: kartTrailer,
        alt: { sv: "En kart med Honda-motor fastspänd på ett släp.", en: "A go-kart with a Honda engine strapped onto a trailer." },
        caption: { sv: "Kartprojektet på släpet.", en: "The kart project on the trailer." },
      },
      {
        kind: "photo",
        src: nurburgring,
        alt: { sv: "Nürburgrings upplysta skylt på natten.", en: "The illuminated Nürburgring sign at night." },
        caption: { sv: "Nürburgring.", en: "Nürburgring." },
      },
    ] satisfies Media[],
  },
};

export const barbershop = {
  name: "Bajras Barbershop",
  since: { sv: "Sedan 2021", en: "Since 2021" },
  body: [
    {
      sv: "Jag startade Bajras Barbershop 2021 och har klippt vid sidan av skolan och studierna sedan dess.",
      en: "I started Bajras Barbershop in 2021 and have been cutting hair alongside school and university ever since.",
    },
    {
      sv: "Att driva något eget har lärt mig att ta ansvar för kunder, tider och kvalitet, varje gång.",
      en: "Running my own thing has taught me to take responsibility for clients, timing and quality, every single time.",
    },
  ] satisfies L[],
  story: {
    heading: { sv: "Master of Sidequesting", en: "Master of Sidequesting" },
    text: {
      sv: "På FSCH 2026 tog jag med maskinen och klippte lagkamrater i det sociala området. Det gav teamet priset Master of Sidequesting.",
      en: "At FSCH 2026 I brought my clippers and cut teammates' hair in the social area. It earned the team the Master of Sidequesting award.",
    },
  },
  feature: {
    kind: "photo",
    src: haircutFade,
    alt: { sv: "Bakifrån: en kund med lockigt hår på toppen och en ren taper fade i nacken.", en: "From behind: a client with curly hair on top and a clean taper fade at the neck." },
  } satisfies Photo,
  media: [
    {
      kind: "photo",
      src: barberFsch,
      alt: { sv: "Adrian klipper en lagkamrat som skrattar i ett tält på tävlingsområdet.", en: "Adrian cutting a laughing teammate's hair in a tent at the competition site." },
      caption: { sv: "Klippning i det sociala området på FSCH.", en: "Cutting hair in the social area at FSCH." },
    },
    {
      kind: "photo",
      src: fschTrophy,
      alt: { sv: "Vit vriden pokal med ett rött huvud på toppen och texten FSCH Master of Sidequesting.", en: "White twisted trophy with a red head on top and the text FSCH Master of Sidequesting." },
      caption: { sv: "Pokalen.", en: "The trophy." },
    },
  ] satisfies Media[],
};

export const football = {
  heading: { sv: "Fotboll", en: "Football" },
  club: "Sollentuna FK",
  body: [
    {
      sv: "Jag har spelat semiprofessionell fotboll i Sollentuna FK.",
      en: "I've played semi-professional football for Sollentuna FK.",
    },
    {
      sv: "Jag har också varit ideell tränare för Rotebro IS P08 och ledare på klubbens Football Summer Camp. Som tränare lärde jag mig att leda, samarbeta och hålla lugnet när en grupp ska prestera tillsammans.",
      en: "I also coached Rotebro IS P08 as a volunteer and was a leader at the club's Football Summer Camp. Coaching taught me to lead, cooperate and stay calm when a group needs to perform together.",
    },
  ] satisfies L[],
  roles: [
    { what: { sv: "Tidigare spelare", en: "Former player" }, where: { sv: "Sollentuna FK", en: "Sollentuna FK" } },
    { what: { sv: "Tidigare tränare, ideellt", en: "Former volunteer coach" }, where: { sv: "Rotebro IS P08", en: "Rotebro IS P08" } },
    { what: { sv: "Tidigare ledare", en: "Former leader" }, where: { sv: "Football Summer Camp, Rotebro IS", en: "Football Summer Camp, Rotebro IS" } },
  ] satisfies { what: L; where: L }[],
};

export const experience = {
  heading: { sv: "Erfarenhet och utbildning", en: "Experience and education" },
  workLabel: { sv: "Arbete", en: "Work" },
  educationLabel: { sv: "Utbildning", en: "Education" },
  skillsLabel: { sv: "Kompetenser", en: "Skills" },
  work: [
    { org: "KTH Formula Student", role: { sv: "Mechanical Design Engineer, suspension", en: "Mechanical Design Engineer, suspension" }, when: { sv: "2025–nu", en: "2025–now" } },
    { org: "Bajras Barbershop", role: { sv: "Grundare och frisör", en: "Founder and barber" }, when: { sv: "2021–nu", en: "2021–now" } },
    { org: "Hertz Sverige", role: { sv: "Biluthyrare, bilvårdare och kundtjänst", en: "Car rental, car care and customer service" }, when: null },
    { org: "McDonald's", role: { sv: "Kock och servicemedarbetare", en: "Cook and crew member" }, when: null },
    { org: "Mleva Solutions", role: { sv: "Nedmontering och montering av elektronisk utrustning", en: "Disassembly and assembly of electronic equipment" }, when: null },
    { org: "Orbotech", role: { sv: "Praktik, reparation och underhåll av städmaskiner", en: "Internship, repair and maintenance of cleaning machines" }, when: null },
    { org: { sv: "Läxhjälp", en: "Tutoring" }, role: { sv: "Matematik, NO och spanska", en: "Maths, science and Spanish" }, when: null },
    { org: "Triathlon Sverige", role: { sv: "Funktionär", en: "Event official" }, when: null },
  ] satisfies { org: string | L; role: L; when: L | null }[],
  education: [
    { org: "KTH", what: { sv: "Civilingenjör farkostteknik, masterinriktning vägfordon", en: "MSc Vehicle Engineering, Road Vehicles track" }, when: { sv: "2024–2029", en: "2024–2029" } },
    { org: "Rudbecks gymnasium", what: { sv: "Naturvetenskapsprogrammet, plus Programmering 1, Matematik 5, Engelska 7 och Spanska 4", en: "Natural Science programme, plus Programming 1, Mathematics 5, English 7 and Spanish 4" }, when: null },
    { org: "Edsbergsskolan", what: { sv: "Grundskola med matematikspecialisering", en: "Compulsory school, mathematics specialisation" }, when: null },
  ] satisfies { org: string; what: L; when: L | null }[],
  skills: [
    { sv: "Solid Edge och Siemens NX", en: "Solid Edge and Siemens NX" },
    { sv: "Grundläggande FEA", en: "Basic FEA" },
    { sv: "Mekanik och statik", en: "Mechanics and statics" },
    { sv: "Lastberäkningar och kraftanalys", en: "Load calculations and force analysis" },
    { sv: "Teknisk design", en: "Technical design" },
    { sv: "Fräsning, svarvning, vattenskärning och svetsning", en: "Milling, turning, waterjet cutting and welding" },
    { sv: "Projektledning och projektkommunikation", en: "Project management and communication" },
    { sv: "Bilreparation och trimning", en: "Car repair and tuning" },
  ] satisfies L[],
};

export const contactSection = {
  heading: { sv: "Hör av dig", en: "Get in touch" },
  text: {
    sv: "Vill du prata fordon, Formula Student eller boka en klippning? Skicka ett mejl.",
    en: "Want to talk vehicles, Formula Student or book a haircut? Send me an email.",
  },
} satisfies Record<string, L>;

export const footer = {
  note: {
    sv: "Civilingenjörsstudent i farkostteknik på KTH och medlem i KTH Formula Student.",
    en: "Vehicle Engineering student at KTH and member of KTH Formula Student.",
  },
} satisfies Record<string, L>;
