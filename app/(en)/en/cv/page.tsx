import { CvDocument } from "@/components/site/cv-document";
import { cv } from "@/lib/cv";

export const metadata = { title: cv.title.en };

export default function Page() {
  return <CvDocument lang="en" />;
}
