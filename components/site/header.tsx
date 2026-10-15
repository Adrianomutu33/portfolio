"use client";

import { useEffect, useState } from "react";

import { homeHref, locales, nav, ui, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ lang, className }: { lang: Locale; className?: string }) {
  return (
    <nav aria-label={ui.language[lang]} className={cn("flex items-center gap-1 text-sm", className)}>
      {locales.map((code) => (
        <a
          key={code}
          href={homeHref[code]}
          hrefLang={code}
          lang={code}
          aria-current={code === lang ? "page" : undefined}
          className={cn(
            "rounded-[2px] px-2 py-1 font-semibold uppercase transition-colors",
            code === lang ? "bg-gold text-navy" : "text-mist hover:text-paper",
          )}
        >
          {code}
        </a>
      ))}
    </nav>
  );
}

export function Header({ lang }: { lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-rule bg-navy/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
      >
        {ui.skip[lang]}
      </a>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-4 md:px-8 xl:px-12">
        <a href={homeHref[lang]} className="wide text-[15px] font-extrabold tracking-[-0.01em]" onClick={() => setOpen(false)}>
          Adrian Bajra
        </a>

        <nav aria-label={ui.menu[lang]} className="hidden xl:block">
          <ul className="flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-mist transition-colors hover:text-paper">
                  {item.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch lang={lang} className="hidden sm:flex" />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 items-center gap-2.5 rounded-[2px] px-2 text-sm font-semibold xl:hidden"
          >
            <span aria-hidden className="relative block h-3 w-5">
              <span className={cn("absolute left-0 h-[2px] w-5 bg-paper transition-transform duration-300", open ? "top-[5px] rotate-45" : "top-0")} />
              <span className={cn("absolute left-0 h-[2px] w-5 bg-paper transition-transform duration-300", open ? "top-[5px] -rotate-45" : "top-[10px]")} />
            </span>
            {open ? ui.close[lang] : ui.menu[lang]}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-navy px-4 pb-10 pt-6 md:px-8 xl:hidden"
      >
        <ul>
          {nav.map((item) => (
            <li key={item.id} className="border-b border-rule">
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="wide block py-4 text-[1.75rem] font-bold leading-none tracking-[-0.02em]">
                {item.label[lang]}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitch lang={lang} className="mt-8" />
      </div>
    </header>
  );
}
