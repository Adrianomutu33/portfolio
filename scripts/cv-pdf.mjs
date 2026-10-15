// Renders /cv and /en/cv to A4 PDFs in public/.
// usage: node scripts/cv-pdf.mjs [baseUrl]   (default http://localhost:3000; CHROME_PATH picks the browser)
// Point it at `next start`, not `next dev`, or the dev badge ends up in the PDF.
// Headless Brave hangs on macOS, so get a printer once with:
//   npx @puppeteer/browsers install chrome-headless-shell@stable --path ~/.cache/puppeteer
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";

const shellRoot = join(homedir(), ".cache/puppeteer/chrome-headless-shell");
const headlessShell = existsSync(shellRoot)
  ? readdirSync(shellRoot)
      .map((build) => join(shellRoot, build, "chrome-headless-shell-mac-arm64/chrome-headless-shell"))
      .find((path) => existsSync(path))
  : undefined;

const base = process.argv[2] ?? "http://localhost:3000";
const browser = [
  process.env.CHROME_PATH,
  headlessShell,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].find((path) => path && existsSync(path));
if (!browser) throw new Error("No Chromium-based browser found; set CHROME_PATH");

// a throwaway profile so this works while the browser is open
const profile = mkdtempSync(join(tmpdir(), "cv-pdf-"));
try {
  for (const [path, out] of [
    ["/cv", "public/AdrianBajra-CV-sv.pdf"],
    ["/en/cv", "public/AdrianBajra-CV-en.pdf"],
  ]) {
    execFileSync(browser, [
      "--headless=new",
      "--disable-gpu",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=10000",
      `--print-to-pdf=${out}`,
      `${base}${path}`,
    ]);
    console.log("wrote", out);
  }
} finally {
  rmSync(profile, { recursive: true, force: true });
}
