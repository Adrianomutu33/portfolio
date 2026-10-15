import { CvDocument } from "@/components/site/cv-document";
import { cv } from "@/lib/cv";

export const metadata = { title: cv.title.sv };

export default function Page() {
  return <CvDocument lang="sv" />;
}
