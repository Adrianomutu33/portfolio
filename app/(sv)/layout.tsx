import { metadataFor, RootShell } from "@/components/site/root-shell";

export { viewport } from "@/components/site/root-shell";
export const metadata = metadataFor("sv");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="sv">{children}</RootShell>;
}
